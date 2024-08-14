"use client";

import { renderLIProps, timelineData } from "@/data/Sections";
import { memo } from "react";
import { motion } from "framer-motion";

const RenderLI = ({
  year,
  department,
  description,
  link,
  iconItem,
}: renderLIProps) => {
  return (
    <motion.li
      className="mb-10 ms-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute flex items-center justify-center w-6 h-6 p-[5px] bg-blue-700 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {iconItem}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {department}
        {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
          Present
        </span> */}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {year}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </motion.li>
  );
};

export const TimelineSection = memo(function TimelineSection() {
  return (
    <>
      <h2 className="my-12 text-6xl font-bold tracking-normal text-shadow-md text-gray-900 dark:text-white">
        Timeline
      </h2>
      <ol className="relative mb-24 border-s border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
        {timelineData.map((item) => {
          // return <h1 key={item.year}>{item.year}</h1>;
          return <RenderLI key={item.year} {...item} />;
        })}
      </ol>
    </>
  );
});
