import { Header } from "@/components";

import React, { FC, useRef } from "react";
import "../app/globals.css"; // Adjust the path as needed

import { HeroSection, ProjectsSection, SkillSection } from "@/sections";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        <h1 className="text-3xl font-bold text-black">sssss</h1>
        <HeroSection />
        <ProjectsSection />
        <SkillSection />
      </main>
    </div>
  );
}
