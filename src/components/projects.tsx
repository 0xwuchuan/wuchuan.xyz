import { Separator } from "./ui/separator";

export default function Project() {
  return (
    // TODO: Create projectcard (Projects are stored in a JSON file)
    <section className="mt-5 whitespace-normal">
      <h1 className="px-2 text-sm text-neutral-400">Projects</h1>
      <Separator className="mt-1 mb-3 opacity-50 bg-neutral-700" />
      <div className="flex justify-between px-2">
        <p className="mb-2">SynchroNUS</p>
        {/* Date */}
        <p className="text-sm text-neutral-400">2022</p>
      </div>
      <p className="px-2 text-sm text-neutral-400">
        Secure centralized platform for NUS Students to connected with
        like-minded peers
      </p>
    </section>
  );
}
