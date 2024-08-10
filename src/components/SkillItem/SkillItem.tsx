"use client";

import { SkillItemProps } from "@/types";
import { gsap } from "gsap";
import { useEffect } from "react";

export const SkillItem = ({
  name,
  level,
  iconElement,
  className,
}: Readonly<SkillItemProps>) => {
  useEffect(() => {
    gsap.fromTo(
      ".skill-item",
      {
        duration: 1,
        scale: 5,
        ease: "power2.inOut",
      },
      {
        opacity: 1,
        scale: 1,
        yPercent: 0,
      }
    );
  }, []);

  return (
    <div
      className={`skill-item flex flex-col gap-1 items-center py-3  rounded-lg ease-in-out duration-300 hover:scale-110 hover:shadow-2xl	${className}`}
    >
      {iconElement || null}
      <div className="skill-info text-black flex flex-col items-center gap-1 text-center">
        <h3 className="text-xl font-bold shadow-2xl">{name}</h3>
        <p className="text-sm">{level}</p>
      </div>
    </div>
  );
};
