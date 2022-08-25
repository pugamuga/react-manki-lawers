import React from "react";
import { socials } from "../data.js";
import MankiPhone from "../assets/img/ape-phone.png"

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary mb-4">Contact us</h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          necessitatibus eos dolores laborum amet at ducimus fugit consectetur.
          Dolor, nemo.
        </p>
        <img src={MankiPhone} alt="manki-phone" className="mx-auto -mb-[6px] lg:-mb-2 drop-shadow-2xl lg:w-[350px] w-[250px]"/>
        <form className=" px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]">
            <input type="text" placeholder="Full name" className="form-control"/>
            <input type="email" placeholder="Email address" className="form-control"/>
            <textarea className="textarea" placeholder="Message"></textarea>
            <button className="btn bg-accent hover:bg-accent-hover transition-all">Send message</button>
        </form>
        <div className="flex items-center justify-between max-w-[200px] mx-auto">
            {socials.map((item, index)=>{
                return (
                    <a href="#" key={index}>
                        <img src={item.icon} alt="icon" />
                    </a>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
