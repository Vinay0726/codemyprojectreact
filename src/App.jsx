import { useEffect, useState } from "react";
import ContactSection from "./component/ContactSection";
import Cursor from "./component/Cursor";
import ExperienceSection from "./component/ExperienceSection";
import LandingSection from "./component/LandingSection";
import Loader from "./component/Loader";
import ProjectPortfolioCircular from "./component/ProjectPortfolioCircular";
import ProjectSection from "./component/ProjectSection";
import ServiceSection from "./component/ServiceSection";
import TopNav from "./component/TopNav";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4500); // Loader lasts 4.5 seconds

    // Function to load an external script dynamically
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    // Load Adsterra scripts
    const script1 = loadScript(
      "//pl26209956.effectiveratecpm.com/ba5241d01f7d2aaf4b592ec37a1a0cab/invoke.js"
    );
    const script2 = loadScript(
      "//www.highperformanceformat.com/5b10493ec213727de074e7df4f1adf94/invoke.js"
    );

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
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

      {/* Adsterra Ad Container */}
      <div id="adsterra-ad" style={{ textAlign: "center", margin: "20px 0" }}>
        <div id="container-ba5241d01f7d2aaf4b592ec37a1a0cab"></div>
      </div>

      <div id="Contact">
        <ContactSection />
      </div>

      {/* Second Adsterra Banner Ad */}
      <div
        id="adsterra-banner"
        className="flex justify-center items-center"
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        <iframe
          src="//www.highperformanceformat.com/5b10493ec213727de074e7df4f1adf94/invoke.js"
          width="728"
          height="90"
          style={{ border: "none" }}
          title="Adsterra Banner"
        ></iframe>
      </div>

      {/* Loader overlays the content */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
    </>
  );
}

export default App;
