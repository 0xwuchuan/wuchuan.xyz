import { ExperienceProps } from "@/components/experience";
import experiences from "@/data/experiences.json";
import Link from "next/link";

export default function About() {
  const currentJob = experiences.find(
    (exp: ExperienceProps) => exp.year === "current",
  )!;

  return (
    <section className="whitespace-normal px-2 pt-2 pb-3 font-open-sans text-base font-normal leading-[26px] text-tx">
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
          className="hover:text-cyan transition duration-100 ease-linear"
        >
          {currentJob.title} at {currentJob.place}
        </Link>
      </p>
      <p>
        in my free time i enjoy climbing (plastic) rocks, watching various
        sports, and hanging out with friends.
      </p>
    </section>
  );
}
