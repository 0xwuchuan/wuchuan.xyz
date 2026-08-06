import { Metadata } from "next";
import Header from "@/components/header";
import NoteList from "@/components/note-list";
import { notes } from "@/data/notes";

export const metadata: Metadata = { title: "all notes" };

export default function AllNotes() {
  const years = Array.from(new Set(notes.map((note) => note.year))).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="w-full max-w-[896px] px-6 text-tx sm:px-10">
      <Header activePage="garden" />
      <main>
        {years.map((year, index) => (
          <div key={year} className={index < years.length - 1 ? "mb-8" : undefined}>
            <NoteList notes={notes.filter((note) => note.year === year)} title={year} />
          </div>
        ))}
      </main>
    </div>
  );
}
