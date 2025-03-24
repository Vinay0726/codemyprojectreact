import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaClock,
  FaMobileAlt,
  FaTools,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    title: "Project Development",
    description:
      "From concept to completion, we craft tailored solutions for mini and major projects with cutting-edge tech stacks.",
    icon: <FaLaptopCode className="text-cyan-400 text-5xl" />,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Web Development",
    description:
      "Bespoke websites with seamless functionality, stunning visuals, and optimized performance.",
    
    icon: <FaCode className="text-emerald-400 text-5xl" />,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI Project Development",
    description:
      "Intelligent systems powered by AI and machine learning to solve real-world problems.",
    
    icon: <FaRobot className="text-indigo-400 text-5xl" />,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "On-Time Delivery",
    description:
      "Precision-driven project management ensuring deadlines are met without compromise.",
    
    icon: <FaClock className="text-amber-400 text-5xl" />,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Responsive Design",
    description:
      "Pixel-perfect, mobile-first designs that adapt flawlessly across all devices.",
   
    icon: <FaMobileAlt className="text-rose-400 text-5xl" />,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Maintenance & Support",
    description:
      "Continuous care to keep your projects running smoothly with proactive updates.",
    
    icon: <FaTools className="text-violet-400 text-5xl" />,
    gradient: "from-violet-500 to-fuchsia-600",
  },
];

const ServiceCard = ({ title, description, details, icon, gradient }) => {
  return (
    <motion.div
      className={`h-[220px] w-[260px] relative bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-8  transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden flex justify-center items-center`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Gradient background on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      />
      {/* Glowing orb effect */}
      <motion.div
        className="absolute -top-10 -right-10 w-24 h-24 bg-white/20 rounded-full group-hover:bg-white/40 transition-all duration-500"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <div className="relative z-10">
        <motion.div
          className="flex justify-center p-2"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl p-2 font-extrabold mt-4 text-gray-900 text-center group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 p-2 mt-2 text-center text-balance group-hover:text-white/90 transition-colors duration-300 ">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ServiceSection = () => {
  return (
    <div className="relative py-24 overflow-hidden ">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0  opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.h1
        className="relative text-5xl md:text-7xl font-bold text-center text-gray-400 mb-16 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Services We{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Offer
        </span>
      </motion.h1>
      <div className="relative h-[50%] flex justify-center  px-4">
        <div className="flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full"
        animate={{ y: [0, 100, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-10 md:right-40 w-6 h-6 bg-purple-400 rounded-full"
        animate={{ y: [0, -120, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default ServiceSection;
