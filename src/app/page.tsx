import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="max-w-2xl px-10 grow">
      <Header />
      <p className="pb-80">
        Currently exploring different fields of software engineering,
        particularly blockchain, web3 and full-stack development and am actively
        seeking internship opportunities in these spaces
      </p>
      <Footer />
    </div>
  );
}
