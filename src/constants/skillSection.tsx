import CSharpIcon from "@/components/Icons/CSharpIcon";
import NextJSIcon from "@/components/Icons/NextJSIcon";

import { SkillItemProps } from "@/types";
import { ReactNode } from "react";
import { FaVuejs, FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const languageProgrammingSkill: SkillItemProps[] = [
  {
    name: "JavaScript",
    level: "Advanced",
    className: "border-2 w-[160px]",
    iconElement: <IoLogoJavascript size={100} color="#f0dc4e" />,
  },
  {
    name: "React Native",
    level: "Beginner",
    className: "border-2 w-[160px]",
    iconElement: <TbBrandReactNative size={100} color="#60dafb" />,
  },
  {
    name: "Vue.js",
    level: "Intermediate",
    className: "border-2 w-[160px]",
    iconElement: <FaVuejs size={100} color="#40b882" />,
  },
  {
    name: "Next.js",
    level: "Beginner",
    className: "border-2 w-[160px]",
    iconElement: <NextJSIcon />,
  },
  {
    name: "HTML",
    level: "Advanced",
    className: "border-2 w-[160px]",
    iconElement: <FaHtml5 size={100} color="#e44c27" />,
  },
  {
    name: "CSS",
    level: "Advanced",
    className: "border-2 w-[160px]",
    iconElement: <IoLogoCss3 size={100} color="#1775bc" />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    className: "border-2 w-[160px]",
    iconElement: <SiTypescript size={100} color="#007bcd" />,
  },
  {
    name: "C#",
    level: "Intermediate",
    className: "border-2 w-[160px]",
    iconElement: <CSharpIcon />,
  },
];
