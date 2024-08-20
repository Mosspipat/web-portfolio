import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Initialize the screen size on mount
      handleResize();

      // Add event listener for resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screenSize;
};
