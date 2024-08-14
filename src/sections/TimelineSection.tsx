"use client";

import {
  renderLIProps,
  timelineData,
  timelineVerticalData,
} from "@/data/Sections";
import { memo } from "react";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const RenderLI = ({
  year,
  JobOrDepartment,
  description,
  link,
  iconItem,
}: renderLIProps) => {
  return (
    <motion.li
      className="mb-10 ms-6  text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <span className="absolute flex items-center justify-center w-6 h-6 p-[5px] bg-blue-700 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {iconItem}
      </span> */}
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white text-center">
        {JobOrDepartment}
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
    <div>
      <h2 className="text-5xl bg-gradient-to-br via-purple-500 from-blue-700 to-pink-400 bg-clip-text text-transparent font-bold text-center">
        Timeline
      </h2>
      <div>
        <VerticalTimeline
          className="custom-timeline"
          lineColor="linear-gradient(135deg, rgb(255, 0, 251) 0%, rgb(33, 150, 243) 100%)"
          animate={true}
        >
          {timelineVerticalData.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                // contentStyle={contentStyle}
                // contentArrowStyle={arrowStyle}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    "linear-gradient(135deg, rgb(255, 0, 251) 0%, rgb(33, 150, 243) 100%)",
                  color: "#fff",
                }}
                contentStyle={{
                  background: "white",
                  color: "#fff",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, animation: "easeInOut" }}
                >
                  <div className="test-css">test color</div>
                  <motion.h3 className="vertical-timeline-element-title text-black font-bold text-2xl tracking-normal">
                    {item.department}
                  </motion.h3>
                  <h4 className="vertical-timeline-element-subtitle text-gray-600 font-bold">
                    {item.company}
                  </h4>
                  <p className="vertical-timeline-element-subtitle text-black font-bold">
                    {item.description}
                  </p>
                </motion.div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
});
