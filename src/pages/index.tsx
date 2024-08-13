import { Header, HeaderScroll, ThreeDCardDemo } from "@/components";

import React, { FC, useRef } from "react";
import "../app/globals.css"; // Adjust the path as needed

import {
  ContactSection,
  HeroSection,
  IntroduceSection,
  ProjectsSection,
  SkillSection,
} from "@/sections";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        {/* <HeroSection /> */}
        <IntroduceSection />
        {/* <ProjectsSection />
        <SkillSection />
        <ContactSection /> */}
      </main>
    </div>
  );
}
