import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPhp,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

const LandingSection = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="w-screen inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Content */}
      <motion.h1
        className="w-[100%] text-5xl md:text-6xl font-bold mb-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Build Your Dream Project 🚀
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-xl mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Get expert support in developing your Mini & Major Projects with
        cutting-edge technologies.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="https://wa.me/917249729185"
        className="-mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-sm sm:text-lg font-semibold text-white transition duration-300 shadow-lg relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.a>

      {/* Web Development Icons */}
      <div className="absolute top-36 md:top-30 left-16 text-3xl md:text-5xl text-orange-600">
        <FaHtml5 />
      </div>
      <div className="absolute top-32 md:top-28 right-20 text-3xl md:text-5xl text-blue-600">
        <FaCss3Alt />
      </div>
      <div className="absolute bottom-30 left-20 text-3xl md:text-5xl text-yellow-400">
        <FaJs />
      </div>
      <div className="absolute top-1/4 left-1/4 text-3xl md:text-5xl text-blue-400">
        <FaReact />
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-3xl md:text-5xl text-red-600">
        <FaJava />
      </div>
      <div className="absolute top-1/3 right-10 md:right-30 text-3xl md:text-5xl text-purple-600">
        <FaPhp />
      </div>
      <div className="absolute bottom-20 right-10 text-3xl md:text-5xl text-green-600">
        <FaPython />
      </div>
      <div className="absolute bottom-1/3 left-10 text-3xl md:text-5xl text-green-400">
        <FaNodeJs />
      </div>

      {/* Additional SVG Graphics */}
      <svg
        className="absolute bottom-0 md:-bottom-24 left-0 w-full z-0"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100C0 100 200 0 500 0C800 0 1000 100 1440 100V200H0V100Z"
          fill="url(#paint0_linear_1_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_3"
            x1="720"
            y1="0"
            x2="720"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D1D5DB" /> {/* Light Gray */}
            <stop offset="1" stopColor="#9CA3AF" /> {/* Slightly Darker Gray */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LandingSection;
