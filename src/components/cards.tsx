import Card from "@/components/card";

export default function Cards() {
  return (
    <section className="flex flex-row w-full justify-between">
      <Card cardColor="bg-[#6C95E0]" cardName="Experience" cardDesc="test" />
      <Card cardColor="bg-[#EC5B5B]" cardName="Projects" cardDesc="test" />
      <Card cardColor="bg-[#FDC63A]" cardName="Blog" cardDesc="test" />
    </section>
  );
}
