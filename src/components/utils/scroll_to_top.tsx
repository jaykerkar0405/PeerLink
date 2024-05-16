"use client";

// React's Hook Imports
import { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [is_visible, set_is_visible] = useState(false);

  const handle_scroll_to_top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handle_scroll_to_top_visibility = () => {
    if (window.scrollY > 300) {
      set_is_visible(true);
    } else {
      set_is_visible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handle_scroll_to_top_visibility);

    return () => {
      window.removeEventListener("scroll", handle_scroll_to_top_visibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[999] ${
        is_visible ? "visible" : "invisible"
      }`}
    >
      <div
        aria-label="Scroll To Top"
        onClick={handle_scroll_to_top}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-primary-hover"
      >
        <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
      </div>
    </div>
  );
};

export default ScrollToTop;
