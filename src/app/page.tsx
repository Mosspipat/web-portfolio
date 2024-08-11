import { Header } from "@/components";

import React, { FC, useRef } from "react";

import { HeroSection, ProjectsSection, SkillSection } from "@/sections";
import dynamic from "next/dynamic";

export default function Home() {
  const ClientSideComponent = dynamic(
    () => import("@/components/Header/Header").then((mod) => mod.Header),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <ClientSideComponent />
      <main className="bg-white  w-screen  flex flex-col items-center">
        {/* <HeroSection />
        <ProjectsSection />
        <SkillSection /> */}
      </main>
    </div>
  );
}
