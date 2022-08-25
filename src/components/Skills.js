import React from "react";
import { skills } from "../data.js";

const Skills = () => {
  return (
    <section id="skills" className="section bg-[#f8f3eca1] pb-32">
      <div className="container mx-auto text-center">
        <h2 className=" text-5xl font-primary mb-4">What we do</h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut
          asperiores sit porro optio facilis libero consequuntur tempora
          voluptas perferendis.
        </p>
        <div className="lg:grid lg:grid-cols-3 gap-12">
          {skills.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div
                key={index}
                className=" flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0"
              >
                <img src={icon} alt="icon" className="mb-6" />
                <h4 className="text-2xl font-primary mb-2">{title}</h4>
                <p className="max-w-[332px] lg:max-w-[350px]">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
