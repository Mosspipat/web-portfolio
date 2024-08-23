import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";

export type renderLIProps = {
  year: string;
  JobOrDepartment: string;
  schoolOrCompany?: string;
  description: string;
  link?: string;
  iconItem?: React.ReactElement;
};

type TimelineVerticalData = {
  icon: ReactNode;
  date?: string;
  department?: string;
  company?: string;
  description?: string;
};

export const timelineVerticalData: TimelineVerticalData[] = [
  {
    icon: <MdWork />,
    date: "2023-2024",
    department: "Frontend developer",
    company: "MagicBox solution",
    description:
      "Develop and maintain both website and mobile applications using a frontend framework, ensuring seamless integration between the back office and the main application with the frontend.",
  },
  {
    icon: <MdWork />,
    date: "2020-2022",
    department: "Web developer",
    company: "VIZ Studio",
    description:
      "develop website with AR experience and filter effect to share in social platform.create game content with game engine.",
  },
  {
    icon: <MdWork />,
    date: "2018-2020",
    department: "Interactive media and Game developer ",
    company: "Anyi media",
    description:
      "developer 3D interactive with game engine.Experience with the most exclusive between interactive and online events.",
  },
  {
    icon: <MdWork />,
    date: "2014-2018",
    department: "Bachelor's degree",
    company: "University of Technology Thonburi (KMUTT)",
    description:
      "Bachelor's degree at King Mongkut's University of Technology Thonburi (KMUTT),Bangkok Media digital technology (MDT)",
  },
  {
    icon: <MdSchool />,
    date: "2002-2014",
    department: "High School Certificate equivalent",
    company: "Assumption College Thonburi (ACT)",
    description:
      "High School Certificate equivalent at Assumption College Thonburi (ACT)",
  },
];
