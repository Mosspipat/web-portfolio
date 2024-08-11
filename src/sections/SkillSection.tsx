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
  const skillSection = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Instead of using custom prop, directly use the start method with variants
      await controls.start("visibleHeading1");
      await controls.start("visibleList1");
      await controls.start("visibleHeading2");
      await controls.start("visibleList2");
      await controls.start("visibleHeading3");
      await controls.start("visibleList3");
      await controls.start("visibleHeading4");
      await controls.start("visibleList4");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sequence();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillSection.current) {
      observer.observe(skillSection.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  const skillListVariants = {
    hidden: { opacity: 0, y: 50 },
    visibleList1: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    visibleList2: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    visibleList3: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    visibleList4: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visibleHeading1: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    visibleHeading2: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    visibleHeading3: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    visibleHeading4: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={skillSection}
      className="flex flex-col items-center gap-6 my-10 px-32"
    >
      <motion.h2
        className="text-6xl text-black font-bold tracking-wide"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        Programming language skills
      </motion.h2>
      <motion.div
        className="skill-list flex flex-wrap justify-center gap-10"
        variants={skillListVariants}
        initial="hidden"
        animate={controls}
      >
        {languageProgrammingSkill.map((languageProgramSkill, index) => {
          return <SkillItem {...languageProgramSkill} key={index} />;
        })}
      </motion.div>

      <motion.h2
        className="text-6xl text-black font-bold tracking-wide"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        Framework website
      </motion.h2>
      <motion.div
        className="skill-list flex flex-wrap justify-center gap-10"
        variants={skillListVariants}
        initial="hidden"
        animate={controls}
      >
        {toolsSkill.map((tool, index) => {
          return <SkillItem {...tool} key={index} />;
        })}
      </motion.div>

      <motion.h2
        className="text-6xl text-black font-bold tracking-wide"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        Game Engine Tool
      </motion.h2>
      <motion.div
        className="skill-list flex flex-wrap justify-center gap-10"
        variants={skillListVariants}
        initial="hidden"
        animate={controls}
      >
        {gameEngineToolsSkill.map((gameEngine, index) => {
          return <SkillItem {...gameEngine} key={index} />;
        })}
      </motion.div>

      <motion.h2
        className="text-6xl text-black font-bold tracking-wide"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        Other Tools
      </motion.h2>
      <motion.div
        className="skill-list flex flex-wrap justify-center gap-10"
        variants={skillListVariants}
        initial="hidden"
        animate={controls}
      >
        {otherToolsSkill.map((otherTool, index) => {
          return <SkillItem {...otherTool} key={index} />;
        })}
      </motion.div>
    </section>
  );
};
