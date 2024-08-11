import { Divider, ProjectCard } from "@/components";
import React from "react";

export const ProjectsSection = () => {
  const testImg = "/portfolio/dog-golden.jpg";

  return (
    <section className="projects bg-gradient-to-b from-[#2a2a2a] via-[#202020] to-[#2a2a2a] w-full h-screen">
      <Divider label="Projects" />
      <div className="project-grid">
        <ProjectCard
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={testImg}
          link=""
        />
        <ProjectCard
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={testImg}
          link=""
        />
      </div>
    </section>
  );
};
