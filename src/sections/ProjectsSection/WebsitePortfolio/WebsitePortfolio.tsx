/* eslint-disable @next/next/no-img-element */
// import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import path from "path";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

import React from "react";

const WebsitePortfolio = ({
  title,
  projectName,
  projectDescription,
  slides = [],
  footer,
}: {
  title: string;
  projectName: string;
  projectDescription: React.ReactNode;
  slides: string[];
  footer?: React.ReactNode;
}) => {
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div
        className="grid md:grid-cols-1 xl:grid-cols-2 gap-20 items-start p-10"
        id={"parent-carou"}
      >
        {/* Carousel */}
        <motion.div className="h-56 sm:h-[200px] xl:h-[200px] 2xl:h-[200px]">
          <Carousel>
            {slides.map((path, index) => {
              console.log("🚀: ~ path:", path);
              return (
                <Image
                  key={index}
                  src={path}
                  alt={`image_${path}`}
                  width={600}
                  height={600}
                />
              );
            })}
          </Carousel>
        </motion.div>
        {/* description */}
        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-xl font-bold">{projectName}</h1>
          {projectDescription}
          {footer}
        </div>
      </div>
    </div>
  );
};

export default WebsitePortfolio;
