"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        scaleY: [1, 1.1, 0.9, 1.05, 1],
        scaleX: [1, 0.95, 1.05, 0.98, 1],
      }}
      transition={{
        duration: 1.5,
        times: [0, 0.4, 0.6, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
    >
      <div className="text-center mb-4 sm:mb-4 md:mb-5 lg:mb-6">
        <span className="inline-block bg-white shadow-lg text-[#264B78] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
          {text}
        </span>
      </div>
    </motion.div>
  );
};

export default Button;
