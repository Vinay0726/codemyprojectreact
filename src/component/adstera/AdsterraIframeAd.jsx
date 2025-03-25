import React, { useEffect, useRef } from "react";

const AdsterraIframeAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
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

      // Cleanup (optional): Remove script when component unmounts
      return () => {
        if (adRef.current && script.parentNode === adRef.current) {
          adRef.current.removeChild(script);
        }
      };
    }
  }, []); // Runs once on mount

  // Return a div as the ad container with inline styles for dimensions
  return (
    <div
      ref={adRef}
      style={{
        width: "728px",
        height: "90px",
        margin: "0 auto", // Center the ad
      }}
    />
  );
};

export default AdsterraIframeAd;
