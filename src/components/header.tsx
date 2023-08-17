import { Separator } from "./ui/separator";

export default function Header() {
  return (
    <header className="pt-24">
      <span className="p-2 text-2xl font-bold">Khoo Wu Chuan</span>
      <p className="p-2 text-neutral-400">
        Final Year Computing Undergraduate at National University of Singapore
      </p>
      <Separator className="my-3 opacity-50 bg-neutral-700" />
    </header>
  );
}
