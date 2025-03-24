import React from "react";
import { motion } from "framer-motion";

const ProjectPortfolioCircular = () => {
  return (
    <div
      className="py-20 bg-gray-800 text-white"
      style={{
        width: "100vw",
        overflowX: "hidden",
        
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE/Edge
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          {/* Left Content */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-5xl font-bold mt-4 leading-tight">
              Helping Students <br /> Build Real Projects.
            </h3>
            <p className="text-gray-300 mt-6">
              Hands-on experience in Mini & Major Projects. <br />
              We provide coding support & real-world development.
            </p>
          </div>

          {/* Rotating Circular Text */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative w-64 h-64">
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 220 220" className="w-full h-full">
                  <path
                    id="curve"
                    d="M 110 110, m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                    fill="transparent"
                  />
                  <text fill="white">
                    <textPath href="#curve" fontSize="14" fill="white">
                      — Web Dev — Coding Support — Mini & Major Projects —— Web
                      Dev — Coding Support — Mini & Major Projects —
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-orange-500">25+</span>
                <p className="mt-2 text-gray-300">
                  Successfully Completed <br />
                  Student Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolioCircular;
