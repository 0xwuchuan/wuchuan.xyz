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
    bg: "hover:bg-red/10",
    border: "hover:border-red",
    text: "hover:text-red",
  },
  blue: {
    bg: "hover:bg-blue/10",
    border: "hover:border-blue",
    text: "hover:text-blue",
  },
  yellow: {
    bg: "hover:bg-yellow/10",
    border: "hover:border-yellow",
    text: "hover:text-yellow",
  },
};

export default function Card(props: CardProps) {
  return (
    <Link
      className={cn(
        "font-satoshi text-tx py-2 px-6 my-3",
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
