"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaPhoneFlip } from "react-icons/fa6";
import { ContactInfo, contactInfoList } from "@/data/sections";

export const ContactSection = memo(function ContactSection() {
  const RenderIcon = ({ value, icon, onClick, title, label }: ContactInfo) => {
    console.log(onClick);
    return (
      <motion.div
        className="flex items-center p-1 hover:cursor-pointer my-auto"
        whileHover={{ scale: 1.2 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        onClick={() => (onClick ? onClick() : () => {})}
      >
        <div className="flex items-center justify-center w-18 h-18 rounded-full  p-2 z-20 bg-white ">
          {icon}
        </div>
        <div className=" -translate-x-6 text-red-700 text-xl font-bold bg-white text-center rounded-full w-auto px-10 ">
          {title} : {label}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      id="contact"
      className=" flex flex-col items-center justify-center w-full h-screen bg-black gap-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className="text-6xl font-bold text-center mt-24">Contact</h2>
      <motion.p
        className="text-center text-3xl w-1/2 mx-auto mt-6 p-4 shadow-xl shadow-blue-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, animation: "easeInOut" }}
      >
        Ready to learn, grow, and contribute—let’s work together to achieve
        great results. I’m excited to bring my enthusiasm and skills to your
        team and learn from the best
      </motion.p>
      <p className="text-center text-lg">
        You can also find me on the following channels.
      </p>
      <div className="flex flex-wrap justify-center items-start gap-6 ">
        {contactInfoList.map((contactInfo) => {
          return (
            <RenderIcon
              value={contactInfo.value}
              icon={contactInfo.icon}
              title={contactInfo.title}
              label={contactInfo.label}
              onClick={contactInfo.onClick}
              key={contactInfo.title}
            />
          );
        })}
      </div>
    </motion.div>
  );
});
