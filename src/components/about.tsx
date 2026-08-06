import Link from "next/link";
import Doodle from "@/components/doodle";

export default function About() {
  return (
    <main className="relative min-h-[342px] px-2 pb-3 pt-2 text-base font-normal leading-[26px] text-tx">
      <div className="max-w-[632px] lowercase">
        <p className="mb-5">
          currently a software engineer at{" "}
          <Link href="https://www.okx.com/en-sg" className="transition-colors duration-100 ease-out hover:text-cyan">okx</Link>.
          previously worked at ___ and others
          <br /><br />
          i&apos;m curious by nature and enjoy working on hard problems. i love learning about all things tech, and lately i&apos;ve been going deep into blockchain technology, defi and ai.
        </p>
        <p>
          i touch grass through, but am not limited to: travelling, climbing (plastic) rocks, voluntarily suffering through runs, playing and watching sports, and spending time with friends
        </p>
      </div>

      <Doodle name="climbing-holds" className="absolute left-[250px] top-[226px] hidden h-[60px] w-[86px] rotate-[12deg] text-purple sm:block" />
      <Doodle name="basketball" className="absolute left-[76px] top-[246px] hidden h-[54px] w-[58px] -rotate-[20deg] text-orange sm:block" />
      <Doodle name="running" className="absolute left-[455px] top-[240px] hidden h-14 w-[82px] -rotate-[7deg] text-magenta sm:block" />
    </main>
  );
}
