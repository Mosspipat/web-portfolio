"use client";
import { WorkList } from "@/data/sections";
import { useScroll, useTransform, motion } from "framer-motion";

import { useRef } from "react";

export const MiniSection = ({
  title = "",
  description = "",
  link = "",
  isReverse = false,
  DescriptionAddOn = <></>,
  showCaseList,
}: {
  title?: string;
  description?: string;
  link?: string;
  isReverse?: boolean;
  DescriptionAddOn?: React.ReactElement;
  showCaseList?: WorkList[];
}) => {
  const refContainer = useRef(null);
  const refTitle = useRef(null);
  const refDescription = useRef(null);

  const { scrollYProgress: scrollYContainerProgress } = useScroll({
    target: refTitle,
    offset: ["start end", "end start"], // Section fully enters, fully leaves
  });

  const opacityContainer = useTransform(
    scrollYContainerProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  );

  const { scrollYProgress: scrollYTitleProgress } = useScroll({
    target: refTitle,
    offset: ["start end", "end start"], // Section fully enters, fully leaves
  });

  const posXTitle = useTransform(
    scrollYTitleProgress,
    [0, 0.5, 1],
    [0, 280, 380].map((element) => (isReverse ? element * -1 : element))
  );

  const posYTitle = useTransform(scrollYTitleProgress, [0, 0.3], [450, 450]);

  const opacityTitle = useTransform(scrollYTitleProgress, [0, 0.5], [0, 1]);

  const { scrollYProgress: scrollYDescriptionProgress } = useScroll({
    target: refTitle,
    offset: ["start end", "end start"], // Section fully enters, fully leaves
  });

  const scaleDescription = useTransform(
    scrollYDescriptionProgress,
    [0, 0.2, 0.3, 0.5, 1],
    [0.3, 3, 2, 1, 1]
  );

  const posXDescription = useTransform(
    scrollYDescriptionProgress,
    [0, 0.5, 1],
    [0, 280, 380].map((element) => (!isReverse ? element * -1 : element))
  );

  const posYDescription = useTransform(
    scrollYDescriptionProgress,
    [0, 0.3],
    [450, 450]
  );

  const opacityDescription = useTransform(
    scrollYDescriptionProgress,
    [0, 0.5],
    [0.5, 1]
  );

  const shadowDescription = useTransform(
    scrollYDescriptionProgress,
    [0, 1],
    [0, 255]
  );

  const RenderButton = ({ label, value }: { label: string; value: string }) => {
    return (
      <motion.button
        className="text-lg font-bold bg-black border-blue-200 border-2 rounded-3xl px-4 py-2 w-auto"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        onClick={() => {
          window.open(value, "_blank");
        }}
      >
        {label}
      </motion.button>
    );
  };

  return (
    <motion.div
      ref={refContainer}
      className="relative flex flex-col items-center gap-6 bg-blue-600-700 w-full h-full"
      style={{ opacity: opacityContainer }}
    >
      <motion.h3
        ref={refTitle}
        className="absolute inset-0 text-center my-auto text-8xl font-semibold p-4 z-30 pointer-events-none whitespace-pre-line" // Adjusted z-index
        style={{
          x: posXTitle,
          y: posYTitle,
          opacity: opacityTitle,
        }}
        whileInView={{ textShadow: `1px 1px 20px #1717ff` }}
      >
        {title}
      </motion.h3>

      <motion.div
        ref={refDescription}
        className="flex flex-col justify-center gap-4 w-1/2 min-h-screen mx-auto "
        style={{
          x: posXDescription,
          opacity: opacityDescription,
        }}
      >
        {DescriptionAddOn}
        <motion.p className="text-lg font-bold">{description}</motion.p>
        <div className="flex flex-col gap-4">
          {/* <button
            onClick={() => {
              console.log("click");
            }}
          >
            sss
          </button> */}
          <span className="border-b-2 border-blue-400 text-2xl w-fit pb-1">
            showcase projects
          </span>
          <div className="flex gap-4">
            {showCaseList?.map((showcase) => {
              return (
                <RenderButton
                  label={showcase.label}
                  value={showcase.link}
                  key={showcase.label}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
