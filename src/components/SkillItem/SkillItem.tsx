"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

export const SkillItem = ({
  name,
  level,
  icon,
}: Readonly<{
  name: string;
  level: string;
  icon: string;
}>) => {
  useEffect(() => {
    gsap.fromTo(
      ".skill-item",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skill-item",
          start: "top center+=100",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="skill-item">
      <div className={`skill-icon skill-icon--${icon}`} />
      <div className="skill-info">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">{level}</p>
      </div>
    </div>
  );
};
