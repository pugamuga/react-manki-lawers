import React, { useEffect, useState } from "react";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

import Logo from "../assets/ape_gif.gif";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <header
      className={`${bg && "bg-white shadow-md py-4"} 
  p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >
      <div className=" container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
            <img src={Logo} alt="logo" className="object-cover object-left h-16 w-16 "/>
            <h1 className=" ml-2 font-primary text-2xl">Manki Lawers</h1>
        </a>
        <Nav/>
        <NavMobile/>
      </div>
    </header>
  );
};

export default Header;
