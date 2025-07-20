import { Metadata } from "next";
import { ExperienceProps, Experience } from "@/components/experience";
import Header from "@/components/header";
import Breadcrumb from "@/components/breadcrumb";

import experiences from "@/public/experiences.json";

export const metadata: Metadata = {
  title: "experiences",
};

export default function Home() {
  const experiencesByYear: Record<string, ExperienceProps[]> = {};

  experiences.forEach((experience) => {
    const year: string =
      experience.year === "current"
        ? new Date().getFullYear().toString()
        : experience.year;
    if (!experiencesByYear[year]) {
      experiencesByYear[year] = [];
    }
    experiencesByYear[year].push(experience);
  });

  // Sort experiences by year in descending order (except for 'current' year)
  const sortedYears = Object.keys(experiencesByYear).sort((a, b) => {
    if (a === "current") return -1; // 'current' year comes first
    return parseInt(b) - parseInt(a); // Sort other years in descending order
  });

  return (
    <div className="max-w-4xl px-10 grow text-tx-dark">
      <Header />
      <Breadcrumb page="experiences" color="blue" />
      {sortedYears.map((year, i) => (
        <div key={i}>
          <p className="pl-2 font-satoshi font-bold text-tx-2-dark">{year}</p>
          <ul>
            {experiencesByYear[year].map((experience, j) => (
              <Experience key={j} {...experience} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
