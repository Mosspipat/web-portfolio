"use client";

import { animate } from "framer-motion/dom";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

export const HeroSection = () => {
  const profileImageSectionHero = useRef(null);
  const titleSectionHero = useRef(null);
  const descriptionSectionHero = useRef(null);
  const buttonSectionHero = useRef(null);
  const arrowDownIconSectionHero = useRef(null);

  const imageProfile = "/portfolio/imageProfile-1.jpeg";

  useEffect(() => {
    // Ensure elements exist before animating

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

    // Animate descriptionHero with a staggered delay after title animation finish
    titleAnimation.then(() =>
      animate(
        descriptionSectionHero.current,
        { opacity: [0, 1], x: [-300, 0] },
        {
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15,
        }
      )
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

    //animate arrowDownIconSectionHero
    buttonAnimation.then(() =>
      animate(
        arrowDownIconSectionHero.current,
        { opacity: [0, 1], x: [-300, 0] },
        {
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15,
        }
      )
    );
  }, []);

  return (
    <section className="flex gap-6 items-center h-screen px-32">
      <div className="w-1/2 flex flex-col gap-12">
        <h1
          ref={titleSectionHero}
          className="text-7xl font-bold  text-zinc-800 main-intro-text opacity-0"
        >
          Build
          <span className="relative">
            <span className="block"> Solutions</span>
            <span className="block text-blue-400">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovate
              </span>
            </span>
          </span>
          , Scale, and Empower
        </h1>
        <p
          ref={descriptionSectionHero}
          className="mt-4 text-zinc-800 description-text w-3/4 opacity-0"
        >
          Hi, I’m Pipat Horakungthong! With over 2 years of experience in web
          development and scalable software solutions and 3 years with game
          developer with unity engine and web game development, I’m ready to
          transform your ideas into reality.
        </p>
        <div className="flex gap-2 opacity-0" ref={buttonSectionHero}>
          <button className="py-4 px-8 shadow-2xl rounded-full bg-gradient-to-br from-pink-600 to-sky-900 text-2xl font-semibold tracking-normal">
            Contact me
          </button>
          <button
            className="py-4 px-8 border-2 border-cyan-500 shadow-2xl rounded-full bg-gradient-to-br from-blue-700 to-pink-600 bg-clip-text text-transparent text-2xl font-semibold tracking-normal"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Work portfolio
          </button>
        </div>
      </div>
      <div className="w-2/4 ">
        <Image
          ref={profileImageSectionHero}
          src={imageProfile}
          className="rounded-full w-[600px] h-[600px] object-cover m-auto shadow-[0_8px_16px_rgba(0,0,0,0.2)] opacity-0"
          alt="imageProfile"
          width={600}
          height={600}
          style={{
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
          }}
        />
      </div>
      <div
        ref={arrowDownIconSectionHero}
        className="animate-bounce absolute bottom-10 left-1/2 translate-x-1/2 opacity-0"
      >
        <FaChevronDown
          className="text-4xl text-sky-400"
          style={{ transform: "translateY(50%)" }}
        />
      </div>
    </section>
  );
};
