import { ExperienceProps } from "@/components/experience";
import experiences from "@/public/experiences.json";
import Link from "next/link";

export default function About() {
  const currentJob = experiences.find(
    (exp: ExperienceProps) => exp.year === "current",
  )!;

  return (
    <section className="p-2 pb-3 whitespace-normal font-satoshi font-normal text-offwhite leading-relaxed">
      <p className="mb-5">
        hey there stranger 👋, i’m a singapore based software engineer
        passionate about utilizing technology to its fullest by embracing
        exceptional products and platforms, with a goal to be behind one of them
        in the future.
      </p>
      <p className="mb-5 lowercase">
        currently a{" "}
        <Link
          href={currentJob.placelink}
          className="hover:underline hover:text-offwhite/90 transition duration-100 ease-linear"
        >
          {currentJob.title} at {currentJob.place}
        </Link>
      </p>
      <p>
        in my free time i enjoy climbing (plastic) rocks, watching/playing
        basketball, and hanging out with friends.
      </p>
    </section>
  );
}
