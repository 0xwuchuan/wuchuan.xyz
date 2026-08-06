import { Metadata } from "next";
import Header from "@/components/header";
import { Experience, ExperienceProps } from "@/components/experience";
import experiences from "@/data/experiences.json";

export const metadata: Metadata = { title: "work" };

export default function Work() {
  const grouped: Record<string, ExperienceProps[]> = {};
  experiences.forEach((experience) => {
    const year = experience.year === "current" ? "2025" : experience.year;
    (grouped[year] ??= []).push(experience);
  });

  return (
    <div className="w-full max-w-[896px] px-6 text-tx sm:px-10">
      <Header activePage="work" />
      <main className="pt-2">
        {Object.keys(grouped).sort((a, b) => Number(b) - Number(a)).map((year) => (
          <section key={year}>
            <h2 className="px-2 font-satoshi text-base font-bold leading-6 text-tx-2">{year}</h2>
            <ul>{grouped[year].map((experience) => <Experience key={`${experience.title}-${experience.place}`} {...experience} />)}</ul>
          </section>
        ))}
      </main>
    </div>
  );
}
