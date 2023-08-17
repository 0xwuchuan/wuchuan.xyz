import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="mt-10">
      <Separator className="my-5 opacity-50 bg-neutral-700" />
      <div className="flex justify-between">
        <p className="px-2 text-sm text-neutral-300">contact me</p>
        {/* For all contact methods */}
        <div>
          <p className="px-2 text-sm text-neutral-300">email</p>
        </div>
      </div>
    </footer>
  );
}
