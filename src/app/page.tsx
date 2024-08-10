"use client";
import { Header, ProjectCard, SkillItem } from "@/components";
import { Footer } from "@/components/Footer/Footer";

import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import Image from "next/image";
import { fromTitle, toTitle } from "@/GSAPTween";

import { TbBrandReactNative } from "react-icons/tb";
import { FaHtml5, FaVuejs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import CSharpIcon from "@/components/Icons/CSharpIcon";
import NextJSIcon from "@/components/Icons/NextJSIcon";
import { languageProgrammingSkill } from "@/constants";

export default function Home() {
  const imageProfile = "/portfolio/imageProfile-1.jpeg";

  useEffect(() => {
    gsap.fromTo(".main-intro-text", fromTitle, toTitle);
  }, []);

  return (
    <div>
      <Header />
      <main className="bg-white px-32 w-screen  flex flex-col items-center">
        <section className="flex gap-6 items-center h-screen">
          <div className="w-1/2 flex flex-col gap-12">
            <h1 className="text-7xl font-bold  text-zinc-800 main-intro-text">
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
            <p className="mt-4 text-zinc-800 description-text w-3/4">
              Hi, I’m Pipat Horakungthong! With over 2 years of experience in
              web development and scalable software solutions and 3 years with
              game developer with unity engine and web game development, I’m
              ready to transform your ideas into reality.
            </p>
            <div className="flex gap-2">
              <button className="py-4 px-8 shadow-2xl rounded-full bg-gradient-to-br from-pink-600 to-sky-900 text-2xl font-semibold tracking-normal">
                Contact me
              </button>
              <button
                className="py-4 px-8 border-2 border-cyan-500 shadow-2xl rounded-full bg-gradient-to-br from-blue-700 to-pink-600 bg-clip-text text-transparent text-2xl font-semibold tracking-normal"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Work portfolio
              </button>
            </div>
          </div>
          <div className="w-2/4 ">
            <Image
              src={imageProfile}
              className="rounded-full w-[600px] h-[600px] object-cover m-auto shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
              alt="imageProfile"
              width={600}
              height={600}
              style={{
                backdropFilter: "blur(1px)",
                WebkitBackdropFilter: "blur(1px)",
              }}
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
        </section> */}
        <section className="skills flex flex-col items-center gap-6  my-10">
          <h2 className="text-6xl text-black font-bold tracking-wide ">
            Programming language skills
          </h2>
          <div className="skill-list flex flex-wrap justify-center gap-10 ">
            {languageProgrammingSkill.map((languageProgramSkill, index) => {
              return <SkillItem {...languageProgramSkill} key={index} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
