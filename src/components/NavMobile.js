import React, { useState } from "react";

import BarsIcon from "../assets/img/bars.png";
import CloseIcon from "../assets/img/close.png";

import { navigation } from "../data.js";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="lg:hidden relative z-20">
      <button onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt="close" />
      </button>
      <ul
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-slate-700 fixed top-0 w-full h-screen
        text-white transition-all duration-500 flex flex-col justify-center items-center
         space-y-8 text-lg`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className=" absolute top-6 left-6"
        >
          <img src={CloseIcon} alt="close" />
        </button>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                offset={-200}
                className=" cursor-pointer hover:text-accent-hover transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
