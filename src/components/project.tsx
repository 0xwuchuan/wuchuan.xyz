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
    <section className="p-2 pb-4 font-satoshi lowercase leading-relaxed">
      <Link
        href={props.link}
        className="font-bold transition-colors duration-100 ease-out hover:text-red"
      >
        {props.name}
      </Link>
    </section>
  );
}
