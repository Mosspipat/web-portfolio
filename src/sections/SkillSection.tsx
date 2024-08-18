"use client";
import { memo, useContext, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  gameEngineToolsSkill,
  languageProgrammingSkill,
  otherToolsSkill,
  toolsSkill,
} from "@/constants";
import { SkillItem } from "@/components";
import { MyContext } from "@/context";

export const SkillSection = memo(function SkillSection() {
  const { heightHeader } = useContext(MyContext);

  const TitleRender = ({ label }: { label: string }) => {
    return (
      <motion.h2 className="text-2xl md:text-6xl text-center text-black font-bold tracking-wide my-6">
        {label}
      </motion.h2>
    );
  };

  return (
    <section
      id="skills"
      style={{ paddingTop: heightHeader.toString() + "px" }}
      className="flex flex-col items-center gap-10 my-10 px-4 md:px-32 "
    >
      <div>
        <motion.h2 className="text-3xl md:text-6xl text-center text-black font-bold tracking-wide mb-10 leading-relaxed">
          Programming language skills
        </motion.h2>
        <TitleRender label="Languages" />
        <motion.div className="skill-list flex flex-wrap justify-center gap-10">
          {languageProgrammingSkill.map((languageProgramSkill, index) => {
            return <SkillItem {...languageProgramSkill} key={index} />;
          })}
        </motion.div>
      </div>

      <div>
        <TitleRender label="Framework website" />
        <motion.div className="skill-list flex flex-wrap justify-center gap-10">
          {toolsSkill.map((tool, index) => {
            return <SkillItem {...tool} key={index} />;
          })}
        </motion.div>
      </div>
      <div>
        <TitleRender label="Game Engine Tool" />
        <motion.div className="skill-list flex flex-wrap justify-center gap-10">
          {gameEngineToolsSkill.map((gameEngine, index) => {
            return <SkillItem {...gameEngine} key={index} />;
          })}
        </motion.div>
      </div>
      <div>
        <TitleRender label="Other Tools" />
        <motion.div className="skill-list flex flex-wrap justify-center gap-10">
          {otherToolsSkill.map((otherTool, index) => {
            return <SkillItem {...otherTool} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
});
