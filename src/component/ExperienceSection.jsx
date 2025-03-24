import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SkillsSection from "./SkillsSection";

const ExperienceSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Number animation (1+)
  const numberVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Text animation
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="h-screen w-screen grid grid-rows-2 my-20 md:my-10 bg-white">
      <motion.section
        className="relative flex justify-center items-center overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        
        <div className="relative w-full h-full flex items-center justify-center">
         
            
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                {/* Quote Section */}
                <div className="mb-8 text-center">
                  <p className="text-gray-600 text-lg md:text-2xl tracking-wide font-light italic">
                    "Crafting digital experiences, one line at a time"
                  </p>
                </div>

                {/* Experience Block */}
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
                    1+
                  </span>
                  <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mt-4 leading-tight">
                    years of <br /> Freelance & Development <br /> experience
                  </p>
                </div>
              </div>
           
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="flex -mt-30 md:-mt-10 justify-center items-center">
        <SkillsSection />
      </section>
    </div>
  );
};

export default ExperienceSection;
