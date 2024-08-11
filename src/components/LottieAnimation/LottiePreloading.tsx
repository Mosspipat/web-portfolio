import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/lotties/proloading.json";

export const LottiePreloading = () => {
  return (
    <div className="fixed inset-0 z-10 ">
      <Lottie animationData={animationData} loop />
    </div>
  );
};
