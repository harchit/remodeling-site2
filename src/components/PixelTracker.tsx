"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      console.log("Fired Meta Pixel 'PageView' event for route: " + location.pathname);
      window.fbq("track", "PageView");
    } else {
      console.warn("Meta Pixel (fbq) is not initialized on this page yet.");
    }
  }, [location.pathname, location.search]);

  return null;
};

export default PixelTracker;