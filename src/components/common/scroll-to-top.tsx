"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check the scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top float ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
