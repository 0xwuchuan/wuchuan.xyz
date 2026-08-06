(() => {
  const key = "wuchuan-theme";
  const root = document.documentElement;

  const apply = (theme, persist = false) => {
    const light = theme === "light";
    root.classList.toggle("light", light);
    root.dataset.theme = light ? "light" : "dark";
    root.style.colorScheme = light ? "light" : "dark";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", light ? "#fffcf0" : "#100f0f");
    if (persist) {
      try {
        localStorage.setItem(key, light ? "light" : "dark");
      } catch {
        // The preference remains active for this page when storage is unavailable.
      }
    }
  };

  let stored;
  try {
    stored = localStorage.getItem(key);
  } catch {
    stored = null;
  }
  apply(stored === "light" ? "light" : "dark");

  const toggle = () => {
    apply(root.dataset.theme === "light" ? "dark" : "light", true);
  };

  const activePageForPath = (pathname) => {
    if (pathname === "/") return "about";
    if (pathname === "/work") return "work";
    if (pathname === "/projects") return "projects";
    if (pathname === "/blog" || pathname.startsWith("/blog/")) return "blog";
    return null;
  };

  const syncNavigation = () => {
    const activePage = activePageForPath(window.location.pathname);

    document.querySelectorAll("[data-nav-page]").forEach((link) => {
      const active = link.getAttribute("data-nav-page") === activePage;
      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  document.addEventListener("astro:before-swap", (event) => {
    const nextRoot = event.newDocument.documentElement;
    const light = root.dataset.theme === "light";

    nextRoot.classList.toggle("light", light);
    nextRoot.dataset.theme = light ? "light" : "dark";
    nextRoot.style.colorScheme = light ? "light" : "dark";
    event.newDocument
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", light ? "#fffcf0" : "#100f0f");
  });

  document.addEventListener("astro:after-swap", syncNavigation);

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isEditable =
      target instanceof HTMLElement &&
      (target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

    if (event.key.toLowerCase() === "d" && !event.metaKey && !event.ctrlKey && !event.altKey && !isEditable) {
      toggle();
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("[data-theme-toggle]")) {
      toggle();
    }
  });
})();
