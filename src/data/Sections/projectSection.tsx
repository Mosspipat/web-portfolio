import { ThreeDCardDemoProps } from "@/components";
import ImageSequence from "@/components/ImageSequence/ImageSequence";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Image, { StaticImageData } from "next/image";
import { LegacyRef } from "react";

import gameEngine1 from "/public/portfolio/gameEngine/game-1.png";
import gameEngine2 from "/public/portfolio/gameEngine/game-4.png";
import gameEngine3 from "/public/portfolio/gameEngine/game-5.png";

import gameFilter1 from "/public/portfolio/filter/game-1.png";
import gameFilter2 from "/public/portfolio/filter/game-2.png";

import motion from "framer-motion";

type WorkList = {
  label: string;
  link: string;
};

const worklist: WorkList[] = [
  {
    label: "websiteMovieMania",
    link: "www.google.com",
  },
];

type optionCard = {
  xPosInView: string;
  ref: LegacyRef<HTMLHeadingElement>;
  DescriptionAddOn?: React.ReactElement | undefined;
};

export type ExperienceItem = ThreeDCardDemoProps & optionCard;

const gameEngineList: StaticImageData[] = [
  gameEngine1,
  gameEngine2,
  gameEngine3,
];
const gameFilterList: StaticImageData[] = [gameFilter1, gameFilter2];

export const experienceData: ExperienceItem[] = [
  {
    title: "Web Developer",
    description:
      "Work as a web design editor to manage static website content using the React framework. The website content is handled through a CMS (Content Management System) that has been implemented to optimize and conserve remaining development resources.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
    DescriptionAddOn: (
      <iframe
        src="https://ar-car-3d.netlify.app/"
        className="h-[600px] w-[1200px] border-none"
        title="3D Car Viewer"
      />
    ),
  },
  {
    title: "Game Developer",
    description:
      "I am a dedicated game developer with hands-on experience in building engaging and interactive games using powerful engines like Unity, Construct3, PlayCanvas, and Unreal Engine. My projects span various platforms, showcasing my ability to bring imaginative concepts to life with cutting-edge technology.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
    DescriptionAddOn: (
      <div className="relative w-[1000px] h-[auto]">
        {/* <h1 className="absolute text-3xl bg-orange-500 w-full h-screen">
          Game Developer - Description
        </h1> */}
        <div className="relative h-[500px]">
          <Image
            className="absolute top-52 -left-[10%] rounded-3xl shadow-2xl  w-96 border-4 border-black"
            src={gameEngineList[2]}
            alt="game1"
          />
          <Image
            className="absolute -top-[10%] left-[10%] rounded-3xl shadow-2xl z-10 w-96 border-4 border-black"
            src={gameEngineList[0]}
            alt="game3"
          />
          <Image
            className="absolute top-52 right-[30%] rounded-3xl shadow-2xl w-96 border-4 border-black"
            src={gameEngineList[1]}
            alt="game2"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Social platform Developer",
    description:
      "I have developed custom filter effects for social media platforms such as Facebook and Instagram using the Spark AR Engine. My work involves crafting interactive and visually engaging filters that enhance user experiences, utilizing advanced features like face tracking, 3D objects, and augmented reality to create unique, shareable content that resonates with a wide audience.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
    DescriptionAddOn: (
      <div className="relative h-[500px]">
        <Image
          className="absolute -top-20 left-[30%] -rotate-[5deg] rounded-3xl shadow-2xl -z-10 w-72  "
          src={gameFilterList[0]}
          alt="game1"
        />
        <Image
          className="absolute -top-20 left-[55%] rotate-[5deg] rounded-3xl shadow-2xl -z-20 w-72 "
          src={gameFilterList[1]}
          alt="game3"
        />
      </div>
    ),
  },
  {
    title: "AR (Augmented Reality) \n /VR (Virtual Reality) \n on website",
    description:
      "Show 3D Model on website and play with them in real world or let you through in virtual reality.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
    DescriptionAddOn: (
      <div className="relative w-full h-[400px] -z-[100]">
        <iframe
          src="https://63a9af4c441cc521a40cbfd4--ar-furniture-3d.netlify.app/"
          className=" absolute -top-[20] -left-[40] h-[400px] w-[600px] border-4 border-blue-500 rounded-3xl -"
          title="3D Car Viewer"
        />
      </div>
    ),
  },
];
