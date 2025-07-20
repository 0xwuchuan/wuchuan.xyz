import Header from "@/components/header";
import About from "@/components/about";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <div className="max-w-4xl px-10 grow text-tx-dark">
      <Header />
      <About />
      <Cards />
    </div>
  );
}
