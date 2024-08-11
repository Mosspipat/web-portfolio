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
import { HeroSection, ProjectsSection, SkillSection } from "@/sections";

export default function Home() {
  const imageProfile = "/portfolio/imageProfile-1.jpeg";

  const skillSection = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        <HeroSection />
        <ProjectsSection />
        <SkillSection />
      </main>
    </div>
  );
}
