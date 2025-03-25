import React, { useEffect, useRef, useState } from "react";

const AdsterraIframeAd = () => {
  const adRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 728);

  // Handle window resize to toggle between ad sizes
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 728);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load the appropriate ad script based on screen size
  useEffect(() => {
    const adConfig = isLargeScreen
      ? {
          key: "5b10493ec213727de074e7df4f1adf94", // 728x90 ad
          format: "iframe",
          height: 90,
          width: 728,
          params: {},
          scriptSrc:
            "//www.highperformanceformat.com/5b10493ec213727de074e7df4f1adf94/invoke.js",
        }
      : {
          key: "f672c1b8de734cbd4fd9de8f9314d224", // 300x250 ad
          format: "iframe",
          height: 250,
          width: 300,
          params: {},
          scriptSrc:
            "//www.highperformanceformat.com/f672c1b8de734cbd4fd9de8f9314d224/invoke.js",
        };

    // Set up atOptions globally
    window.atOptions = {
      key: adConfig.key,
      format: adConfig.format,
      height: adConfig.height,
      width: adConfig.width,
      params: adConfig.params,
    };

    // Remove any existing script to avoid conflicts
    const existingScript = document.querySelector(
      `script[src="${adConfig.scriptSrc}"]`
    );
    if (existingScript && existingScript.parentNode) {
      existingScript.parentNode.removeChild(existingScript);
    }

    // Create and append new script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = adConfig.scriptSrc;
    script.async = true;

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    // Cleanup
    return () => {
      if (adRef.current && script.parentNode === adRef.current) {
        adRef.current.removeChild(script);
      }
    };
  }, [isLargeScreen]); // Re-run when screen size toggle changes

  return (
    <div
      ref={adRef}
      style={{
        width: isLargeScreen ? "728px" : "300px",
        height: isLargeScreen ? "90px" : "250px",
        maxWidth: "100%", // Prevent overflow
        margin: "0 auto", // Center the ad
      }}
    />
  );
};

export default AdsterraIframeAd;
