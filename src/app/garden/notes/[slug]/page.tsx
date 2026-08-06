import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";

const slug = "energy-is-the-language-of-our-soul";

export const metadata: Metadata = { title: "energy is the language of our soul" };
export function generateStaticParams() { return [{ slug }]; }

export default function NotePage({ params }: { params: { slug: string } }) {
  if (params.slug !== slug) notFound();

  return (
    <div className="w-full max-w-[896px] px-6 text-tx sm:px-10">
      <Header activePage="garden" />
      <main className="px-2">
        <header>
          <h1 className="font-satoshi text-[34px] font-bold leading-[42px] tracking-[-0.035em] text-tx sm:text-[40px] sm:leading-[46px]">energy is the language of our soul</h1>
          <p className="mt-3.5 font-satoshi text-sm leading-5 text-tx-2">last updated · 24 june 2024</p>
        </header>
        <article className="mb-[72px] mt-11 text-[17px] leading-[29px] text-tx">
          <p className="mb-7">
            this was a quote from graham weaver&apos;s last lecture{" "}
            <Link href="https://www.youtube.com/watch?v=dZ3YCGCkzHk" className="text-green transition-colors duration-100 ease-out hover:text-tx">how to win without crushing your soul</Link>{" "}
            at stanford&apos;s mba course which really resonated with me so i wanted to write a short note about it so i can review it in the future
          </p>
          <p className="mb-7">
            this quote was specifically mentioned in the third part of practices of metacognition: “listen to your second voice”. graham refers to our second voice as our soul, for religious people it might be their god. how do we listen to our soul? graham says that it is through our energy. the energy we give off when we talk about something, or the bad energy that we exude when we do something we dislike.
          </p>
          <p className="mb-7">
            personally, whenever i have a decision to make i leave it to chance. i either flip a coin or roll a dice (on telegram) and make my decisions based on the result. when i flip a coin and it lands on a choice that i didn&apos;t really want in the first place, i get disappointed. that is my soul talking to me.
          </p>
          <p>
            often times, we already know what decision we want to make. i tend to overthink my decisions and end up rationalising why i didn&apos;t take a leap of faith and end up regretting the decision later on. this note is a reminder to myself that<br />
            i should follow my energy. <span className="text-green">life is an internal game played on an external stage</span>
          </p>
        </article>
      </main>
    </div>
  );
}
