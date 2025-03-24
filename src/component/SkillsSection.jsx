import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const services = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
  ];
  const backendSkills = [
    "Java",
    "Python",
    "PHP",
    "NodeJs",
    "Spring Boot",
    "Java",
    "Python",
    "PHP",
    "Flask",
    "FastApi",
    "Django",
  ];
 
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  const scrollVariants = {
    animate: {
      x: scrollDirection === "down" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const scrollBackendVariants = {
    animate: {
      x: scrollDirection === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const repeatedServices = [...services, ...services];
  const repeatedBackend = [...backendSkills, ...backendSkills];

  return (
    <div className="w-screen  flex flex-col md:space-y-6">
      <div className="mb-[50px]">
        <p className="text-[#787878] text-[20px] text-center">
          “Technology I Work With!”
        </p>
      </div>

      {/* Frontend Skills */}
      <div className="w-full h-[70px] overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-flex"
          variants={scrollVariants}
          animate="animate"
        >
          {repeatedServices.map((service, index) => (
            <React.Fragment key={index}>
              <span className="inline-block h-[70px] text-xl md:text-[40px] xl:text-[50px] leading-[70px] font-bold text-[#232323]">
                {service}
              </span>
              <span className="inline-block w-[100px] h-[70px] relative">
                <span className="absolute w-[80%] h-[2px] bg-[#232323] top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Backend Skills */}
      <div className="w-full h-[70px] overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-flex"
          variants={scrollBackendVariants}
          animate="animate"
        >
          {repeatedBackend.map((service, index) => (
            <React.Fragment key={index}>
              <span className="inline-block h-[70px] text-xl md:text-[40px] xl:text-[50px] leading-[70px] font-bold text-[#232323]">
                {service}
              </span>
              <span className="inline-block w-[100px] h-[70px] relative">
                <span className="absolute w-[80%] h-[2px] bg-[#232323] top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
