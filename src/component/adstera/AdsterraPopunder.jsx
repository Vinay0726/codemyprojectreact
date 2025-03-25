import React, { useEffect } from "react";

const AdsterraPopunder = () => {
  useEffect(() => {
    const scriptSrc =
      "//pl26209666.effectiveratecpm.com/2b/1d/bf/2b1dbf2c735ac4214a03cb5294c3bd3a.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = scriptSrc;
      script.async = true;

      // Append to document.body since no UI container is needed
      document.body.appendChild(script);

      // Cleanup
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return null; // No visible UI needed for popunder
};

export default AdsterraPopunder;
