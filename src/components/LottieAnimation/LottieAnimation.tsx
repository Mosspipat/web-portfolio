import Lottie from "lottie-react";
// import animationData from "../../../public/lotties/proloading.json";

import dynamic from "next/dynamic";

const LottieComponent = dynamic(() => import("lottie-react"), {
  ssr: false,
});

type LottieAnimationProps = {
  animationData: any;
  className?: string;
};

export const LottieAnimation = ({
  animationData,
  className = "",
}: LottieAnimationProps) => {
  return (
    <div className={`inset-0 z-10 ${className}`}>
      <LottieComponent animationData={animationData} loop />
    </div>
  );
};
