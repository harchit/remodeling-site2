"use client";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PixelTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // If it's the very first page load, index.html already fired the PageView event.
    // We skip this call to avoid registering duplicate PageViews.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname, location.search]);

  return null;
};

export default PixelTracker;