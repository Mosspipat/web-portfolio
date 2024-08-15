import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const MiniSection = ({
  title = "",
  description = "",
  link = "",
  isReverse = false,
}: {
  title?: string;
  description?: string;
  link?: string;
  isReverse?: boolean;
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
        className="absolute inset-0 text-center my-auto text-5xl font-semibold p-4 z-30" // Adjusted z-index
        style={{
          x: posXTitle,
          y: posYTitle,
          opacity: opacityTitle,
          textShadow: `#1717ff 1px 0 10px`,
        }}
      >
        {title}
      </motion.h3>

      <motion.div
        ref={refDescription}
        className="flex flex-col justify-center gap-4 w-1/2 mx-auto"
        style={{
          x: posXDescription,
          opacity: opacityDescription,
        }}
      >
        <div className="relative w-full h-full z-10">
          <iframe
            src="https://ar-car-3d.netlify.app/"
            className="h-screen w-full border-none"
            title="3D Car Viewer"
          />
        </div>

        <motion.p className="text-lg font-bold">{description}</motion.p>
      </motion.div>
    </motion.div>
  );
};
