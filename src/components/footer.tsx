import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-2 px-6 my-3 font-satoshi">
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
    </footer>
  );
}