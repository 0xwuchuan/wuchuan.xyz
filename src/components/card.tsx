import { cn } from "@/lib/utils";
import Link from "next/link";

type CardProps = {
  cardColor: string;
  cardName: string;
  cardDesc: string;
};

type variantsType = {
  bg: string;
  border: string;
  text: string;
};

const variants: { [key: string]: variantsType } = {
  red: {
    bg: "hover:bg-red-dark/10",
    border: "hover:border-red-dark",
    text: "hover:text-red-dark",
  },
  blue: {
    bg: "hover:bg-blue-dark/10",
    border: "hover:border-blue-dark",
    text: "hover:text-blue-dark",
  },
  yellow: {
    bg: "hover:bg-yellow-dark/10",
    border: "hover:border-yellow-dark",
    text: "hover:text-yellow-dark",
  },
};

export default function Card(props: CardProps) {
  return (
    <Link
      className={cn(
        "font-satoshi text-tx-dark py-2 px-6 my-3",
        `${variants[props.cardColor].bg} hover:bg-opacity-25`,
        `hover:border-l-2 ${variants[props.cardColor].border}`,
        variants[props.cardColor].text,
        "border-l-2 transition duration-100 ease-linear",
      )}
      href={`${props.cardName}`}
    >
      <div className="">
        <h2 className="text-lg font-bold ">{props.cardName}</h2>
        <p className="pt-2 font-light">{props.cardDesc}</p>
      </div>
    </Link>
  );
}
