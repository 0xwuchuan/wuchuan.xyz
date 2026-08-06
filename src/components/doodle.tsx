import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type DoodleProps = {
  name: "smiley" | "suitcase" | "puzzle-piece" | "clover" | "tree" | "basketball" | "climbing-holds" | "running";
  className?: string;
  label?: string;
};

export default function Doodle({ name, className, label }: DoodleProps) {
  const image = `url(/doodles/${name}.svg)`;
  const style = {
    WebkitMaskImage: image,
    maskImage: image,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  } as CSSProperties;

  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("pointer-events-none block bg-current", className)}
      style={style}
    />
  );
}
