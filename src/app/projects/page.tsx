import { Metadata } from "next";
import Header from "@/components/header";
import Breadcrumb from "@/components/breadcrumb";
import { ProjectProps, Project } from "@components/project";

import projects from "@/public/projects.json";

export const metadata: Metadata = {
  title: "projects",
};

export default function Home() {
  const sortedProjects = projects.sort((a: ProjectProps, b: ProjectProps) => {
    return a.order - b.order; // Lower 'order' numbers come first
  });

  return (
    <div className="max-w-4xl px-10 grow text-tx-dark">
      <Header />
      <Breadcrumb page="projects" color="red" />
      {sortedProjects.map((project: ProjectProps, index: number) => (
        <Project key={index} {...project} />
      ))}
      {/* More coming soon copium */}
    </div>
  );
}
