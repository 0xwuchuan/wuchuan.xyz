import Link from "next/link";
import Doodle from "@/components/doodle";
import { Note } from "@/data/notes";

type NoteListProps = {
  notes: Note[];
  title?: string;
  showAllLink?: boolean;
  showTree?: boolean;
};

export default function NoteList({ notes, title, showAllLink = false, showTree = false }: NoteListProps) {
  return (
    <section className="relative w-full px-2">
      {(title || showAllLink) && (
        <div className="flex min-h-[31px] items-start justify-between font-satoshi text-base leading-6">
          {title && <h2 className="font-bold text-tx">{title}</h2>}
          {showAllLink && <Link href="/garden/notes" className="text-tx-2 transition-colors duration-100 ease-out hover:text-green">view all notes &gt;</Link>}
        </div>
      )}
      {showTree && <Doodle name="tree" className="absolute left-[99px] top-[-6px] h-9 w-[29px] text-green" />}
      <ul>
        {notes.map((note, index) => (
          <li key={`${note.year}-${index}`} className="border-b border-ui-2">
            <Link href={`/garden/notes/${note.slug}`} className="grid min-h-[43px] grid-cols-[109px_minmax(0,1fr)] items-center gap-2 text-base leading-[26px] transition-colors duration-100 ease-out hover:text-green">
              <time className="text-tx-2">{note.date}{title === "latest notes" ? ` ${note.year}` : ""}</time>
              <span className="text-tx">{note.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
