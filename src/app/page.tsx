"use client";
import { Header, ProjectCard, SkillItem } from "@/components";
import { Footer } from "@/components/Footer/Footer";

import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const imageProfile = "/portfolio/imageProfile-1.jpeg";

  useEffect(() => {
    gsap.fromTo(
      ".welcome-text",
      {
        x: -10,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".welcome-text",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            ".description-text",
            {
              x: 10,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".description-text",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        },
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <main className="bg-white p-32 w-screen h-screen flex items-center">
        <section className="flex gap-6 items-center ">
          <div className="w-1/2 flex flex-col gap-12">
            <h1 className="text-7xl font-bold  text-zinc-800 welcome-text">
              Build
              <span className="relative">
                <span className="block"> Solutions</span>
                <span className="block text-blue-400">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Innovate
                  </span>
                </span>
              </span>
              , Scale, and Empower
            </h1>
            <p className="mt-4 text-zinc-800 description-text">
              Hi, I’m Pipat Horakungthong! With over 2 years of experience in
              web development and scalable software solutions and 3 years with
              game developer with unity engine and web game development, I’m
              ready to transform your ideas into reality.
            </p>
            <div className="flex gap-2">
              <button className="py-4 px-8 border-2 border-blue-900 rounded-full bg-gradient-to-br from-pink-600 to-sky-900 text-2xl font-semibold tracking-normal">
                Contact me
              </button>
              <button className="py-4 px-8 border-2 border-blue-900 rounded-full bg-gradient-to-br from-pink-600 to-blue-900 text-2xl font-semibold tracking-normal">
                Work portfolio
              </button>
            </div>
          </div>
          <div className="w-2/4 ">
            <Image
              src={imageProfile}
              className="rounded-full w-[600px] h-[600px] object-cover m-auto"
              alt="imageProfile"
            />
          </div>
        </section>
        {/* <section className="projects">
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
          </div>
        </section>
        <section className="skills">
          <h2>My skills</h2>
          <div className="skill-list">
            <SkillItem name="JavaScript" level="Advanced" icon="js" />
            <SkillItem name="React" level="Intermediate" icon="react" />
            <SkillItem name="Next.js" level="Beginner" icon="nextjs" />
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
