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
    <li className="px-2 pt-2 pb-5 font-satoshi text-base lowercase leading-[26px]">
      <Link
        href={props.placelink}
        className="mb-2 block font-bold text-tx transition-colors duration-100 ease-out hover:text-blue"
      >
        {props.title} at {props.place}
      </Link>
      <p className="font-light text-tx/90">{props.description}</p>
    </li>
  );
}
