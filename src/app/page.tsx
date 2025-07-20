import Header from "@/components/header";
import About from "@/components/about";
import Cards from "@/components/cards";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="max-w-4xl px-10 grow text-tx">
      <Header />
      <About />
      <Cards />
      <Footer />
    </div>
  );
}
