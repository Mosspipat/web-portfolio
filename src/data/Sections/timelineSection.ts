export const timelineData: renderLIProps[] = [
  {
    year: "2002-2014",
    title:
      "High School Certificate equivalent from Assumption College Thonburi (ACT)",
    description:
      "High School Certificate equivalent at Assumption College Thonburi (ACT)",
  },
  {
    year: "2014-2018",
    title: "Bachelor's degree from University of Technology Thonburi (KMUTT)",
    description:
      "Bachelor's degree at King Mongkut's University of Technology Thonburi (KMUTT),Bangkok Media digital technology (MDT)",
  },
  {
    year: "2018-2020",
    title: "Anyi media Interactive media and Game developer ",
    description:
      "developer 3D interactive with game engine.Experience with the most exclusive between interactive and online events.",
  },
  {
    year: "2020-2022",
    title: "VIZ Studio Web developer",
    description:
      "develop website with AR experience and filter effect to share in social platform.create game content with game engine.",
  },
  {
    year: "2023-Present",
    title: "MagicBox solution Frontend developer",
    description:
      "Develop and maintain both website and mobile applications using a frontend framework, ensuring seamless integration between the back office and the main application with the frontend.",
  },
];

export type renderLIProps = {
  year: string;
  title: string;
  description: string;
  link?: string;
};
