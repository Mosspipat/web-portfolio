import Lottie from "lottie-react";
import animationData from "../../../public/lotties/proloading.json";

import dynamic from "next/dynamic";

const LottieComponent = dynamic(() => import("lottie-react"), {
  ssr: false, // This line ensures the component is only rendered on the client-side
});

export const LottiePreloading = () => {
  return (
    <div className="fixed inset-0 z-10 ">
      <LottieComponent animationData={animationData} loop />
    </div>
  );
};
