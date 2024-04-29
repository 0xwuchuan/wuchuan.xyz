import Link from "next/link";

export type ExperienceProps = {
  title: string;
  place: string;
  placelink: string;
  year: string;
  descriptions: string[];
};

export function Experience(props: ExperienceProps) {
  return (
    <section className="p-2 pb-5 whitespace-normal font-satoshi leading-relaxed">
      <p className="font-semibold">{props.title}</p>
      <Link href={props.placelink}>
        <p className="mb-2  hover:underline hover:text-blue-500 transition duration-100 ease-in">
          {props.place}
        </p>
      </Link>
      <ul className="list-disc list-outside ms-4">
        {props.descriptions.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </section>
  );
}
