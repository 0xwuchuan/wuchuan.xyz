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
    <p className="mb-11 pl-2 font-satoshi text-[19px] font-medium leading-[26.6px]">
      <Link
        href="/"
        className="hover:text-cyan transition-colors duration-75 ease-in-out"
      >
        home
      </Link>
      {" > "}
      <a className={variants[props.color]}>{props.page}</a>
    </p>
  );
}
