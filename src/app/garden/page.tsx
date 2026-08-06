import { Metadata } from "next";
import NoteList from "@/components/note-list";
import SiteShell from "@/components/site-shell";
import { notes } from "@/data/notes";

export const metadata: Metadata = { title: "digital garden" };

export default function Garden() {
  return (
    <SiteShell activePage="garden">
      <main>
        <div className="px-2 text-base leading-[26px] text-tx">
          <p className="mb-5">
            i have made a few attempts at starting and maintaining a blog but none of them stuck for long enough to make it a habit. the main reason being that i have never even written a complete blog post. i fear that my writing is factually incorrect. i fear that the post isn’t written well enough. i fear that people are going to judge me because of the above.
          </p>
          <p className="mb-5">
            graham weaver’s lecture on “how to win without crushing your soul” has motivated me to try again. this time, instead of a blog i will try to maintain a digital garden. there are already a lot of articles out there explaining what a digital garden is. the difference between a digital garden and a blog is that the notes do not need to be perfect. they are meant to be iterated on. notes start as seeds and blossom into full grown plants and trees (well written posts i hope) when given enough love, care, and attention.
          </p>
          <p className="mb-0">
            digital gardening starts with the concept of evergreen notes. to be completely honest i don’t really understand evergreen notes fully but my objective is to experiment with evergreen notes myself and come to my own conclusion and my own approach to writing notes
          </p>
        </div>
        <NoteList notes={notes.slice(0, 3)} title="latest notes" showAllLink showTree />
      </main>
    </SiteShell>
  );
}
