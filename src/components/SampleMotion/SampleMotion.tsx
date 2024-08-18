"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const SampleMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            I am visible
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
