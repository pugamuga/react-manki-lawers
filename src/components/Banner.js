import React from "react";
import Appointment from "./Appointment";
import Header from "./Header";

const Banner = () => {
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
            mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]"
          >
            Your problem <br />
            <span className=" text-accent"> Our Goal.</span>
          </h1>
          <p className=" max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nulla illo perferendis amet dolores nostrum aut quae consequuntur
            iusto nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio at ex, ipsam aliquid aut in enim ratione excepturi. Beatae,
            fugiat.
          </p>
          <Appointment/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
