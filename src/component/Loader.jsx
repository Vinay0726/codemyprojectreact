import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: progress >= 100 ? 0 : 1,
      transition: {
        opacity: {
          delay: 0.8,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  const halfVariants = {
    initial: {
      y: 0,
      scaleY: 1,
      originY: 1,
    },
    animate: {
      y: progress >= 100 ? "-50vh" : 0,
      scaleY: progress < 100 ? 1 + progress / 200 : 1,
      transition: {
        y: {
          delay: progress >= 100 ? 0 : 0,
          duration: progress >= 100 ? 0.8 : 0,
          ease: [0.6, 0.01, -0.05, 0.95],
        },
        scaleY: {
          duration: 3.5,
          ease: [0.4, 0, 0.2, 1],
        },
      },
    },
  };

  const bottomHalfVariants = {
    initial: {
      y: 0,
      scaleY: 1,
      originY: 0,
    },
    animate: {
      y: progress >= 100 ? "50vh" : 0,
      scaleY: progress < 100 ? 1 + progress / 200 : 1,
      transition: {
        y: {
          delay: progress >= 100 ? 0 : 0,
          duration: progress >= 100 ? 0.8 : 0,
          ease: [0.6, 0.01, -0.05, 0.95],
        },
        scaleY: {
          duration: 3.5,
          ease: [0.4, 0, 0.2, 1],
        },
      },
    },
  };

  return (
    <motion.div
      className="fixed z-[100] inset-0 overflow-x-hidden overflow-y-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Top Half */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-black flex items-center justify-center overflow-hidden"
        variants={halfVariants}
        initial="initial"
        animate="animate"
      />

      {/* Bottom Half */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-black flex items-center justify-center overflow-hidden"
        variants={bottomHalfVariants}
        initial="initial"
        animate="animate"
      />

      {/* Progress Counter */}
      <div className="absolute bottom-10 left-10   text-gray-100 text-5xl md:text-7xl font-extrabold font-[Poppins]   px-6 py-3 z-10 transition-all duration-300 hover:scale-105">
        {progress}%
      </div>
    </motion.div>
  );
};

export default Loader;
