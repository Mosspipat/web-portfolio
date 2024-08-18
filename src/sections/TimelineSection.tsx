"use client";

import { timelineVerticalData } from "@/data";
console.log("🚀: ~ timelineVerticalData:", timelineVerticalData);
import { memo, useContext, useEffect } from "react";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { MyContext } from "@/context";

export const TimelineSection = memo(function TimelineSection() {
  const { heightHeader } = useContext(MyContext);

  return (
    <div
      id="timeline"
      className={`my-4 `}
      style={{ paddingTop: heightHeader.toString() + "px" }}
    >
      <h2
        className={`text-5xl bg-gradient-to-br via-purple-500 from-blue-700 to-pink-400 bg-clip-text text-transparent font-bold text-center`}
      >
        Timeline
      </h2>
      <div>
        <VerticalTimeline
          lineColor="linear-gradient(135deg, rgb(255, 0, 251) 0%, rgb(33, 150, 243) 100%)"
          animate={true}
        >
          {timelineVerticalData.map((item, index) => {
            return (
              <VerticalTimelineElement
                visible={true}
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
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, color: "#000000" }}
                    className="vertical-timeline-element-title text-black font-bold text-2xl tracking-normal"
                  >
                    {item.department}
                  </motion.h3>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, color: "#000000" }}
                    className="vertical-timeline-element-subtitle text-gray-600 font-bold"
                  >
                    {item.company}
                  </motion.h4>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, color: "#000000" }}
                    className="vertical-timeline-element-subtitle text-gray-600 font-bold text-sm"
                  >
                    {item.date}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, color: "#000000" }}
                    className="vertical-timeline-element-subtitle text-black font-bold"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
});
