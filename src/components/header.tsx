import RotatingImage from "@/components/rotatingImage";

export default function Header() {
  return (
    <header className="flex flex-row justify-between pt-36 pb-10 ">
      <div className="mt-7">
        <span className="p-2 text-5xl font-black font-chivo">
          <a className="text-[#59595A]">0x</a>wuchuan
        </span>
        <p className="px-2 pt-4 font-medium font-satoshi">
          Final Year Computing Undergraduate at National University of Singapore
        </p>
      </div>
      <RotatingImage />
    </header>
  );
}
