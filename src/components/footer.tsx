import Link from "next/link";
import MusicPlayer from "@/components/music-player";

interface FooterProps {
  showMusicPlayer?: boolean;
}

export default function Footer({ showMusicPlayer = false }: FooterProps) {
  return (
    <footer className="my-3 px-2 py-2 font-inter">
      <div
        className={`${
          showMusicPlayer ? "flex flex-row justify-between" : "flex flex-col"
        } items-start`}
      >
        {/* Left side - existing links */}
        <div className="flex flex-col gap-0">
          <div className="flex flex-row gap-4 text-tx-2 mb-2">
            <Link
              href="https://twitter.com/0xwuchuan"
              className="hover:text-cyan transition duration-100 ease-linear"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </Link>
            <Link
              href="https://www.linkedin.com/in/khoowuchuan/"
              className="hover:text-cyan transition duration-100 ease-linear"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </Link>
            <Link
              href="https://github.com/0xwuchuan"
              className="hover:text-cyan transition duration-100 ease-linear"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </Link>
          </div>
          <p className="text-tx-2/60 text-sm">
            colors by{" "}
            <Link
              href="https://stephango.com/flexoki"
              className="hover:text-cyan transition duration-100 ease-linear"
              target="_blank"
              rel="noopener noreferrer"
            >
              flexoki
            </Link>
          </p>
        </div>

        {/* Right side - music player */}
        {showMusicPlayer && <MusicPlayer />}
      </div>
    </footer>
  );
}