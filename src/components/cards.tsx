import Card from "@/components/card";

export default function Cards() {
  return (
    <section className="flex flex-col w-full p-2">
      <Card
        cardColor="blue"
        cardName="experiences"
        cardDesc="places i've worked"
        link="experiences"
      />
      <Card
        cardColor="red"
        cardName="projects"
        cardDesc="stuff i've done"
        link="/projects"
      />
      <Card
        cardColor="yellow"
        cardName="blog"
        cardDesc="thoughts i've had"
        link="https://blog.wuchuan.xyz"
      />
    </section>
  );
}
