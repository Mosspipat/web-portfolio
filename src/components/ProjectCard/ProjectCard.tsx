"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  link,
}: ProjectCardProps) => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-card",
          start: "top center+=100",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <a href={link} className="project-card">
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};
