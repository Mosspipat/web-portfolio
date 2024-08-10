"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

export const SampleGSAP = () => {
  useEffect(() => {
    gsap.to(".element", {
      x: 200,
      duration: 1,
    });
  }, []);

  return (
    <div>
      <h1 className="element">hello</h1>
    </div>
  );
};
