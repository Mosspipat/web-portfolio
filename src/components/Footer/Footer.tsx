"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export const Footer = () => {
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (footer) {
      gsap.to(footer, {
        x: -200,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <footer
      className={`bg-gray-900 text-white p-6 flex justify-center items-center transition-transform`}
      id="footer"
    >
      <p className={`text-center text-sm`}>
        &copy; 2023 Pipeek Thorakungthong. All rights reserved.
      </p>
    </footer>
  );
};
