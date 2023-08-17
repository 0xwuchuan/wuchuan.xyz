import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="max-w-2xl px-10 grow">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
