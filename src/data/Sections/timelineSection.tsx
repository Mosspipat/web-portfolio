import React from "react";
import { MdSchool, MdWork } from "react-icons/md";

export const timelineData: renderLIProps[] = [
  {
    year: "2002-2014",
    schoolOrCompany: "Assumption College Thonburi (ACT)",
    JobOrDepartment: "High School Certificate equivalent ",
    description:
      "High School Certificate equivalent at Assumption College Thonburi (ACT)",
    iconItem: <MdSchool />,
  },
  {
    year: "2014-2018",
    schoolOrCompany: "University of Technology Thonburi (KMUTT)",
    JobOrDepartment: "Bachelor's degree",
    description:
      "Bachelor's degree at King Mongkut's University of Technology Thonburi (KMUTT),Bangkok Media digital technology (MDT)",
    iconItem: <MdSchool />,
  },
  {
    year: "2018-2020",
    schoolOrCompany: "Anyi media",
    JobOrDepartment: " Interactive media and Game developer ",
    description:
      "developer 3D interactive with game engine.Experience with the most exclusive between interactive and online events.",
    iconItem: <MdWork />,
  },
  {
    year: "2020-2022",
    schoolOrCompany: "VIZ Studio",
    JobOrDepartment: "Web developer",
    description:
      "develop website with AR experience and filter effect to share in social platform.create game content with game engine.",
    iconItem: <MdWork />,
  },
  {
    year: "2023-Present",
    schoolOrCompany: "MagicBox solution",
    JobOrDepartment: "Frontend developer",
    description:
      "Develop and maintain both website and mobile applications using a frontend framework, ensuring seamless integration between the back office and the main application with the frontend.",
    iconItem: <MdWork />,
  },
];

export type renderLIProps = {
  year: string;
  JobOrDepartment: string;
  schoolOrCompany?: string;
  description: string;
  link?: string;
  iconItem?: React.ReactElement;
};
