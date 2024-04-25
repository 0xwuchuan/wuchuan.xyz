import { cn } from "@/lib/utils";

type CardProps = {
  cardColor: string;
  cardName: string;
  cardDesc: string;
};

export default function Card(props: CardProps) {
  return (
    <div
      className={cn(
        props.cardColor,
        "min-h-[300px] min-w-[235px] rounded-3xl ",
        "hover:translate-y-5",
        "transform transition duration-100 ease-in-out hover:-translate-y-1",
        "hover:shadow-lg",
      )}
    >
      <div className="px-6 pt-4">
        <h2 className="text-lg font-chivo font-semibold md:text-2xl">
          {props.cardName}
        </h2>
        <p className="font-switzer max-w-full pt-2 text-sm sm:text-base md:max-w-[65%]">
          {props.cardDesc}
        </p>
      </div>
    </div>
  );
}
