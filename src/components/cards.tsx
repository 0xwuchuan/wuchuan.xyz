import Card from "@/components/card";

export default function Cards() {
  return (
    <section className="flex flex-col w-full p-2">
      <Card
        cardColor="blue"
        cardName="experience"
        cardDesc="places i've worked"
      />
      <Card cardColor="red" cardName="projects" cardDesc="stuff i've done" />
      <Card cardColor="yellow" cardName="blog" cardDesc="thoughts i've had" />
    </section>
  );
}
