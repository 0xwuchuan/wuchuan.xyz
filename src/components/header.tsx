import RotatingImage from "@/components/rotatingImage";

export default function Header() {
  return (
    <header className="flex flex-row justify-between pt-36 pb-10 font-chivo">
      <div className="mt-7">
        <span className="p-2 text-5xl font-black">
          <a className="text-[#59595A]">0x</a>wuchuan
        </span>
        <p className="px-2 pt-4 font-light">
          Final Year Computing Undergraduate at National University of Singapore
        </p>
      </div>
      <RotatingImage />
    </header>
  );
}
