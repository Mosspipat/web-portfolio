// src/components/CSharpIcon.js
import React from "react";
import nextJSIcon from "../../assets/Icons/nextjs-icon.svg";
import Image from "next/image";

const NextJSIcon = () => {
  return (
    <Image
      src={nextJSIcon}
      alt="nextJS Icon"
      width={100}
      className="text-white"
    />
  );
};

export default NextJSIcon;
