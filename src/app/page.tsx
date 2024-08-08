import { Header, ProjectCard, SkillItem } from "@/components";
import { Footer } from "@/components/Footer/Footer";

import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <h1>Welcome to my portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet, turpis in tincidunt lacinia, nunc dui tincidunt nibh,
            vitae tincidunt nunc.
          </p>
        </section>
        <section className="projects">
          <h2>My projects</h2>
          <div className="project-grid">
            <ProjectCard
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="/images/project1.jpg"
              link="/projects/project1"
            />
            <ProjectCard
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="/images/project2.jpg"
              link="/projects/project2"
            />
            {/* Add more project cards */}
          </div>
        </section>
        <section className="skills">
          <h2>My skills</h2>
          <div className="skill-list">
            <SkillItem name="JavaScript" level="Advanced" icon="js" />
            <SkillItem name="React" level="Intermediate" icon="react" />
            <SkillItem name="Next.js" level="Beginner" icon="nextjs" />
            {/* Add more skill items */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
