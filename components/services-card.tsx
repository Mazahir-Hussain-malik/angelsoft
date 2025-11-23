"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface ServicesCardProps {
  service: {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
  };
  index: number;
}

export function ServicesCard({ service, index }: ServicesCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImages: Record<number, string> = {
    1: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/cost.png")',
    2: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/goalOriented.png")',
    3: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/qualitydriven.png")',
    4: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/strongsygenry.png")',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full rounded-lg overflow-hidden group cursor-pointer"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: backgroundImages[service.id],
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div
          className="absolute inset-0 bg-black transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.6 : 0 } }
        />
      </motion.div>

      <div
        className="absolute inset-0  rounded-lg transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div
        className="relative bg-white rounded-lg p-3 transition-all duration-500 h-full flex flex-col"
        style={{
          backgroundColor: isHovered ? "transparent" : "white",
        }}
      >
        <div className="border-2 border-dashed rounded-lg border-[rgba(255,255,255,0.5)] p-8">
          {/* Icon */}
          <div className="mb-6">
            <motion.div className="w-16 h-16  rounded-full flex items-center justify-center transition-all duration-500">
          <motion.div
            className="absolute w-20 h-14 bg-gray-200/50 group-hover:bg-gray-200/10 rounded-full top-1/8 left-1/7"
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
              <div className="text-3xl icon-wrapper  transition-all duration-500 ">
                {service.icon}
              </div>
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className="text-[22px] font-extrabold mb-4 transition-colors duration-500"
            style={{ color: isHovered ? "#fff" : "#9b8b47" }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6 flex-grow transition-colors duration-500"
            style={{
              color: isHovered ? "rgba(255, 255, 255, 0.85)" : "#6b7280",
            }}
          >
            {service.description}
          </p>

          {/* Read More */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <button
              className="font-semibold text-sm transition-colors duration-500 cursor-pointer"
              style={{ color: isHovered ? "white" : "#9b8b47" }}
            >
              Read more
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
