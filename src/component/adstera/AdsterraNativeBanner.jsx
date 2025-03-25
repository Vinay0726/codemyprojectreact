import React, { useEffect, useRef } from "react";
import "./AdsterraNativeBanner.css"; // Optional CSS file for additional styling

const AdsterraNativeBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const scriptSrc =
      "//pl26209956.effectiveratecpm.com/ba5241d01f7d2aaf4b592ec37a1a0cab/invoke.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = scriptSrc;

      if (adRef.current) {
        adRef.current.appendChild(script);
      }

      return () => {
        if (adRef.current && script.parentNode === adRef.current) {
          adRef.current.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div
      ref={adRef}
      id="container-ba5241d01f7d2aaf4b592ec37a1a0cab"
      className="native-banner"
      style={{
        maxWidth: "100%", // Fit within any screen size
        margin: "0 auto", // Center the ad
        overflow: "hidden", // Prevent overflow
      }}
    />
  );
};

export default AdsterraNativeBanner;
