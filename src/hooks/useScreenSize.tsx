import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.screen.width,
        height: window.screen.height,
      });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
