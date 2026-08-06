import Link from "next/link";
import { cn } from "@/lib/utils";
import Doodle from "@/components/doodle";

export type Page = "about" | "work" | "projects" | "garden";

type HeaderProps = { activePage: Page };

const navigation = [
  { label: "about", href: "/", page: "about", color: "text-cyan", hover: "hover:text-cyan", doodle: "smiley" },
  { label: "work", href: "/work", page: "work", color: "text-blue", hover: "hover:text-blue", doodle: "suitcase" },
  { label: "projects", href: "/projects", page: "projects", color: "text-red", hover: "hover:text-red", doodle: "puzzle-piece" },
  { label: "digital garden", href: "/garden", page: "garden", color: "text-green", hover: "hover:text-green", doodle: "clover" },
] as const;

const doodleSizes = {
  smiley: "h-[34px] w-[42px] -top-[39px]",
  suitcase: "h-[37px] w-[46px] -top-[42px]",
  "puzzle-piece": "h-10 w-[38px] -top-[45px]",
  clover: "size-8 -top-[37px]",
};

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="flex min-h-[209px] w-full flex-wrap items-center justify-between gap-x-6 gap-y-5 px-2 pb-8 pt-12 font-satoshi sm:pt-24">
      <Link href="/" className="shrink-0 text-[32px] font-black leading-9 tracking-[-0.04em]" aria-label="0xwuchuan home">
        <span className="text-tx-2">0x</span><span className="text-tx">wuchuan</span>
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-2 text-sm font-medium leading-6 sm:gap-2.5 sm:text-base">
        {navigation.map((item, index) => {
          const active = activePage === item.page;
          return (
            <div key={item.page} className="flex items-center gap-2 sm:gap-2.5">
              {index > 0 && <span className="text-tx-3">/</span>}
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn("relative transition-colors duration-100 ease-out", active ? item.color : cn("text-tx-2", item.hover))}
              >
                {active && <Doodle name={item.doodle} className={cn("absolute left-1/2 -translate-x-1/2", doodleSizes[item.doodle])} />}
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
