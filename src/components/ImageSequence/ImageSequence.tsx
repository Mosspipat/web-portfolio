// components/ImageSequence.js
import Image from "next/image";
import { useState, useEffect } from "react";

type ImageSequenceProps = {
  frameCount: number;
  folderPath: string;
  filePrefix: string;
  fileExtension: string;
  interval: number;
};

const ImageSequence: React.FC<ImageSequenceProps> = ({
  frameCount,
  folderPath,
  filePrefix,
  fileExtension,
  interval,
}) => {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const updateFrame = () => {
      setCurrentFrame((prevFrame) =>
        prevFrame < frameCount ? prevFrame + 1 : 1
      );
    };

    const intervalId = setInterval(updateFrame, interval);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [frameCount, interval]);

  const paddedFrameNumber = String(currentFrame).padStart(4, "0"); // Pads the frame number with leading zeros
  const imagePath = `${folderPath}/${filePrefix}${paddedFrameNumber}.${fileExtension}`;

  return (
    <Image
      src={imagePath}
      alt={`Frame ${currentFrame}`}
      style={{ width: "100%", height: "auto" }}
      width={960}
      height={540}
    />
  );
};

export default ImageSequence;
