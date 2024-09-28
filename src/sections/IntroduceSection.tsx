"use client";

import { LottieAnimation } from "@/components";

import animationWebsite from "../../public/lotties/website-lottie.json";

import { dataProfile } from "@/data";
import { motion } from "framer-motion";
import { memo, useContext } from "react";
import { MyContext } from "@/context";
import { useRouter } from "next/navigation";

export const IntroduceSection = memo(function IntroduceSection() {
  const { heightHeader } = useContext(MyContext);

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

  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div
      id="aboutMe"
      className={`flex flex-col items-center w-full md:w-[800px] h-screen`}
      style={{ paddingTop: heightHeader.toString() + "px" }}
    >
      <motion.div
        className={`flex flex-col items-center justify-center my-auto gap-9 text-black  w-screen`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="relative text-center text-3xl md:text-6xl font-bold ">
          To get to know me better
          <motion.div
            className="hidden xl:block absolute top-[50%] -right-[18%] translate-x-1/2 -translate-y-1/2  w-[300px]"
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
        <p className="text-center">
          I&apos;m
          <span className="text-blue-600 ml-1  text-lg md:text-4xl font-semibold tracking-wide">
            Web Developer
          </span>
          <span className="px-1">and</span>
          <span className="text-blue-600 ml-1  text-lg md:text-4xl font-semibold tracking-wide">
            Game Developer
          </span>
        </p>
        <div className="flex flex-col xl:flex-row gap-4  w-full px-4 xl:px-0 xl:w-[1000px] ">
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
            <div className="flex justify-center gap-10 text-center ">
              <div>
                <div className=" text-blue-600 text-4xl font-bold">5</div>
                <div className="">Years experience</div>
              </div>
              <div>
                <div className=" text-blue-600 text-4xl font-bold">4</div>
                <div>Programmer language Skill</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="divide-y divide-dashed divide-blue-100">
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
            <button
              className="mt-4 px-8 py-2 bg-gradient-to-br from-red-700 to-sky-700 to-blue w-fit rounded-full mx-auto text-base text-white text-shadow-md  shadow-black shadow-md"
              onClick={() => {
                handleDownload();
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default IntroduceSection;
