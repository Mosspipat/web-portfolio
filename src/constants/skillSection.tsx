import CSharpIcon from "@/components/Icons/CSharpIcon";
import NextJSIcon from "@/components/Icons/NextJSIcon";

import { SkillItemProps, ToolItemProps } from "@/types";
import { ReactNode } from "react";
import { FaGitSquare, FaNode, FaUnity, FaWordpress } from "react-icons/fa";
import { FaVuejs, FaHtml5 } from "react-icons/fa6";
import { HiCommandLine } from "react-icons/hi2";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import {
  SiConstruct3,
  SiSparkar,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const classNameLanguageSkill = `border-2 border-sky-300 w-[160px]`;

export const languageProgrammingSkill: SkillItemProps[] = [
  {
    name: "JavaScript",
    level: "Advanced",
    className: classNameLanguageSkill,
    iconElement: <IoLogoJavascript size={100} color="#f0dc4e" />,
  },
  {
    name: "HTML",
    level: "Advanced",
    className: classNameLanguageSkill,
    iconElement: <FaHtml5 size={100} color="#e44c27" />,
  },
  {
    name: "CSS",
    level: "Advanced",
    className: classNameLanguageSkill,
    iconElement: <IoLogoCss3 size={100} color="#1775bc" />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    className: classNameLanguageSkill,
    iconElement: <SiTypescript size={100} color="#007bcd" />,
  },
  {
    name: "C#",
    level: "Intermediate",
    className: classNameLanguageSkill,
    iconElement: <CSharpIcon />,
  },
];

export const toolsSkill: ToolItemProps[] = [
  {
    name: "React JS",
    level: "Advanced",
    className: classNameLanguageSkill,
    iconElement: <TbBrandReactNative size={100} color="#60dafb" />,
  },
  {
    name: "Vue.js",
    level: "Beginner",
    className: classNameLanguageSkill,
    iconElement: <FaVuejs size={100} color="#40b882" />,
  },
  {
    name: "Next.js",
    level: "Intermediate",
    className: classNameLanguageSkill,
    iconElement: <NextJSIcon />,
  },
  {
    name: "git",
    level: "Advanced",
    className: classNameLanguageSkill,
    iconElement: <FaGitSquare size={100} color="#f05030" />,
  },
  {
    name: "nodeJS",
    level: "Advanced",
    className: classNameLanguageSkill,
    iconElement: <FaNode size={100} color="#89bc5c" />,
  },
  {
    name: "wordPress",
    level: "Beginner",
    className: classNameLanguageSkill,
    iconElement: <FaWordpress size={100} color="#00769d" />,
  },
  {
    name: "commandLine",
    level: "Beginner",
    className: classNameLanguageSkill,
    iconElement: <HiCommandLine size={100} color="#202020" />,
  },
];

export const gameEngineToolsSkill: ToolItemProps[] = [
  {
    name: "UnityEngine",
    level: "Advanced",
    className: classNameLanguageSkill,
    iconElement: <FaUnity size={100} color="#202020" />,
  },
  {
    name: "UnrealEngine",
    level: "Intermediate",
    className: classNameLanguageSkill,
    iconElement: <SiUnrealengine size={100} color="#2e2e2e" />,
  },
  {
    name: "Construct 3",
    level: "Intermediate",
    className: classNameLanguageSkill,
    iconElement: <SiConstruct3 size={100} color="#d2e2f0" />,
  },
];
export const otherToolsSkill: ToolItemProps[] = [
  {
    name: "Sparkar",
    level: "Intermediate",
    className: classNameLanguageSkill,
    iconElement: <SiSparkar size={100} color="#202020" />,
  },
];
