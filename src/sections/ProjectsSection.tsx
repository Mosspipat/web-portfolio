"use client";

import "swiper/css";
import {
  HeaderScroll,
  MiniSection,
  MotionComponent,
  SampleMotion,
  ThreeDCardDemo,
  ThreeDCardDemoProps,
} from "@/components";
import { Items } from "@/components/MotionComponent/MotionComponent";
import { memo, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceData, ExperienceItem } from "@/data/Sections/projectSection";

export const ProjectsSection = memo(function ProjectsSection() {
  const items: Items[] = [
    { id: 1, subtitle: "Subtitle 1", title: "Title 1" },
    { id: 2, subtitle: "Subtitle 2", title: "Title 2" },
    { id: 3, subtitle: "Subtitle 3", title: "Title 3" },
    { id: 4, subtitle: "Subtitle 4", title: "Title 4" },
    { id: 5, subtitle: "Subtitle 5", title: "Title 5" },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#2a2a2a] via-[#202020] to-[#2a2a2a] w-full my-6"
    >
      <motion.div className="h-auto flex flex-col items-center justify-center gap-8">
        <h2 className="text-[#07b0f3] text-8xl text-shadow-md font-bold">
          Work Experience
        </h2>
        {experienceData.map((experience, index) => {
          const isReverse = index % 2 === 0;
          return (
            <MiniSection {...experience} isReverse={isReverse} key={index} />
          );
        })}
      </motion.div>
    </section>
  );
});
