"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MotionComponent, SampleMotion } from "@/components";
import { Items } from "@/components/MotionComponent/MotionComponent";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectsSection = () => {
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
      className="bg-gradient-to-b from-[#2a2a2a] via-[#202020] to-[#2a2a2a] w-full h-screen"
    >
      <div className="flex flex-col items-center justify-center gap-10 w-full h-screen">
        <SampleMotion />
        <motion.div
          className="flex flex-row items-center justify-center gap-4 mt-10"
          initial={{ scale: 0.9 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Image
            src={testImg}
            alt="idea"
            className="w-48"
            width={100}
            height={100}
          />
          <motion.div
            className="font-bold"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
          >
            <motion.h2>
              <motion.span
                className="inline-block"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                Website
              </motion.span>
            </motion.h2>
          </motion.div>
        </motion.div>
        <motion.div
          className=" font-bold"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 3 }}
        >
          Game
        </motion.div>
        <motion.div
          className=" font-bold"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 3 }}
        >
          VR/AR
        </motion.div>
        <motion.div
          className=" font-bold"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 3 }}
        >
          Other
        </motion.div>
      </div>
    </section>
  );
};
