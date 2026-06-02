"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      // Fire the page view event every time the pathname or search parameters change
      window.fbq("track", "PageView");
    }
  }, [location.pathname, location.search]);

  return null;
};

export default PixelTracker;