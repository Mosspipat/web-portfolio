"use client";

import { gsap } from "gsap";
import { HTMLAttributes, ReactNode, useEffect } from "react";
import classNames from "classnames";

type SkillItemProps = {
  name: string;
  level: string;
  iconElement?: ReactNode;
  className?: string;
};

export const SkillItem = ({
  name,
  level,
  iconElement,
  className,
}: Readonly<SkillItemProps>) => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".skill-item",
  //     {
  //       x: -200,
  //       opacity: 0,
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".skill-item",
  //         start: "top center+=100",
  //         end: "bottom center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div
      className={`skill-item  flex flex-col gap-1 items-center py-3  rounded-lg ease-in-out duration-300 hover:scale-110 hover:shadow-2xl	${className}`}
    >
      {iconElement || null}
      <div className="skill-info text-black flex flex-col items-center gap-1 ">
        <h3 className="text-xl font-bold shadow-2xl		">{name}</h3>
        <p className="text-sm">{level}</p>
      </div>
    </div>
  );
};
