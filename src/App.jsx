import { useEffect, useState } from "react";
import ContactSection from "./component/ContactSection";
import Cursor from "./component/Cursor"
import ExperienceSection from "./component/ExperienceSection";
import LandingSection from "./component/LandingSection"
import Loader from "./component/Loader";
import ProjectPortfolioCircular from "./component/ProjectPortfolioCircular"
import ProjectSection from "./component/ProjectSection";
import ServiceSection from "./component/ServiceSection";


import TopNav from "./component/TopNav"
import { AnimatePresence } from "framer-motion";


function App() {
  
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   setTimeout(() => setLoading(false), 4500); // Loader lasts 4.5 seconds
 }, []);
  return (
    <>
      <Cursor />
      <TopNav />
      <div id="Home">
        <LandingSection />
      </div>

      <ProjectPortfolioCircular />
      <div id="Services">
        <ServiceSection />
      </div>

      <ExperienceSection />
      <div id="Projects">
        <ProjectSection />
      </div>
      <div id="Contact">
        <ContactSection />
      </div>
      {/* <div id="footer">
        <CopyRightFooter />
      </div> */}

      {/* Loader overlays the content */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
    </>
  );
}

export default App
