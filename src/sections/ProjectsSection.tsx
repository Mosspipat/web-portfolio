"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MotionComponent } from "@/components";
import { Items } from "@/components/MotionComponent/MotionComponent";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="bg-gradient-to-b from-[#2a2a2a] via-[#202020] to-[#2a2a2a] w-full h-screen">
      <div className="flex flex-col items-center justify-center gap-10 w-full h-screen bg-red-600">
        <motion.div
          className=" font-bold"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 3 }}
        >
          Website{" "}
        </motion.div>
        <motion.div
          className=" font-bold"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 3 }}
        >
          Game{" "}
        </motion.div>
        <motion.div
          className=" font-bold"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 3 }}
        >
          Other{" "}
        </motion.div>
      </div>
    </section>
  );
};
