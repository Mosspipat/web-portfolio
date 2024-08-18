"use client";

import { SkillItemProps } from "@/types";
import { motion } from "framer-motion";

export const SkillItem = ({
  name,
  level,
  iconElement,
}: Readonly<SkillItemProps>) => {
  return (
    <motion.div
      className={`flex flex-col gap-1 items-center py-3 px-4 rounded-lg hover:scale-110 hover:shadow-2xl shadow-md`}
      initial={{ scale: 0.5, opacity: 0.5 }}
      whileInView={{ scale: 1.1, opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {iconElement || null}
      <div className="skill-info text-black flex flex-col items-center gap-1 text-center">
        <h3 className="text-xl font-bold shadow-2xl">{name}</h3>
        <p className="text-sm">{level}</p>
      </div>
    </motion.div>
  );
};
