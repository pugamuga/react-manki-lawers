import React from "react";

import { navigation } from "../data.js";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className=" lg:flex space-x-6 font-body font-semibold text-lg text-primary">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                offset={-120}
                activeClass="active"
                smooth={true}
                spy="try"
                className="cursor-pointer hover:text-accent-hover transition-all duration-300"
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

export default Nav;
