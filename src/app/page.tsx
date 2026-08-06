import About from "@/components/about";
import Footer from "@/components/footer";
import SiteShell from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell activePage="about">
      <About />
      <Footer />
    </SiteShell>
  );
}
