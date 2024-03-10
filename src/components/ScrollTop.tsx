import React, { useState, useEffect } from "react";
import { PiArrowLineUpBold } from "react-icons/pi";
import useDarkModeStore from "../zustand/useDarkModeStore";

const ScrollTop = () => {
  const { darkMode } = useDarkModeStore();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="scroll-top"
      style={{
        display: showButton ? "block" : "none",
      }}
    >
      <button
        onClick={handleScrollTop}
        style={{
          backgroundColor: darkMode ? "#32343a" : "",
        }}
      >
        <PiArrowLineUpBold />
      </button>
    </div>
  );
};

export default ScrollTop;
