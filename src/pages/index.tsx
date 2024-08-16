import { Header } from "@/components";

import "../app/globals.css"; // Adjust the path as needed

import {
  ContactSection,
  HeroSection,
  IntroduceSection,
  ProjectsSection,
  SkillSection,
  TimelineSection,
} from "@/sections";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white  w-screen  flex flex-col items-center">
        <HeroSection />
        {/* <IntroduceSection />
        <TimelineSection />
        <ProjectsSection /> */}
        <SkillSection />
        <ContactSection />
        {/* <Footer/> */}
      </main>
    </>
  );
}
