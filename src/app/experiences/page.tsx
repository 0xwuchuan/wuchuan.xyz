import { Metadata } from "next";
import { ExperienceProps, Experience } from "@/components/experience";
import Header from "@/components/header";

import experiences from "@/data/experiences.json";

export const metadata: Metadata = {
  title: "work",
};

export default function Work() {
  const experiencesByYear: Record<string, ExperienceProps[]> = {};

  experiences.forEach((experience) => {
    const year =
      experience.year === "current"
        ? new Date().getFullYear().toString()
        : experience.year;
    (experiencesByYear[year] ??= []).push(experience);
  });

  const sortedYears = Object.keys(experiencesByYear).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  return (
    <div className="w-full max-w-4xl px-6 text-tx sm:px-10">
      <Header activePage="work" />
      {sortedYears.map((year) => (
        <section key={year}>
          <p className="pl-2 font-satoshi font-bold text-tx-2">{year}</p>
          <ul>
            {experiencesByYear[year].map((experience) => (
              <Experience key={`${experience.title}-${experience.place}`} {...experience} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
