"use client";

import { renderLIProps, timelineVerticalData } from "@/data/Sections";
import { memo } from "react";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const TimelineSection = memo(function TimelineSection() {
  return (
    <div id="timeline" className="my-4">
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
                  <h4 className="vertical-timeline-element-subtitle text-gray-600 font-bold text-sm">
                    {item.date}
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
