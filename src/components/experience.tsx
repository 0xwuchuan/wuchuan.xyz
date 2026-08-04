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
    <li className="p-2 pb-4 font-satoshi text-[19px] lowercase leading-[26.6px]">
      <Link
        href={props.placelink}
        className="font-bold transition-colors duration-100 ease-out hover:text-blue"
      >
        {props.title} at {props.place}
      </Link>
    </li>
  );
}
