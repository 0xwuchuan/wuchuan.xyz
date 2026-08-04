import Link from "next/link";
import { cn } from "@/lib/utils";

type Page = "about" | "work" | "projects" | "garden";

type HeaderProps = {
  activePage: Page;
  spacing?: "default" | "roomy";
};

const navigation = [
  { label: "about", href: "/", page: "about", color: "text-cyan" },
  { label: "work", href: "/experiences", page: "work", color: "text-blue" },
  { label: "projects", href: "/projects", page: "projects", color: "text-red" },
  {
    label: "digital garden",
    href: "/garden",
    page: "garden",
    color: "text-green",
  },
] as const;

export default function Header({ activePage, spacing = "default" }: HeaderProps) {
  return (
    <header className={cn("px-2 pt-12 sm:pt-24", spacing === "roomy" ? "pb-10" : "pb-0")}>
      <Link
        href="/"
        className="font-chivo text-[32px] font-bold leading-[36px] tracking-[-0.04em] text-tx"
        aria-label="0xwuchuan home"
      >
        0xwuchuan
      </Link>
      <nav aria-label="Primary" className="mt-5 flex items-center gap-2.5 font-satoshi text-base font-medium">
        {navigation.map((item, index) => (
          <div key={item.page} className="flex items-center gap-2.5">
            {index > 0 && <span className="text-tx-3">/</span>}
            <Link
              href={item.href}
              aria-current={activePage === item.page ? "page" : undefined}
              className={cn(
                "transition-colors duration-100 ease-out hover:text-cyan",
                activePage === item.page ? item.color : "text-tx-2",
              )}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
}
