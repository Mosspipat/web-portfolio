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
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const imageProfile = "/portfolio/imageProfile-1.jpeg";

  const router = useRouter();

  return (
    <MyProvider>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        <HeroSection />
        <IntroduceSection />
        <TimelineSection />
        <ProjectsSection router={router} />
        <SkillSection />
        <ContactSection />
        <Footer />
      </main>
    </MyProvider>
  );
}
