import Link from "next/link";

export type ExperienceProps = {
  title: string;
  place: string;
  placelink: string;
  year: string;
  description: string;
};

export function Experience(props: ExperienceProps) {
  return (
    <section className="p-2 pb-5 whitespace-normal font-satoshi leading-relaxed lowercase">
      <Link
        href={props.placelink}
        className="hover:underline hover:text-blue-500 transition duration-100 ease-in"
      >
        <p className="mb-2 font-bold">
          {props.title} at {props.place}
        </p>
      </Link>
      <ul className="space-y-2 font-light text-white/90">
        <li>{props.description}</li>
      </ul>
    </section>
  );
}
