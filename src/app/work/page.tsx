import { Metadata } from "next";
import { Experience, ExperienceProps } from "@/components/experience";
import SiteShell from "@/components/site-shell";
import experiences from "@/data/experiences.json";

export const metadata: Metadata = { title: "work" };

export default function Work() {
  const grouped: Record<string, ExperienceProps[]> = {};
  experiences.forEach((experience) => {
    const year = experience.year === "current" ? "2025" : experience.year;
    (grouped[year] ??= []).push(experience);
  });

  return (
    <SiteShell activePage="work">
      <main className="pt-2">
        {Object.keys(grouped).sort((a, b) => Number(b) - Number(a)).map((year) => (
          <section key={year}>
            <h2 className="px-2 font-satoshi text-base font-bold leading-6 text-tx-2">{year}</h2>
            <ul>{grouped[year].map((experience) => <Experience key={`${experience.title}-${experience.place}`} {...experience} />)}</ul>
          </section>
        ))}
      </main>
    </SiteShell>
  );
}
