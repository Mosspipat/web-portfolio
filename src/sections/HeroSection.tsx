"use client";

import { animate } from "framer-motion/dom";
import Image from "next/image";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useWindowSize } from "@/hooks";
import { MyContext } from "@/context";

export const HeroSection = memo(function HeroSection() {
  const profileImageSectionHero = useRef(null);
  const titleSectionHero = useRef(null);
  const descriptionSectionHero = useRef(null);
  const buttonSectionHero = useRef(null);
  const arrowDownIconSectionHero = useRef(null);

  const imageProfile = "/portfolio/imageProfile-1.jpeg";

  const { width } = useWindowSize();
  const [sizeImage, setSizeImage] = useState<number>(0);
  console.log("🚀: ~ sizeImage:", sizeImage);

  const { heightHeader } = useContext(MyContext);
  console.log("🚀: ~ heightHeader:", heightHeader);

  const ImageProfileRef = useRef<HTMLImageElement | null>(null);

  console.log(ImageProfileRef);

  // useEffect(() => {
  //   if (ImageProfileRef.current) {
  //     const elementWidth = ImageProfileRef.current.offsetWidth;
  //     console.log("🚀: ~ elementWidth:", elementWidth);
  //     // Set the width and height of the element
  //     setSizeImage(400);
  //     ImageProfileRef.current.style.width = `${sizeImage}200px`;
  //     ImageProfileRef.current.style.height = `${sizeImage}200px`;
  //   }
  // }, []);

  useEffect(() => {
    // Animate profileImage
    animate(
      profileImageSectionHero.current,
      {
        opacity: [0, 1],
        y: [-50, 0],
        transform: ["scale(1)", "scale(1.1)"],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.5,
        velocity: 10,
      }
    );
    // Animate mainTitleHero
    const titleAnimation = animate(
      titleSectionHero.current,
      { opacity: [0, 1], y: [-50, 0] },
      {
        duration: 0.5,
        ease: "backIn",
        delay: 0,
        type: "spring",
        bounce: 0.5,
        velocity: 10,
      }
    );

    // Animate buttonHero
    const buttonAnimation = animate(
      buttonSectionHero.current,
      { opacity: [0, 1], x: [-300, 0] },
      {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    );
  }, []);

  const scrollTo = (id: string) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
      offset: -50,
    });
  };

  useEffect(() => {
    if (width && width <= 768) {
      // setSizeImage(window.innerWidth * 0.4);
      setSizeImage(200);
    } else if (width && width > 768) {
      setSizeImage(600);
    }
  }, [width]);

  return (
    <section
      id="hero"
      style={{
        // height: `calc(100vh - ${heightHeader}px)`,
        paddingTop: `${heightHeader / 2}px`,
      }}
    >
      <div
        className={`flex flex-col-reverse xl:flex-row  justify-center items-center md:gap-[70px] xl:gap-[200px] max-w-screen min-h-screen  py-20 md:px-4 `}
      >
        <div className="md:w-[600px] flex flex-col items-center md:items-start md:gap-12 ">
          <motion.h1
            ref={titleSectionHero}
            className="flex flex-col text-xl md:text-5xl font-semibold mt-10 md:mt-0 text-zinc-800 main-intro-text opacity-0  w-fit gap-1 md:gap-4 -tracking-wide text-center md:text-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Smart Work and
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-base md:text-6xl ">
                Fun Collaboration Let’s Innovate and
              </span>
            </span>
            <span>Create Together!</span>
          </motion.h1>
          <motion.div
            ref={descriptionSectionHero}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [20, 0],
            }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-4 text-zinc-800 font-semibold"
          >
            <div className="flex flex-col items-center md:items-start my-2 gap-2">
              <span className="font-bold w-fit text-base md:text-4xl ">
                My name is Pipat Horakungthong
              </span>
              <span className="text-sm md:text-xl">
                Hi And Hello I'm developer and Software Engineer!
              </span>
              <span className="text-blue-400 text-xl font-bold tracking-normal">
                based in Thailand, Bangkok.
              </span>
              <br />
            </div>
          </motion.div>
          <div
            className="flex flex-col-reverse md:flex-row gap-4 opacity-0 "
            ref={buttonSectionHero}
          >
            <motion.button
              className="py-2 md:py-4 px-4 md:px-8 flex-auto shadow-2xl rounded-full bg-gradient-to-br from-pink-600 to-sky-900 text-2xl font-semibold tracking-normal"
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollTo("contact")}
            >
              Contact me
            </motion.button>
            <motion.button
              className="py-2 md:py-4 px-4 md:px-8 flex-auto border-2 border-cyan-500 shadow-2xl rounded-full bg-gradient-to-br from-blue-700 to-pink-600 bg-clip-text text-transparent text-2xl font-semibold tracking-normal"
              whileHover={{ scale: 1.1 }}
              style={{ textShadow: "0px 3px 4px rgba(94, 94, 94, 0.5)" }}
              onClick={() => scrollTo("projects")}
            >
              Work portfolio
            </motion.button>
          </div>
        </div>
        <div className="w-[340px] md:w-[400px] xl:w[400px] h-[340px] md:h-[400px] xl:w[400px]">
          <Image
            ref={profileImageSectionHero}
            alt="imageProfile"
            src={imageProfile}
            className={`rounded-full object-cover shadow-[0_8px_16px_rgba(0,0,0,0.2)] w-full h-full`}
            width={sizeImage}
            height={sizeImage}
          />
        </div>
      </div>
      <div ref={arrowDownIconSectionHero} className="relative w-screen mx-auto">
        <FaChevronDown className="absolute -top-10 text-4xl text-sky-400 animate-bounce w-screen mx-auto" />
      </div>
    </section>
  );
});
