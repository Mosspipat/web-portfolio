import { Divider, LottieAnimation } from "@/components";

import animationMobile from "../../public/lotties/mobile-lottie.json";
import animationWebsite from "../../public/lotties/website-lottie.json";

import { dataProfile } from "@/data";
import { motion } from "framer-motion";
import { memo } from "react";

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
    <motion.div
      className="flex flex-col items-center justify-center gap-9 text-black w-[800px] h-screen "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <LottieAnimation
          className="absolute inset-0"
          animationData={animationMobile}
        />
      </div>
      <div className="relative">
        <LottieAnimation
          className="absolute "
          animationData={animationWebsite}
        />
      </div>
      <p className="text-center text-6xl font-bold ">
        To get to know me better
      </p>
      <p>
        I'm
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
            solving programming problems because it funs and feels challenging.
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
  );
});

export default IntroduceSection;
