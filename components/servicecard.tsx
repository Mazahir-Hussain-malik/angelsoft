"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  image: ReactNode;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({
  image,
  title,
  description,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-[#4b4b4b] rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center -z-0"></div>

      <div className="relative z-10">
        <div className="w-20 h-20 rounded-full  flex items-center justify-center mb-6  transition-colors duration-500">
          <motion.div
            className="absolute w-24 h-14 bg-gray-200/50 group-hover:bg-gray-200/10 rounded-full top-5 left-4"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative w-10 h-10 text-[#264B78] text-6xl">
            {image}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-[#937C39] mb-4 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#666666] text-[15px] leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
