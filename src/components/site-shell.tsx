import Header, { Page } from "@/components/header";

type SiteShellProps = {
  activePage: Page;
  children: React.ReactNode;
};

export default function SiteShell({ activePage, children }: SiteShellProps) {
  return (
    <div className="w-full max-w-[800px] px-6 text-tx sm:px-10">
      <Header activePage={activePage} />
      {children}
    </div>
  );
}
