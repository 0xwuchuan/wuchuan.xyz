import Link from "next/link";
import { cn } from "@/lib/utils";

type Page = "about" | "work" | "projects" | "garden";

type HeaderProps = {
  activePage: Page;
};

const navigation = [
  {
    label: "about",
    href: "/",
    page: "about",
    color: "text-cyan",
    hoverColor: "hover:text-cyan",
  },
  {
    label: "work",
    href: "/experiences",
    page: "work",
    color: "text-blue",
    hoverColor: "hover:text-blue",
  },
  {
    label: "projects",
    href: "/projects",
    page: "projects",
    color: "text-red",
    hoverColor: "hover:text-red",
  },
  {
    label: "digital garden",
    href: "/garden",
    page: "garden",
    color: "text-green",
    hoverColor: "hover:text-green",
  },
] as const;

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5 px-2 pt-12 pb-8 sm:pt-24">
      <Link
        href="/"
        className="font-chivo text-[32px] font-bold leading-[36px] tracking-[-0.04em] text-tx"
        aria-label="0xwuchuan home"
      >
        0xwuchuan
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-2.5 font-satoshi text-base font-medium">
        {navigation.map((item, index) => (
          <div key={item.page} className="flex items-center gap-2.5">
            {index > 0 && <span className="text-tx-3">/</span>}
            <Link
              href={item.href}
              aria-current={activePage === item.page ? "page" : undefined}
              className={cn(
                "transition-colors duration-100 ease-out",
                activePage === item.page ? item.color : cn("text-tx-2", item.hoverColor),
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
