"use client";

import { Header } from "@/components";

import "../globals.css"; // Adjust the path as needed

import { HeroSection, IntroduceSection } from "@/sections";

import { MyProvider } from "@/context";

export default function Page() {
  return (
    <MyProvider>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        {/* <HeroSection /> */}
        <IntroduceSection />
        {/* <TimelineSection />
        <ProjectsSection />
        <SkillSection />
        <ContactSection />
        <Footer /> */}
      </main>
    </MyProvider>
  );
}
