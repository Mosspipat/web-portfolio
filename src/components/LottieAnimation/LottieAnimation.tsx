import Lottie from "lottie-react";
// import animationData from "../../../public/lotties/proloading.json";

import dynamic from "next/dynamic";
import { LegacyRef } from "react";

const LottieComponent = dynamic(() => import("lottie-react"), {
  ssr: false,
});

type LottieAnimationProps = {
  animationData: any;
  className?: string;
  ref?: LegacyRef<HTMLDivElement> | undefined;
};

export const LottieAnimation = ({
  animationData,
  className = "",
  ref,
}: LottieAnimationProps) => {
  return (
    <div className={`inset-0 z-10 ${className}`} ref={ref}>
      <LottieComponent
        animationData={animationData}
        loop={true}
        onComplete={() => {}}
      />
    </div>
  );
};
