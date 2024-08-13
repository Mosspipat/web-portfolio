"use client";

import "swiper/css";
import {
  HeaderScroll,
  MotionComponent,
  SampleMotion,
  ThreeDCardDemo,
} from "@/components";
import { Items } from "@/components/MotionComponent/MotionComponent";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectsSection = memo(function ProjectsSection() {
  const [selectedId, setSelectedId] = useState("");
  const testImg = "/portfolio/dog-golden.jpg";

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
      className="bg-gradient-to-b from-[#2a2a2a] via-[#202020] to-[#2a2a2a] w-full "
    >
      <motion.div
        className="w-full "
        initial={{ scale: 0.9 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="font-bold "
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.h2>
            <motion.span
              className="text-[#07b0f3] text-8xl"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Website
            </motion.span>
          </motion.h2>
          <ThreeDCardDemo />
        </motion.div>
      </motion.div>
    </section>
  );
});
