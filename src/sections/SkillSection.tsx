"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  gameEngineToolsSkill,
  languageProgrammingSkill,
  otherToolsSkill,
  toolsSkill,
} from "@/constants";
import { SkillItem } from "@/components";

export const SkillSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-6 my-10 px-32"
    >
      <motion.h2 className="text-6xl text-black font-bold tracking-wide">
        Programming language skills
      </motion.h2>
      <motion.div className="skill-list flex flex-wrap justify-center gap-10">
        {languageProgrammingSkill.map((languageProgramSkill, index) => {
          return <SkillItem {...languageProgramSkill} key={index} />;
        })}
      </motion.div>

      <motion.h2 className="text-6xl text-black font-bold tracking-wide ">
        Framework website
      </motion.h2>
      <motion.div className="skill-list flex flex-wrap justify-center gap-10">
        {toolsSkill.map((tool, index) => {
          return <SkillItem {...tool} key={index} />;
        })}
      </motion.div>

      <motion.h2 className="text-6xl text-black font-bold tracking-wide">
        Game Engine Tool
      </motion.h2>
      <motion.div className="skill-list flex flex-wrap justify-center gap-10">
        {gameEngineToolsSkill.map((gameEngine, index) => {
          return <SkillItem {...gameEngine} key={index} />;
        })}
      </motion.div>

      <motion.h2 className="text-6xl text-black font-bold tracking-wide">
        Other Tools
      </motion.h2>
      <motion.div className="skill-list flex flex-wrap justify-center gap-10">
        {otherToolsSkill.map((otherTool, index) => {
          return <SkillItem {...otherTool} key={index} />;
        })}
      </motion.div>
    </section>
  );
};
