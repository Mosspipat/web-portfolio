"use client";

import Image from "next/image";
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
  return (
    <a href={link} className="project-card">
      <div className="project-card-image">
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};
