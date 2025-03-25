// ProjectSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaLaptop,
  FaArrowRight,
} from "react-icons/fa";

const projectImages = {
  java: [
    "projects/java/resumecraft.png",
    "projects/java/smartestate.png",
    "projects/java/easybank.png",
    "projects/java/fashionnest.png",
    "projects/java/employeems.png",
  ],
  python: [
    "projects/python/facesync.png",
    "projects/python/handspeakai.png",
    "projects/python/todolist.png",
    "projects/python/Fooodie.png",
    "projects/python/sportsclub.png",
    "projects/python/vehicalMs.png",
    "projects/python/hospitalms.png",
  ],
  php: [
    "projects/php/quizly.png",
    "projects/php/realestate.png",
    "projects/php/tourandtravel.png",
    "projects/php/dryme.png",
    "projects/php/nutrinook.png",
  ],
  nodejs: [
    "projects/nodejs/recipezap.png",
    "projects/nodejs/prescripto.png",
    "projects/nodejs/auctionhorizon.png",
  ],
};

const projects = {
  java: [
    {
      id: 1,
      title: "Resume Craft",
      desc: "Developed a resume builder with Gemini AI for role-based suggestions, enhancing personalization and content quality.",
    },
    {
      id: 2,
      title: "Smart Estate",
      desc: "Developed a real estate website with AI for property recommendations, advanced search, and seamless user experience.",
    },
    {
      id: 3,
      title: "Easy Bank",
      desc: "Built a banking app for efficient account management across roles, reducing manual work significantly.",
    },
    {
      id: 4,
      title: "Fashion Nest",
      desc: "Built an eCommerce platform with better product management, advanced search, mobile responsiveness, and order tracking.",
    },
    {
      id: 5,
      title: "Employee Management System",
      desc: "Developed an Employee MS for efficient employee data management and tracking.",
    },
  ],
  python: [
    {
      id: 1,
      title: "FaceSync",
      desc: "AI-powered attendance system using facial recognition for secure, automated, and contactless student or employee tracking.",
    },
    {
      id: 2,
      title: "HandSpeak Ai",
      desc: "AI-powered hand sign detection converts gestures to text with face recognition for secure login and registration.",
    },
    {
      id: 3,
      title: "QuickTask",
      desc: "A Modern to-do list website for adding, editing, and deleting tasks with a clean user interface.",
    },
    {
      id: 4,
      title: "Foodie",
      desc: "A delicious foodie website featuring a variety of mouth-watering dishes, recipes, and online ordering.",
    },
    {
      id: 5,
      title: "SportsClub",
      desc: "A dynamic sports club website featuring events, memberships, training programs, and community engagement for all athletes.",
    },
    {
      id: 6,
      title: "EasyPark",
      desc: "A smart vehicle parking management system for real-time slot booking, tracking, and seamless entry-exit management.",
    },
    {
      id: 7,
      title: "HospiEase",
      desc: "A complete hospital management system ensuring smooth workflow, improved patient care, and secure data handling.",
    },
  ],
  php: [
    {
      id: 1,
      title: "Quizly",
      desc: "AI-powered quiz platform using Gemini AI for smart, interactive, and knowledge-enhancing challenges.",
    },
    {
      id: 2,
      title: "EstatePro",
      desc: "A simple platform for buying, selling, and renting properties with easy search and listings.",
    },
    {
      id: 3,
      title: "TripNest",
      desc: "A travel website offering bookings, destination guides, tour packages, and seamless trip planning for travelers.",
    },
    {
      id: 4,
      title: "DryMe",
      desc: "A hassle-free dry cleaning service offering doorstep pickup, quick cleaning, and doorstep delivery with care.",
    },
    {
      id: 5,
      title: "NutriNook",
      desc: "A personalized dietitian platform offering nutrition plans, health tips, and expert guidance for a healthier lifestyle.",
    },
  ],
  nodejs: [
    {
      id: 1,
      title: "RecipeZap",
      desc: "An AI-powered recipe website where users add ingredients and get instant, personalized recipes with smart suggestions.",
    },
    {
      id: 2,
      title: "Prescripto",
      desc: "Prescripto connects patients with doctors for hassle-free online consultations, appointments, and medical prescriptions.",
    },
    {
      id: 3,
      title: "AuctionHorizon",
      desc: "A dynamic auction platform for buying and selling items through real-time bidding and competitive pricing.",
    },
  ],
};

const techIcons = {
  java: <FaJava />,
  python: <FaPython />,
  php: <FaPhp />,
  nodejs: <FaNodeJs />,
};

const ProjectSection = () => {
  const [selectedTech, setSelectedTech] = useState("java");
  const [showAll, setShowAll] = useState(false);

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)" },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 0.95 },
  };

  const handleGetProject = (projectTitle) => {
    console.log(`Getting project: ${projectTitle}`);
  };

  const displayedProjects = showAll
    ? projects[selectedTech]
    : projects[selectedTech].slice(0, 3);

  return (
    <section className="min-h-screen bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          <FaLaptop className="text-cyan-400" /> Projects
        </motion.h2>

        {/* Tech Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {["java", "python", "php", "nodejs"].map((tech) => (
            <motion.button
              key={tech}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setSelectedTech(tech);
                setShowAll(false);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium capitalize backdrop-blur-sm border flex items-center gap-2 ${
                selectedTech === tech
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-200"
                  : "bg-gray-800/30 border-gray-700 text-gray-300 hover:border-cyan-500/50"
              } transition-colors duration-300`}
            >
              {techIcons[tech]}
              {tech}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                }}
                className="bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-xl p-5 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
              >
                <motion.div className="overflow-hidden rounded-lg mb-4">
                  <a href="https://www.effectiveratecpm.com/jt47uisms?key=cb20bb4266a240fb6065282b95bf61d7">
                    <motion.img
                      src={projectImages[selectedTech][index]}
                      alt={project.title}
                      className="w-full h-60 sm:h-60 object-fill"
                      variants={imageVariants}
                      initial="initial"
                      whileHover="hover"
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4">
                  {project.desc}
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/917249729185"
                  className="mt-auto px-3 py-1 bg-cyan-500/20 border border-cyan-400 text-cyan-200 rounded-full text-xs sm:text-sm font-medium hover:bg-cyan-500/30 transition-colors duration-300 w-fit"
                >
                  Get Project
                </motion.a>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See More Button */}
        {projects[selectedTech].length > 3 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="mt-10 mx-auto px-6 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-200 rounded-full text-sm sm:text-base font-medium hover:bg-cyan-500/30 transition-colors duration-300 flex items-center gap-2"
          >
            {showAll ? "Show Less" : "See More"} <FaArrowRight />
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
