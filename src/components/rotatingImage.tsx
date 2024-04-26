import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import portrait from "@/public/display/portrait.jpg";
import teddy from "@/public/display/teddy.png";
import beanz from "@/public/display/beanz.png";
import stellar from "@/public/display/stellar.png";

export default function RotatingImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images: StaticImageData[] = [portrait, stellar, teddy, beanz];

  const handleClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div
      className="cursor-pointer hover:scale-110 transform transition duration-100 ease-in-out"
      onClick={handleClick}
    >
      <Image
        src={images[currentImageIndex]}
        alt="Display Picture"
        width={140}
        height={140}
        className="rounded-2xl"
      />
    </div>
  );
}
