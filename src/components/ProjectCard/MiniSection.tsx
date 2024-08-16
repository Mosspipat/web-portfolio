import { useScroll, useTransform, motion } from "framer-motion";

import { useRef } from "react";

export const MiniSection = ({
  title = "",
  description = "",
  link = "",
  isReverse = false,
  DescriptionAddOn = <></>,
}: {
  title?: string;
  description?: string;
  link?: string;
  isReverse?: boolean;
  DescriptionAddOn?: React.ReactElement;
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

  return (
    <motion.div
      ref={refContainer}
      className="relative flex flex-col items-center gap-6 bg-blue-600-700 w-full h-full"
      style={{ opacity: opacityContainer }}
    >
      <motion.h3
        ref={refTitle}
        className="absolute inset-0 text-center my-auto text-8xl font-semibold p-4 z-30 whitespace-pre-line" // Adjusted z-index
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
          <span className="border-b-2 border-blue-400 text-2xl w-fit pb-1">
            showcase projects
          </span>
          <div className="flex gap-4">
            <button className="text-lg font-bold bg-black rounded-3xl px-4 py-2 w-auto">
              Link 1
            </button>
            <button className="text-lg font-bold bg-black rounded-3xl px-4 py-2 w-auto">
              Link 2
            </button>
            <button className="text-lg font-bold bg-black rounded-3xl px-4 py-2 w-auto">
              Link 3
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
