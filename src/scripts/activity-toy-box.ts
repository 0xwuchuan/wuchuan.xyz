interface PhysicsBody {
  element: HTMLElement;
  glyph: HTMLElement;
  width: number;
  height: number;
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularVelocity: number;
  dragging: boolean;
  pointerId?: number;
  lastPointerX?: number;
  lastPointerTime?: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

class ActivityToyBoxElement extends HTMLElement {
  cleanupPhysics?: () => void;

  connectedCallback() {
    if (this.cleanupPhysics) return;
    this.cleanupPhysics = this.initializePhysics();
  }

  disconnectedCallback() {
    this.cleanupPhysics?.();
    this.cleanupPhysics = undefined;
  }

  initializePhysics() {
    const world = this.querySelector<HTMLElement>("[data-toybox-world]");
    if (!world) return () => {};

    this.removeAttribute("data-ready");
    this.setAttribute("data-enhanced", "");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controller = new AbortController();
    const bodyElements = [...world.querySelectorAll<HTMLElement>(".activity-toybox-body")];
    const bodies: PhysicsBody[] = bodyElements.map((element) => {
      const rect = element.getBoundingClientRect();
      return {
        element,
        glyph: element.querySelector<HTMLElement>("[data-toybox-glyph]")!,
        width: rect.width,
        height: rect.height,
        radius: Math.max(rect.width, rect.height) * 0.5,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        angle: 0,
        angularVelocity: 0,
        dragging: false,
      };
    });

    let worldWidth = world.clientWidth;
    let worldHeight = world.clientHeight;
    let animationFrame = 0;
    let readyFrame = 0;
    let lastFrame = performance.now();
    let quietFrames = 0;
    let disposed = false;

    const paint = (body: PhysicsBody) => {
      body.element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0)`;
      body.glyph.style.transform = `rotate(${body.angle}deg)`;
      body.element.toggleAttribute("data-label-below", body.y < 38);
    };

    const placeBodies = (settled: boolean) => {
      worldWidth = world.clientWidth;
      worldHeight = world.clientHeight;
      const angles = [-9, 5, -14, 11, -4, 8];
      const angularVelocities = [34, -24, 42, -30, 26, -38];
      const middle = (bodies.length - 1) / 2;

      bodies.forEach((body, index) => {
        const xRatio = bodies.length === 1 ? 0.5 : 0.2 + (0.6 * index) / (bodies.length - 1);
        const outwardDirection = Math.sign(index - middle);
        body.x = clamp(worldWidth * xRatio - body.width / 2, 4, worldWidth - body.width - 4);
        body.y = settled
          ? worldHeight - body.height - 12 - (index % 2 === 1 ? 8 : 0)
          : -body.height * (0.72 + (index % 3) * 0.14);
        body.vx = settled ? 0 : outwardDirection * 24;
        body.vy = 0;
        body.angle = angles[index % angles.length];
        body.angularVelocity = settled ? 0 : angularVelocities[index % angularVelocities.length];
        paint(body);
      });
    };

    const resolveWalls = (body: PhysicsBody) => {
      const bounce = 0.54;
      const maxX = Math.max(0, worldWidth - body.width);
      const maxY = Math.max(0, worldHeight - body.height);

      if (body.x < 0) {
        body.x = 0;
        body.vx = Math.abs(body.vx) * bounce;
        body.angularVelocity += body.vy * 0.025;
      } else if (body.x > maxX) {
        body.x = maxX;
        body.vx = -Math.abs(body.vx) * bounce;
        body.angularVelocity -= body.vy * 0.025;
      }

      if (body.y < 0) {
        body.y = 0;
        body.vy = Math.abs(body.vy) * bounce;
      } else if (body.y > maxY) {
        body.y = maxY;
        body.vy = Math.abs(body.vy) < 34 ? 0 : -Math.abs(body.vy) * bounce;
        body.vx *= 0.965;
        body.angularVelocity *= 0.9;
      }
    };

    const resolveCollision = (a: PhysicsBody, b: PhysicsBody) => {
      const ax = a.x + a.width / 2;
      const ay = a.y + a.height / 2;
      const bx = b.x + b.width / 2;
      const by = b.y + b.height / 2;
      const dx = bx - ax;
      const dy = by - ay;
      const minDistance = a.radius + b.radius;
      const distance = Math.hypot(dx, dy) || 0.001;
      if (distance >= minDistance) return;

      const nx = dx / distance;
      const ny = dy / distance;
      const overlap = minDistance - distance;

      if (a.dragging) {
        b.x += nx * overlap;
        b.y += ny * overlap;
      } else if (b.dragging) {
        a.x -= nx * overlap;
        a.y -= ny * overlap;
      } else {
        a.x -= nx * overlap * 0.5;
        a.y -= ny * overlap * 0.5;
        b.x += nx * overlap * 0.5;
        b.y += ny * overlap * 0.5;
      }

      const relativeVelocityX = b.vx - a.vx;
      const relativeVelocityY = b.vy - a.vy;
      const normalVelocity = relativeVelocityX * nx + relativeVelocityY * ny;
      if (normalVelocity > 0) return;

      const impulse = -(1 + 0.58) * normalVelocity / (a.dragging || b.dragging ? 1 : 2);
      if (!a.dragging) {
        a.vx -= impulse * nx;
        a.vy -= impulse * ny;
        a.angularVelocity -= normalVelocity * 0.08;
      }
      if (!b.dragging) {
        b.vx += impulse * nx;
        b.vy += impulse * ny;
        b.angularVelocity += normalVelocity * 0.08;
      }
    };

    const tick = (time: number) => {
      if (disposed || !this.isConnected) return;
      const dt = Math.min((time - lastFrame) / 1000, 0.032);
      lastFrame = time;
      let maxSpeed = 0;

      bodies.forEach((body) => {
        if (!body.dragging) {
          body.vy += 720 * dt;
          body.vx *= Math.pow(0.992, dt * 60);
          body.angularVelocity *= Math.pow(0.987, dt * 60);
          body.x += body.vx * dt;
          body.y += body.vy * dt;
          body.angle += body.angularVelocity * dt;
          resolveWalls(body);
        }
      });

      for (let index = 0; index < bodies.length; index += 1) {
        for (let other = index + 1; other < bodies.length; other += 1) {
          resolveCollision(bodies[index], bodies[other]);
        }
      }

      bodies.forEach((body) => {
        resolveWalls(body);
        paint(body);
        maxSpeed = Math.max(maxSpeed, Math.hypot(body.vx, body.vy), Math.abs(body.angularVelocity));
      });

      quietFrames = maxSpeed < 7 && !bodies.some((body) => body.dragging) ? quietFrames + 1 : 0;
      if (quietFrames > 55) {
        animationFrame = 0;
        return;
      }
      animationFrame = requestAnimationFrame(tick);
    };

    const wake = () => {
      quietFrames = 0;
      if (animationFrame || disposed || reduceMotion || !this.isConnected) return;
      lastFrame = performance.now();
      animationFrame = requestAnimationFrame(tick);
    };

    placeBodies(reduceMotion);
    readyFrame = requestAnimationFrame(() => this.setAttribute("data-ready", ""));

    if (!reduceMotion) {
      animationFrame = requestAnimationFrame(tick);

      bodies.forEach((body) => {
        body.element.addEventListener("pointerdown", (event) => {
          event.preventDefault();
          const frameRect = world.getBoundingClientRect();
          body.dragging = true;
          body.pointerId = event.pointerId;
          body.lastPointerX = event.clientX;
          body.lastPointerTime = performance.now();
          body.vx = 0;
          body.vy = 0;
          body.element.setPointerCapture(event.pointerId);
          body.element.setAttribute("data-dragging", "");
          body.x = clamp(event.clientX - frameRect.left - body.width / 2, 0, worldWidth - body.width);
          body.y = clamp(event.clientY - frameRect.top - body.height / 2, 0, worldHeight - body.height);
          paint(body);
          wake();
        }, { signal: controller.signal });

        body.element.addEventListener("pointermove", (event) => {
          if (!body.dragging || body.pointerId !== event.pointerId) return;
          const frameRect = world.getBoundingClientRect();
          const now = performance.now();
          const dt = Math.max((now - (body.lastPointerTime ?? now)) / 1000, 0.008);
          const nextX = clamp(event.clientX - frameRect.left - body.width / 2, 0, worldWidth - body.width);
          const nextY = clamp(event.clientY - frameRect.top - body.height / 2, 0, worldHeight - body.height);
          body.vx = clamp((nextX - body.x) / dt, -650, 650);
          body.vy = clamp((nextY - body.y) / dt, -650, 650);
          body.angularVelocity = clamp((event.clientX - (body.lastPointerX ?? event.clientX)) / dt * 0.16, -220, 220);
          body.x = nextX;
          body.y = nextY;
          body.lastPointerX = event.clientX;
          body.lastPointerTime = now;
          paint(body);
        }, { signal: controller.signal });

        const release = (event: PointerEvent) => {
          if (!body.dragging || body.pointerId !== event.pointerId) return;
          body.dragging = false;
          body.pointerId = undefined;
          body.element.removeAttribute("data-dragging");
          wake();
        };

        body.element.addEventListener("pointerup", release, { signal: controller.signal });
        body.element.addEventListener("pointercancel", release, { signal: controller.signal });
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      worldWidth = world.clientWidth;
      worldHeight = world.clientHeight;
      bodies.forEach((body) => {
        const rect = body.element.getBoundingClientRect();
        body.width = rect.width;
        body.height = rect.height;
        body.radius = Math.max(rect.width, rect.height) * 0.5;
        body.x = clamp(body.x, 0, worldWidth - body.width);
        body.y = clamp(body.y, 0, worldHeight - body.height);
        paint(body);
      });
      wake();
    });
    resizeObserver.observe(world);

    return () => {
      disposed = true;
      controller.abort();
      resizeObserver.disconnect();
      if (readyFrame) cancelAnimationFrame(readyFrame);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      this.removeAttribute("data-enhanced");
      this.removeAttribute("data-ready");
      bodies.forEach((body) => {
        body.element.removeAttribute("data-dragging");
        body.element.removeAttribute("data-label-below");
        body.element.removeAttribute("style");
        body.glyph.removeAttribute("style");
      });
    };
  }
}

if (!customElements.get("activity-toy-box")) {
  customElements.define("activity-toy-box", ActivityToyBoxElement);
}
