"use client";
import { Divider, Header, ProjectCard, SkillItem } from "@/components";
import { Footer } from "@/components/Footer/Footer";

import React, { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { animate, inView, mix, scroll, stagger } from "framer-motion/dom";

import { TbBrandReactNative } from "react-icons/tb";
import { FaAngleDown, FaChevronDown, FaHtml5, FaVuejs } from "react-icons/fa6";
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
import { HeroSection, SkillSection } from "@/sections";

// import { Divider } from "@/components";

export default function Home() {
  const imageProfile = "/portfolio/imageProfile-1.jpeg";
  const testImg = "/portfolio/dog-golden.jpg";
  // scroll((progress) => console.log(progress));

  const skillSection = useRef<HTMLDivElement>(null);
  // const skillProgramLanguage = useRef(null);
  // const skillFramework = useRef(null);
  // const skillGameEngine = useRef(null);
  // const skillOther = useRef(null);

  // const isInView = useInView(skillSection);
  // const isInViewSkillProgramLanguage = useInView(skillProgramLanguage);
  // const isInViewSkillFramework = useInView(skillFramework);
  // const isInViewSkillGameEngine = useInView(skillGameEngine);
  // const isInViewSkillOther = useInView(skillOther);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // const isInViewStyles = isInView ? "visible" : "hidden";

  // const animations = {
  //   initial: "hidden",
  //   animate: isInViewStyles,
  //   exit: "hidden",
  // };

  // const mixer = mix({ a: "0px", b: 10 }, { a: "20px", b: 0 });
  // console.log("🚀: ~ mixer:", mixer(0.5));

  return (
    <div>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        <HeroSection />
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
        <SkillSection />
      </main>
    </div>
  );
}
