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
    <section className="p-2 pb-5 whitespace-normal font-satoshi leading-relaxed lowercase">
      <Link
        href={props.link}
        className="hover:underline hover:text-red-500 transition duration-100 ease-in"
      >
        <p className="mb-2 font-bold">{props.name}</p>
      </Link>
      <ul className="space-y-2 font-light text-white/90">
        <li>{props.description}</li>
      </ul>
    </section>
  );
}
