"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "../3dCard";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";

export type ThreeDCardDemoProps = {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
};

export function ThreeDCardDemo({
  title,
  description,
  image,
  link,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-r from-blue-500 to-purple-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white bg-gradient-to-b from-gray-200 to-transparent bg-white rounded-lg p-4 border border-transparent bg-clip-padding"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image || ""}
            alt="thumbnail"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            link
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
