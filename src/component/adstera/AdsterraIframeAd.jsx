import React, { useEffect, useRef, useState } from "react";

const AdsterraIframeAd = () => {
  const adRef = useRef(null);
  const [showAd, setShowAd] = useState(window.innerWidth >= 728);

  // Handle window resize to toggle ad visibility
  useEffect(() => {
    const handleResize = () => {
      setShowAd(window.innerWidth >= 728);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Load the ad script when the component mounts and the ad should be shown
  useEffect(() => {
    if (!showAd) return; // Skip if ad shouldn't be shown

    // Set up atOptions globally (required by Adsterra)
    window.atOptions = {
      key: "5b10493ec213727de074e7df4f1adf94",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    // Check if the script is already loaded to avoid duplicates
    if (
      !document.querySelector(
        `script[src="//www.highperformanceformat.com/5b10493ec213727de074e7df4f1adf94/invoke.js"]`
      )
    ) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//www.highperformanceformat.com/5b10493ec213727de074e7df4f1adf94/invoke.js";
      script.async = true;

      // Append the script to the ad container
      if (adRef.current) {
        adRef.current.appendChild(script);
      }

      // Cleanup: Remove script when component unmounts or ad is hidden
      return () => {
        if (adRef.current && script.parentNode === adRef.current) {
          adRef.current.removeChild(script);
        }
      };
    }
  }, [showAd]); // Re-run when showAd changes

  // Return null if the screen is too small, otherwise render the ad container
  if (!showAd) return null;

  return (
    <div
      ref={adRef}
      style={{
        width: "728px",
        height: "90px",
        maxWidth: "100%", // Prevent overflow on slightly smaller screens
        margin: "0 auto", // Center the ad
      }}
    />
  );
};

export default AdsterraIframeAd;
