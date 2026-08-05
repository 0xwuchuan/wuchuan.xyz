import { Metadata } from "next";
import Header from "@/components/header";
import { ProjectProps, Project } from "@components/project";

import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "projects",
};

export default function Projects() {
  const sortedProjects = [...projects].sort(
    (a: ProjectProps, b: ProjectProps) => a.order - b.order,
  );

  return (
    <div className="w-full max-w-4xl px-6 text-tx sm:px-10">
      <Header activePage="projects" />
      {sortedProjects.map((project: ProjectProps) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}
