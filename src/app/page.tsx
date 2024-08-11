"use client";

import { Header } from "@/components";

import React, { useRef } from "react";

import { HeroSection, ProjectsSection, SkillSection } from "@/sections";

export default function Home() {
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
