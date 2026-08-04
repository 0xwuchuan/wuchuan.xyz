import Link from "next/link";

export type ProjectProps = {
  name: string;
  link: string;
  description: string;
  status: string;
  order: number;
};

export function Project(props: ProjectProps) {
  return (
    <section className="px-2 pt-2 pb-5 font-satoshi text-base lowercase leading-[26px]">
      <Link
        href={props.link}
        className="mb-2 block font-bold text-tx transition-colors duration-100 ease-out hover:text-red"
      >
        {props.name}
      </Link>
      <p className="font-light text-tx/90">{props.description}</p>
    </section>
  );
}
