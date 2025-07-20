import Link from "next/link";

type BreadcrumbProps = {
  page: string;
  color: string;
};

const variants: { [key: string]: string } = {
  red: "text-red",
  blue: "text-blue",
};

export default function Breadcrumb(props: BreadcrumbProps) {
  return (
    <p className="pl-2 mb-4 font-satoshi font-bold">
      <Link
        href="/"
        className="hover:text-tx/90 transition-colors duration-75 ease-in-out"
      >
        home
      </Link>
      {" > "}
      <a className={variants[props.color]}>{props.page}</a>
    </p>
  );
}
