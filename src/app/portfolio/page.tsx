"use client";

import { Header } from "@/components";

import "../globals.css"; // Adjust the path as needed

import {
  ContactSection,
  HeroSection,
  IntroduceSection,
  ProjectsSection,
  SkillSection,
  TimelineSection,
} from "@/sections";

import { MyProvider } from "@/context";
import { Footer } from "@/components/Footer/Footer";

export default function Page() {
  return (
    <MyProvider>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        {/* <HeroSection />
        <IntroduceSection />
        <TimelineSection /> */}
        {/* <ProjectsSection /> */}
        {/* <SkillSection /> */}
        <ContactSection />
        <Footer />
      </main>
    </MyProvider>
  );
}
