"use client";
import { Divider, Header, ProjectCard, SkillItem } from "@/components";
import { Footer } from "@/components/Footer/Footer";

import React, { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { animate, inView, mix, scroll, stagger } from "framer-motion/dom";

import { TbBrandReactNative } from "react-icons/tb";
import { FaHtml5, FaVuejs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import CSharpIcon from "@/components/Icons/CSharpIcon";
import NextJSIcon from "@/components/Icons/NextJSIcon";

import {
  gameEngineToolsSkill,
  languageProgrammingSkill,
  otherToolsSkill,
  toolsSkill,
} from "@/constants";
import { transform, useInView } from "framer-motion";

// import { Divider } from "@/components";

export default function Home() {
  const imageProfile = "/portfolio/imageProfile-1.jpeg";
  const testImg = "/portfolio/dog-golden.jpg";
  // scroll((progress) => console.log(progress));

  const skillSection = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (skillSection.current) {
      // DOM has been rendered and the ref is set
      console.log(skillSection.current);
    }
  }, []);

  const isInView = useInView(skillSection);
  console.log("🚀: ~ isInView:", isInView);

  const mixer = mix({ a: "0px", b: 10 }, { a: "20px", b: 0 });
  console.log("🚀: ~ mixer:", mixer(0.5));

  const profileImageSectionHero = useRef(null);
  const titleSectionHero = useRef(null);
  const descriptionSectionHero = useRef(null);
  const buttonSectionHero = useRef(null);

  useEffect(() => {
    // Ensure elements exist before animating
    if (titleSectionHero.current && descriptionSectionHero.current) {
      // Animate profileImage
      animate(
        profileImageSectionHero.current,
        {
          opacity: [0, 1],
          y: [-50, 0],
          transform: ["scale(0.5)", "scale(1)"],
        },
        {
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          bounce: 0.5,
          velocity: 10,
        }
      );
      // Animate mainTitleHero
      const titleAnimation = animate(
        titleSectionHero.current,
        { opacity: [0, 1], y: [-50, 0] },
        {
          duration: 0.5,
          ease: "backIn",
          delay: 0,
          type: "spring",
          bounce: 0.5,
          velocity: 10,
        }
      );

      // Animate descriptionHero with a staggered delay after title animation finish
      titleAnimation.then(() =>
        animate(
          descriptionSectionHero.current,
          { opacity: [0, 1], x: [-300, 0] },
          {
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          }
        )
      );

      // Animate buttonHero
      animate(
        buttonSectionHero.current,
        { opacity: [0, 1], x: [-300, 0] },
        {
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15,
        }
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        <section className="flex gap-6 items-center h-screen px-32">
          <div className="w-1/2 flex flex-col gap-12">
            <h1
              ref={titleSectionHero}
              className="text-7xl font-bold  text-zinc-800 main-intro-text opacity-0"
            >
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
            <p
              ref={descriptionSectionHero}
              className="mt-4 text-zinc-800 description-text w-3/4 opacity-0"
            >
              Hi, I’m Pipat Horakungthong! With over 2 years of experience in
              web development and scalable software solutions and 3 years with
              game developer with unity engine and web game development, I’m
              ready to transform your ideas into reality.
            </p>
            <div className="flex gap-2 opacity-0" ref={buttonSectionHero}>
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
              ref={profileImageSectionHero}
              src={imageProfile}
              className="rounded-full w-[600px] h-[600px] object-cover m-auto shadow-[0_8px_16px_rgba(0,0,0,0.2)] opacity-0"
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
        <section
          className="flex flex-col items-center gap-6 my-10 px-32"
          ref={skillSection}
        >
          <h2 className="text-6xl text-black font-bold tracking-wide ">
            Programming language skills
          </h2>
          <div className="skill-list flex flex-wrap justify-center gap-10 ">
            {languageProgrammingSkill.map((languageProgramSkill, index) => {
              return <SkillItem {...languageProgramSkill} key={index} />;
            })}
          </div>
          <h2 className="text-6xl text-black font-bold tracking-wide ">
            Framework website
          </h2>
          <div className="skill-list flex flex-wrap justify-center gap-10 ">
            {toolsSkill.map((tool, index) => {
              return <SkillItem {...tool} key={index} />;
            })}
          </div>
          <h2 className="text-6xl text-black font-bold tracking-wide ">
            Game Engine Tool
          </h2>
          <div className="skill-list flex flex-wrap justify-center gap-10 ">
            {gameEngineToolsSkill.map((gameEngine, index) => {
              return <SkillItem {...gameEngine} key={index} />;
            })}
          </div>
          <h2 className="text-6xl text-black font-bold tracking-wide ">
            Other Tools
          </h2>
          <div className="skill-list flex flex-wrap justify-center gap-10 ">
            {otherToolsSkill.map((otherTool, index) => {
              return <SkillItem {...otherTool} key={index} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
