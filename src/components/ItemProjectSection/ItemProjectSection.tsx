"use client";

import { WorkList } from "@/data";
import { useScreenSize, useViewport } from "@/hooks";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

export const ItemProjectSection = ({
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
  const { width } = useScreenSize();

  const router = useRouter();

  type ScreenSize = "MOBILE" | "TABLET" | "DESKTOP";

  const [screenSize, setScreenSize] = useState<ScreenSize>("DESKTOP");

  useEffect(() => {
    if (width && width < 768) {
      setScreenSize("MOBILE");
    } else if (width && width < 1024) {
      setScreenSize("TABLET");
    } else {
      setScreenSize("DESKTOP");
    }
  }, [width]);

  const refContainer = useRef(null);
  const refTitle = useRef(null);
  const refDescription = useRef(null);

  const { scrollYProgress: scrollYContainerProgress } = useScroll({
    target: refTitle,
    offset: ["start end", "end start"],
  });

  const opacityContainer = useTransform(
    scrollYContainerProgress,
    [0, 0.5, 1],
    screenSize !== "MOBILE" ? [0, 1, 1] : [0, 1, 1]
  );

  const { scrollYProgress: scrollYTitleProgress } = useScroll({
    target: refTitle,
    offset: ["start end", "end start"],
  });

  const posXTitle = useTransform(
    scrollYTitleProgress,
    [0, 0.5, 1],
    screenSize !== "MOBILE"
      ? [0, 280, 380].map((element) => (isReverse ? element * -1 : element))
      : [0, 0, 0]
  );

  const posYTitle = useTransform(
    scrollYTitleProgress,
    [0, 0.3],
    screenSize !== "MOBILE" ? [450, 450] : [0, 0]
  );

  const opacityTitle = useTransform(scrollYTitleProgress, [0, 0.5], [0, 1]);

  const { scrollYProgress: scrollYDescriptionProgress } = useScroll({
    target: refDescription,
    offset: ["start end", "end start"],
  });

  const posXDescription = useTransform(
    scrollYDescriptionProgress,
    [0, 0.5, 1],

    screenSize !== "MOBILE"
      ? [0, 280, 380].map((element) => (!isReverse ? element * -1 : element))
      : [0, 0, 0]
  );

  const opacityDescription = useTransform(
    scrollYDescriptionProgress,
    [0, 0.5],
    screenSize !== "MOBILE" ? [0.5, 1] : [1, 1]
  );

  const RenderButton = ({
    label,
    value,
    innerLink,
  }: {
    label: string;
    value: string;
    innerLink?: boolean;
  }) => {
    return (
      <motion.button
        className="text-xl xl:text-xl font-bold bg-black border-blue-200 border-2 rounded-3xl px-4 py-2 w-auto shadow-black shadow-xl"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        onClick={() => {
          if (innerLink) {
            console.log(value);
            // router.push({
            //   pathname: videoDemo,
            // });

            router.push(`/videoDemo/${value}`);

            console.log("click to inner route");
          } else {
            window.open(value, "_blank");
          }
        }}
      >
        {label}
      </motion.button>
    );
  };

  return (
    <motion.div
      ref={refContainer}
      className="relative flex flex-col items-center gap-6 bg-blue-600-700 w-full h-full pb-[200px] md:pb-0"
      style={{ opacity: opacityContainer }}
    >
      <motion.h3
        ref={refTitle}
        className="absolute xl:inset-0 text-center my-auto text-3xl xl:text-8xl font-semibold p-4 z-30 pointer-events-none whitespace-pre-line"
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
        className="flex flex-col justify-center gap-4 w-full xl:w-1/2 min-h-screen mx-auto px-2 xl:px-0"
        style={{
          x: posXDescription,
          opacity: opacityDescription,
        }}
      >
        {DescriptionAddOn}
        <motion.p className="text-base xl:text-lg font-bold">
          {description}
        </motion.p>
        <div className="flex flex-col gap-4 items-center xl:items-start ">
          <span className="border-b-2 border-blue-400 text-2xl w-fit pb-1">
            showcase projects
          </span>
          <div className="flex flex-wrap justify-center xl:justify-start gap-4 mx-auto xl:mx-0 ">
            {showCaseList?.map((showcase) => {
              return (
                <RenderButton
                  label={showcase.label}
                  value={showcase.link}
                  innerLink={showcase.innerLink}
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
