import React, { useEffect, useState } from "react";

import { animateScroll as scroll } from "react-scroll";

import { FaChevronUp } from "react-icons/fa";

const BackToTopBtn = ({ firstState, secondState }) => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });
  return (
    <div className={firstState ? "invisible" : "visible"}>
      {show && (
        <button
          onClick={scrollToTop}
          className="flex justify-center items-center bg-primary-hover shadow-xl opacity-50 hover:opacity-100
        text-white w-12 h-12 fixed z-0 right-8 transition-all duration-500
        bottom-16 lg:bottom-8 rounded-sm cursor-pointer text-sm"
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
