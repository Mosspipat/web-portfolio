"use client";

import "swiper/css";
import {
  HeaderScroll,
  MotionComponent,
  SampleMotion,
  ThreeDCardDemo,
  ThreeDCardDemoProps,
} from "@/components";
import { Items } from "@/components/MotionComponent/MotionComponent";
import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const ProjectsSection = memo(function ProjectsSection() {
  const items: Items[] = [
    { id: 1, subtitle: "Subtitle 1", title: "Title 1" },
    { id: 2, subtitle: "Subtitle 2", title: "Title 2" },
    { id: 3, subtitle: "Subtitle 3", title: "Title 3" },
    { id: 4, subtitle: "Subtitle 4", title: "Title 4" },
    { id: 5, subtitle: "Subtitle 5", title: "Title 5" },
  ];

  const testRef = () => {
    if (card_first.current) {
      // Safe to use myRef.current as HTMLDivElement
      console.log(card_first.current);
      console.log(card_first.current.offsetHeight);
    } else {
      console.error("Ref is null");
    }
    if (card_second.current) {
      // Safe to use myRef.current as HTMLDivElement
      console.log(card_second.current);
      console.log(card_second.current.offsetHeight);
    } else {
      console.error("Ref is null");
    }
    if (card_third.current) {
      // Safe to use myRef.current as HTMLDivElement
      console.log(card_third.current);
      console.log(card_third.current.offsetHeight);
    } else {
      console.error("Ref is null");
    }
  };

  useEffect(() => {
    testRef();
  }, []);

  const card_first = useRef<HTMLDivElement>(null);
  const card_second = useRef<HTMLDivElement>(null);
  const card_third = useRef<HTMLDivElement>(null);

  type optionCard = {
    xPosInView: string;
  };

  type ExperienceItem = ThreeDCardDemoProps & optionCard;

  const experienceData: ExperienceItem[] = [
    {
      title: "Game Developer",
      description:
        "Game developer project with Unity ,Construct3 ,Play canvas and unreal engine.",
      image: "/portfolio/dog-golden.jpg",
      link: "www.google.com",
      xPosInView: "-16%",
    },
    {
      title: "Web Developer",
      description:
        "work web design editor manage static content website with react framework.",
      image: "/portfolio/dog-golden.jpg",
      link: "www.google.com",
      xPosInView: " 16%",
    },
    {
      title: "Social platform Developer",
      description:
        "Create filter effect with facebook , IG(instragram) by sparkAR Engine.",
      image: "/portfolio/dog-golden.jpg",
      link: "www.google.com",
      xPosInView: "-16%",
    },
    {
      title: "3D Virtual Tour",
      description:
        "create Programming 3D Virtual Tour used for creating a tour guide itself. 360 degree supports both streaming and 360.",
      image: "/portfolio/dog-golden.jpg",
      link: "www.google.com",
      xPosInView: " 16%",
    },
    {
      title: "AR (Augmented Reality)/VR (Virtual Reality)",
      description:
        "Show 3D Model on website and play with them in real world or let you throgh in virtual reality.",
      image: "/portfolio/dog-golden.jpg",
      link: "www.google.com",
      xPosInView: "-16%",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#2a2a2a] via-[#202020] to-[#2a2a2a] w-full "
    >
      <motion.div
        className="w-full "
        initial={{ scale: 0.9 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="font-bold "
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.h2>
            <motion.span
              className="text-[#07b0f3] text-8xl"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Work Experience
            </motion.span>
          </motion.h2>
          {experienceData.map((experience, index) => {
            const { xPosInView, ...other } = experience;

            return (
              <motion.div
                initial={{ opacity: 0, x: "0%" }}
                whileInView={{ opacity: 1, x: xPosInView }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 1 }}
                ref={card_first}
                key={index}
              >
                <ThreeDCardDemo {...other} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
});
