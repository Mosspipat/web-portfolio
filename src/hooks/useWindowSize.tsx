import React, { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () =>
      setWidth(window.innerWidth / window.devicePixelRatio);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
};
