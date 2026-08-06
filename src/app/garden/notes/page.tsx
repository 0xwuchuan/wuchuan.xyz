import { Metadata } from "next";
import NoteList from "@/components/note-list";
import SiteShell from "@/components/site-shell";
import { notes } from "@/data/notes";

export const metadata: Metadata = { title: "all notes" };

export default function AllNotes() {
  const years = Array.from(new Set(notes.map((note) => note.year))).sort((a, b) => Number(b) - Number(a));

  return (
    <SiteShell activePage="garden">
      <main>
        {years.map((year, index) => (
          <div key={year} className={index < years.length - 1 ? "mb-8" : undefined}>
            <NoteList notes={notes.filter((note) => note.year === year)} title={year} />
          </div>
        ))}
      </main>
    </SiteShell>
  );
}
