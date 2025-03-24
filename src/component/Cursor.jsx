import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="h-[30px] w-[30px] hidden border border-gray-400 rounded-full md:block fixed pointer-events-none z-[60]"
      animate={{ x: -30, y: -10 }}
      transition={{
        ease: "easeOut",
        duration: 0.1,
      }}
    />
  );
};

export default Cursor;
