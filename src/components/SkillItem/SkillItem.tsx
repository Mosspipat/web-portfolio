"use client";

import { SkillItemProps } from "@/types";

export const SkillItem = ({
  name,
  level,
  iconElement,
}: Readonly<SkillItemProps>) => {
  return (
    <div
      className={`skill-item flex flex-col gap-1 items-center py-3 px-4  rounded-lg ease-in-out duration-300 hover:scale-110 hover:shadow-2xl shadow-md`}
    >
      {iconElement || null}
      <div className="skill-info text-black flex flex-col items-center gap-1 text-center">
        <h3 className="text-xl font-bold shadow-2xl">{name}</h3>
        <p className="text-sm">{level}</p>
      </div>
    </div>
  );
};
