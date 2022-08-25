import React, { useState } from "react";
import Appointment from "./Appointment";
import Header from "./Header";

import LaywerImage from "../assets/img/lawyer_banner.png";
import LaywerImageHDR from "../assets/img/lawyer_banner_hdr.png";

const Banner = () => {
  const [mankiClick, setMankiClick] = useState(false);
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800  bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
    >
      <Header />
      <div className=" container mx-auto h-full lg:flex pt-32">
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
          <h1
            className=" font-primary font-black text-6xl 
            lg:text-7xl text-primary 
            mb-4 lg:mt-[70px] leading-[60px] lg:leading-[80px]"
          >
            Your problem <br />
            <span
              className=" text-accent text-5xl 
            lg:text-6xl "
            >
              it's your
              <br /> <span className="lg:hidden">🐵</span>problem🐵
            </span>
          </h1>
          <p className=" max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nulla illo perferendis amet dolores nostrum aut quae consequuntur
            iusto nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio at ex, ipsam aliquid aut in enim ratione excepturi. Beatae,
            fugiat.
          </p>
          <div className=" lg:absolute mx-auto max-w-[445px] lg:mx-0">
            <img
              src={LaywerImageHDR}
              onClick={() => setMankiClick(!mankiClick)}
              alt="small ape"
              className={`${
                mankiClick ? "w-[270px] " : "w-[200px] "
              }lg:hidden mx-auto transition-all ease-in-out duration-700`}
            />
            <Appointment />
          </div>
        </div>
        <div className="hidden flex-1 lg:flex  lg:flex-col items-end">
          <img
            src={LaywerImageHDR}
            alt="banner"
            className="w-[500px] drop-shadow-2xl mt-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
