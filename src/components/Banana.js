import banana from "../assets/banana.png";
import { motion } from "framer-motion";
import { useState } from "react";

function Banana() {
  return (
    <div className="fixed z-30  left-0 top-0">
      <div>
        <motion.img
          src={banana}
          alt="banana"
          className="w-12"
          animate={{
            y: [-100, 1000],
            rotate: [0, 360],
            x: [
              Math.floor(Math.random() * 350),
              Math.floor(Math.random() * 350),
            ],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
}

export default Banana;
