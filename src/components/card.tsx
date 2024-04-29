import { cn } from "@/lib/utils";
import Link from "next/link";

type CardProps = {
  cardColor: string;
  cardName: string;
  cardDesc: string;
};

type colorConfigType = {
  bg: string;
  border: string;
  text: string;
};

const colorConfig: Record<string, colorConfigType> = {
  red: {
    bg: "hover:bg-red-900",
    border: "hover:border-red-500",
    text: "hover:text-red-500",
  },
  blue: {
    bg: "hover:bg-blue-900",
    border: "hover:border-blue-500",
    text: "hover:text-blue-500",
  },
  yellow: {
    bg: "hover:bg-yellow-900",
    border: "hover:border-yellow-500",
    text: "hover:text-yellow-500",
  },
};

export default function Card(props: CardProps) {
  return (
    <Link
      className={cn(
        "font-satoshi py-2 px-6 my-3",
        `${colorConfig[props.cardColor].bg} hover:bg-opacity-25`,
        `hover:border-l-2 ${colorConfig[props.cardColor].border}`,
        colorConfig[props.cardColor].text,
        "border-l-2 transition duration-100 ease-linear",
      )}
      href={`/${props.cardName}`}
    >
      <div className="">
        <h2 className="text-lg font-bold ">{props.cardName}</h2>
        <p className="pt-2 font-light">{props.cardDesc}</p>
      </div>
    </Link>
  );
}
