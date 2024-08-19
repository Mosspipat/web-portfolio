"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface VideoProps {
  params: {
    id: string;
  };
}

const VideoDemo = ({ params }: VideoProps) => {
  const { id } = params;

  const videoSrc = `/filter/${id}.mp4`;

  return (
    <video
      className="bg-black mx-auto h-screen"
      autoPlay
      loop
      controls={true}
      width="400"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoDemo;
