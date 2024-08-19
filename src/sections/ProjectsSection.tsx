"use client";

import { memo, useContext } from "react";
import { motion } from "framer-motion";

import { MyContext } from "@/context";
import { experienceData } from "@/data";
import { ItemProjectSection } from "@/components";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const ProjectsSection = memo(function ProjectsSection({
  router,
}: {
  router: AppRouterInstance;
}) {
  const { heightHeader } = useContext(MyContext);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#2a2a2a] via-[#202020] to-[#2a2a2a] w-full my-6"
      style={{ paddingTop: `${heightHeader}px` }}
    >
      <motion.div className="h-auto flex flex-col items-center justify-center gap-8 my-8 ">
        <motion.h2
          className="text-[#07b0f3] text-6xl xl:text-8xl shadow-blue-500 font-bold"
          style={{
            textShadow: "0px 10px 20px blue",
          }}
          initial={{ fontSize: "4vw" }}
          whileInView={{ fontSize: "6vw" }}
        >
          Work Experience
        </motion.h2>

        <motion.p
          className="text-xl xl:text-3xl font-normal xl:w-[1400px] text-center xl:text-start px-4 md:px-0 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, animation: "easeInOut" }}
        >
          I am a versatile developer with experience in web development, game
          development, social platform effects, and AR/VR projects, specializing
          in creating dynamic and immersive digital experiences.
        </motion.p>
        {experienceData.map((experience, index) => {
          const isReverse = index % 2 === 0;
          return (
            <ItemProjectSection
              {...experience}
              showCaseList={experience.showcaseProject}
              isReverse={isReverse}
              key={index}
              router={router}
            />
          );
        })}
      </motion.div>
    </section>
  );
});
