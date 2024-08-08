"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      ".header",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <header
      className={`bg-gray-900 text-white p-6 flex justify-center items-center transition-transform`}
    >
      <nav className="flex">
        <a href="#hero" className="mr-4">
          Home
        </a>
        <a href="#projects" className="mr-4">
          Projects
        </a>
        <a href="#skills" className="mr-4">
          Skills
        </a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
