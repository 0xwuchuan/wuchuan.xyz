import { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "digital garden",
};

export default function Garden() {
  return (
    <div className="w-full max-w-4xl px-6 text-tx sm:px-10">
      <Header activePage="garden" />
    </div>
  );
}
