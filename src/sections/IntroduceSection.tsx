"useclient";

import { Divider, LottieAnimation } from "@/components";

import animationMobile from "../../public/lotties/mobile-lottie.json";
import animationWebsite from "../../public/lotties/website-lottie.json";

import { dataProfile } from "@/data";
import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";

export const IntroduceSection = memo(function IntroduceSection() {
  const ItemProfileDetail = ({
    title,
    des,
  }: {
    title: string;
    des: string;
  }) => {
    return (
      <div className="flex flex-col  pt-2">
        <div className="text-base font-semibold text-blue-600">{title}</div>
        <div>{des}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-[800px] h-screen">
      <motion.div
        className="flex flex-col items-center justify-center my-auto gap-9 text-black "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="relative text-center text-6xl font-bold ">
          To get to know me better
          <motion.div
            className="absolute top-[50%] -right-[18%] translate-x-1/2 -translate-y-1/2  w-[300px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <LottieAnimation animationData={animationWebsite} />
          </motion.div>
        </div>
        <p>
          I&apos;s
          <span className="text-blue-600 ml-1 text-4xl font-semibold tracking-wide">
            Web Developer{" "}
          </span>
          and
          <span className="text-blue-600 ml-1 text-4xl font-semibold tracking-wide">
            Game Developer
          </span>
        </p>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div>
              I am a program developer.I have worked on language programming
              Develop Technology media like interactive technology, game
              AR(Augmented Reality), VR(Virtual Reality), or creating a program
              that uses 3d model.
            </div>
            <div>
              My Habbit is making Technology that uses coding tools and enjoy to
              solving programming problems because it funs and feels
              challenging.
            </div>
            <div className="flex justify-center gap-10 ">
              <div>
                <div className="text-center text-blue-600 text-4xl font-bold">
                  5
                </div>
                <div>Years experience</div>
              </div>
              <div>
                <div className="text-center text-blue-600 text-4xl font-bold">
                  4
                </div>
                <div>Programmer language Skill</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 divide-y divide-dashed divide-blue-100">
            {dataProfile.map((item, index) => {
              return (
                <ItemProfileDetail
                  title={item.key}
                  des={item.value}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default IntroduceSection;
