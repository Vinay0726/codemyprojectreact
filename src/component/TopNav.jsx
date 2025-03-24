import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,

} from "react-icons/fa";
import { motion } from "framer-motion";

const TopNav = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //for mobile
  const [isOpen, setIsOpen] = useState(true);
   

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && window.innerWidth > 768) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section
      className={`fixed top-0 left-0 w-full z-50 ${isFixed ? "fixed-nav" : ""}`}
      id="toptop"
    >
      <div
        className={`absolute top-0 left-0 w-full h-[70px] px-4 pt-4 z-40 transition-all duration-500 ease-in-out ${
          isClicked ? "clicked" : ""
        }`}
      >
        <div
          className={`hidden  h-full rounded-[32px] flex-col md:flex md:flex-row items-center justify-between overflow-hidden relative bg-white transition-all duration-500 ease-in-out ${
            isFixed ? "w-[72px] rounded-[36px] shadow-md" : ""
          } ${isClicked ? "w-full rounded-[32px]" : ""}`}
        >
          {isFixed && (
            <a href="javascript:;" onClick={handleNavClick}>
              <div className="w-[72px] rounded-[36px] bg-transparent text-center leading-[72px] flex justify-center items-center text-4xl transition-all duration-200 ease-in-out cursor-pointer z-50">
                {isClicked ? <FaTimes /> : <FaBars />}
              </div>
            </a>
          )}
          {(isClicked || !isFixed) && (
            <div className="flex-1/4 w-1/4 bg-white flex items-center justify-start h-full">
              <a className="logo" href="/">
                <p className=" md:ml-0 pl-6 w-[390px]   flex justify-between items-center  font-semibold text-3xl md:text-3xl  text-[#232323] whitespace-nowrap opacity-100 visible transition-all duration-200 ease-in-out delay-300">
                  <img src="logo.png" alt="" srcset="" className="h-24" />{" "}
                  <span className="text-[#a177b4]"></span>
                  <a href="javascript:;" onClick={handleNavClick}>
                    <div className="w-[72px] md:hidden rounded-[36px] bg-transparent text-center leading-[72px] flex justify-center items-center text-4xl transition-all duration-200 ease-in-out cursor-pointer z-50">
                      {isClicked ? <FaTimes /> : <FaBars />}
                    </div>
                  </a>
                </p>
              </a>
            </div>
          )}
          <div className="md:flex-1/2 md:w-1/2 bg-white flex justify-center h-full items-center">
            {(isClicked || !isFixed) && (
              <ul className="m-0 p-0 list-none flex">
                {["Home", "Services", "Projects", "Contact"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="inline-block text-xl font-semibold mx-5 relative opacity-100 visible transition-all duration-200 ease-in-out delay-300"
                    >
                      <a
                        href={`#${item}`}
                        className="no-underline text-[#232323] font-sans font-medium tracking-wide hover:text-[#555] transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
          {(isClicked || !isFixed) && (
            <div className="flex-1/4 w-1/4 bg-white flex justify-end h-full items-center">
              <div className="pr-6">
                <motion.a
                  href="https://wa.me/917249729185" // WhatsApp link
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className=" backdrop-blur-lg  text-gray-900 rounded-full px-6 py-3 border border-gray-200 text-lg font-medium flex items-center space-x-3 transition-all duration-300 hover:bg-white/20  "
                >
                  <span>Connect</span>
                  <FaWhatsapp className="text-green-500 text-2xl" />
                </motion.a>
              </div>
              <div className="side-menu">
                <div className="side-menu-burger">
                  <motion.i
                    className="fas fa-bars text-2xl text-[#232323] cursor-pointer w-5 text-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.i>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* for mobile */}
        <div className=" block md:hidden">
          <div>
            <div className="flex items-center justify-between py-1 pr-4 bg-white shadow-md">
              <h1 className="text-3xl font-semibold ">
                {" "}
                <img src="logo.png" alt="" srcset="" className="h-24" />
              </h1>

              {isOpen ? (
                <div
                  onClick={() => setIsOpen(false)}
                  className="p-0 bg-transparent border-none text-4xl"
                >
                  <FaBars className=" text-4xl " />
                </div>
              ) : (
                <div
                  onClick={() => setIsOpen(true)}
                  className=" bg-transparent"
                >
                  <FaTimes className="text-4xl " />
                </div>
              )}
            </div>
            {!isOpen ? (
              <motion.div
                className="h-[80vh] bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-lg flex flex-col justify-between p-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    height: 0,
                  },
                  visible: {
                    opacity: 1,
                    height: "80vh",
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div>
                  <nav className="flex flex-col space-y-6 text-xl font-medium">
                    {["Home", "Services", "Projects", "Contact"].map((item) => (
                      <motion.a
                        key={item}
                        href={`#${item}`}
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05, color: "#000000" }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-600 hover:text-black transition-all duration-300 ease-in-out"
                        variants={{
                          hidden: { opacity: 0, y: -20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, ease: "easeOut" },
                          },
                        }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </nav>
                </div>

                <div className="flex flex-col items-center space-y-8">
                  <motion.div
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      visible: {
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <p className="text-gray-600 text-lg">
                      Contact for more information
                    </p>
                    <a
                      href="https://wa.me/917249729185"
                      className="text-gray-900 hover:text-black transition-colors duration-200 text-lg"
                    >
                      (+91) 7249729185
                    </a>
                  </motion.div>

                  <motion.div
                    className="flex space-x-8 text-gray-900 text-3xl"
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      visible: {
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, color: "#000000" }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-black transition-all duration-200"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, color: "#000000" }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-black transition-all duration-200"
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/917249729185"
                      whileHover={{ scale: 1.1, color: "#000000" }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-black transition-all duration-200"
                    >
                      <FaWhatsapp />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/finalyearprojectsnagpur/"
                      whileHover={{ scale: 1.1, color: "#000000" }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-black transition-all duration-200"
                    >
                      <FaInstagram />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNav;