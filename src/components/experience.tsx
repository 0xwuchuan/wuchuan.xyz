import { Separator } from "./ui/separator";

export default function Experience() {
  return (
    // TODO: Create experience card (Projects are stored in a JSON file)
    <section className="mt-5 whitespace-normal">
      <h1 className="px-2 text-sm text-neutral-400">Experience</h1>
      <Separator className="mt-1 mb-3 opacity-50 bg-neutral-700" />
      <p className="px-2 mb-2">
        <span className="text-emerald-400">Currently - </span>
        Blockchain Developer at NUS Fintech Society
      </p>

      <p className="px-2 mb-2">
        <span className="text-amber-400">Previously - </span>
        Blockchain Engineer Intern at Nested Technologies
      </p>
    </section>
  );
}
