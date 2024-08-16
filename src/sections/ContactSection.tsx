"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaPhoneFlip } from "react-icons/fa6";

export const ContactSection = memo(function ContactSection() {
  const contactInfo = [
    {
      label: "Email",
      icon: <FaPhoneFlip />,
    },
    {
      label: "Phone",
      icon: <FaPhoneFlip />,
    },
  ];

  const RenderIcon = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon: React.ReactElement;
  }) => {
    return (
      <>
        <div className="rounded-full bg-gradient-to-br from-blue-500 via-blue-300 to-red-500 shadow-lg shadow-red-500 p-2">
          <FaPhoneFlip
            className="bg-white rounded-full h-16 w-16 p-2"
            size={40}
            color="#1b6ccf"
          />
          {icon}
        </div>
        <p className="text-blue-600 font-bold text-xl tracking-normal">
          {label}
        </p>
      </>
    );
  };

  return (
    <motion.div className="w-full h-screen bg-black" id="contact">
      <h2 className="text-6xl font-bold text-center mt-24">Contact</h2>
      <p className="text-center text-3xl w-1/2 mx-auto mt-6">
        Ready to learn, grow, and contribute—let’s work together to achieve
        great results. I’m excited to bring my enthusiasm and skills to your
        team and learn from the best
      </p>
      <div className=" flex flex-wrap justify-center gap-2 ">
        <div className=" flex flex-col items-center ">
          <div className="relative rounded-full w-24 h-24  p-1">
            <div className="relative">
              <div className="absolute bg-red-500 rounded-full inset-0 h-16 w-16 p-4">
                <FaPhoneFlip
                  className="absolute bg-white rounded-full inset-0 h-16 w-16 p-2 z-20 border-2"
                  size={40}
                  color="#1b6ccf"
                />
              </div>
              <div className="absolute top-5 -right-[180%] text-red-700  text-xl font-bold w-[200px] bg-white text-center rounded-full">
                064-637-9555
              </div>
            </div>
          </div>
        </div>
        {/* <div>Mail</div>
        <div>Instagram</div>
        <div>Facebook</div>
        <div>Github</div>
        <div>Linkedin</div> */}
      </div>
    </motion.div>
  );
});
