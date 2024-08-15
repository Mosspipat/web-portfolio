import { ThreeDCardDemoProps } from "@/components";
import { LegacyRef } from "react";

type optionCard = {
  xPosInView: string;
  ref: LegacyRef<HTMLHeadingElement>;
};

export type ExperienceItem = ThreeDCardDemoProps & optionCard;

// export const experienceData: ExperienceItem[] = [
// export const experienceData: ExperienceItem[] = [
//   {
//     title: "Web Developer",
//     description:
//       "Work as a web design editor to manage static website content using the React framework. The website content is handled through a CMS (Content Management System) that has been implemented to optimize and conserve remaining development resources.",
//     image: "/portfolio/dog-golden.jpg",
//     link: "www.google.com",
//     xPosInView: "16%",
//     ref: null,
//   },
//   {
//     title: "Game Developer",
//     description:
//       "Game developer project with Unity ,Construct3 ,Play canvas and unreal engine.",
//     image: "/portfolio/dog-golden.jpg",
//     link: "www.google.com",
//     xPosInView: "16%",
//     ref: null,
//   },

//   {
//     title: "Social platform Developer",
//     description:
//       "Create filter effect with facebook , IG(instragram) by sparkAR Engine.",
//     image: "/portfolio/dog-golden.jpg",
//     link: "www.google.com",
//     xPosInView: "16%",
//     ref: null,
//   },
//   {
//     title: "3D Virtual Tour",
//     description:
//       "create Programming 3D Virtual Tour used for creating a tour guide itself. 360 degree supports both streaming and 360.",
//     image: "/portfolio/dog-golden.jpg",
//     link: "www.google.com",
//     xPosInView: "16%",
//     ref: null,
//   },
//   {
//     title: "AR (Augmented Reality)/VR (Virtual Reality)",
//     description:
//       "Show 3D Model on website and play with them in real world or let you throgh in virtual reality.",
//     image: "/portfolio/dog-golden.jpg",
//     link: "www.google.com",
//     xPosInView: "16%",
//     ref: null,
//   },
// ];
export const experienceData: ExperienceItem[] = [
  {
    title: "Web Developer",
    description:
      "Work as a web design editor to manage static website content using the React framework. The website content is handled through a CMS (Content Management System) that has been implemented to optimize and conserve remaining development resources.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
  },
  {
    title: "Game Developer",
    description:
      "Game developer project with Unity ,Construct3 ,Play canvas and unreal engine.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
  },

  {
    title: "Social platform Developer",
    description:
      "Create filter effect with facebook , IG(instragram) by sparkAR Engine.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
  },
  {
    title: "3D Virtual Tour",
    description:
      "create Programming 3D Virtual Tour used for creating a tour guide itself. 360 degree supports both streaming and 360.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
  },
  {
    title: "AR (Augmented Reality)/VR (Virtual Reality)",
    description:
      "Show 3D Model on website and play with them in real world or let you through in virtual reality.",
    image: "/portfolio/dog-golden.jpg",
    link: "www.google.com",
    xPosInView: "0",
    ref: null,
  },
];
