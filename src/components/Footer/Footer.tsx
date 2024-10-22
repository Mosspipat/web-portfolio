"use client";
import { useEffect } from "react";

export const Footer = () => {
  return (
    <footer
      className={` bg-gray-900 text-white p-6 flex justify-center items-center transition-transform w-full `}
      id="footer"
    >
      <p className={`text-center text-sm`}>
        Created by Pipat Horakungthong | Website Portfolio | © 2024 All Rights
        Reserved
      </p>
    </footer>
  );
};
