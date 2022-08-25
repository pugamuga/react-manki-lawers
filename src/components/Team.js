import React from "react";
import { team } from "../data.js";

const Team = () => {
  return (
    <section id="team" className="section">
      <div className=" container mx-auto text-center">
        <h2 className="text-5xl font-primary mb-8">Our Attourneys</h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe
          hic dolore expedita, cumque soluta quibusdam minima nesciunt aperiam
          voluptatum?
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px]">
          {team.map((item, index) => {
            const { image, name, position, description } = item;
            return (
              <div className=" text-center lg:text-left mb-12 " key={index}>
                <img
                  src={image}
                  alt="img"
                  className="mx-auto lg:mx-0 mb-6 rounded-md object-scale-down h-48 w-88"
                />
                <h4 className="text-2xl font-primary mb-2 ">{name}</h4>
                <p className=" text-sm mb-4 tracking-[0.3px] opacity-80">
                  {position}
                </p>
                <p className="max-w-[332px] mx-auto lg:mx-0 lg:max-w-[350px]">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
