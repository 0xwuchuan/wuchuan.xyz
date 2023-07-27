import { Separator } from "./ui/separator";

export default function Header() {
  return (
    <header className="pt-24">
      <span className="px-2 text-xl font-bold">Khoo Wu Chuan</span>
      <p className="px-2 text-sm text-neutral-400">
        Final Year Computing Undergraduate at National University of Singapore
      </p>
      <Separator className="my-4 opacity-50 bg-neutral-700" />
      <ul className="flex justify-between h-5 px-4 text-sm">
        <li>About</li>
        <Separator
          orientation="vertical"
          className="opacity-50 bg-neutral-700"
        />
        <li>Experience</li>
        <Separator
          orientation="vertical"
          className="opacity-50 bg-neutral-700"
        />
        <li>Projects</li>
        <Separator
          orientation="vertical"
          className="opacity-50 bg-neutral-700"
        />
        <li>Blog</li>
        <Separator
          orientation="vertical"
          className="opacity-50 bg-neutral-700"
        />
        <li>Contact</li>
      </ul>
      <Separator className="my-4 opacity-50 bg-neutral-700" />
    </header>
  );
}
