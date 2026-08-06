import { Metadata } from "next";
import { ProjectProps, Project } from "@components/project";
import SiteShell from "@/components/site-shell";

import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "projects",
};

export default function Projects() {
  const sortedProjects = [...projects].sort(
    (a: ProjectProps, b: ProjectProps) => a.order - b.order,
  );

  return (
    <SiteShell activePage="projects">
      {sortedProjects.map((project: ProjectProps) => (
        <Project key={project.name} {...project} />
      ))}
    </SiteShell>
  );
}
