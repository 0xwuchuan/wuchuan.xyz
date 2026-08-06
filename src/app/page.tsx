import Header from "@/components/header";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full max-w-[728px] px-6 text-tx sm:px-10">
      <Header activePage="about" />
      <About />
      <Footer />
    </div>
  );
}
