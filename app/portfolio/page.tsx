'use client';

import { useState, MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroTitle from "@/components/hero-title";
import Button from "@/components/ui/button";
import {PrtfollioButton , buttonVariants} from "@/components/ui/Portfollio-button";

interface Bubble {
  x: number;
  y: number;
  id: number;
  size: number;
}

interface Category {
  id: string;
  label: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
 
  const categories: Category[] = [
    { id: "all", label: "All" },
    { id: "game", label: "Game Character Design" },
    { id: "mobile", label: "Mobile App Development" },
    { id: "seo", label: "Search Engine Optimization" },
    { id: "social", label: "Social Media Marketing" },
    { id: "web", label: "Web Design & Development" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
  
      <HeroTitle
  title="Portfolio"
  leftText="Home"
  rightText="Portfolio"
/>

      {/* Main Content */}
      <main className="flex-1 bg-[#f7f7f7] py-20 relative">
        {/* Left Decorative Shape */}
        <div className="absolute left-20 top-16">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/homepage/shape_13.svg" width={150} height={150} alt="shape" />
          </motion.div>
        </div>

        {/* Right Decorative Shape */}
        <motion.div
          className="absolute right-20 top-5 w-40 h-40 rounded-full opacity-20 flex justify-center items-center"
          animate={{ y: ["0px", "-20px", "0px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/homepage/shape_14.svg" width={150} height={150} alt="shape" />
        </motion.div>

        {/* Decorative Squiggle */}
        <div className="absolute right-32 top-1/2 opacity-20">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <path
              d="M10 75 Q 40 20, 75 50 T 140 75"
              stroke="#b8975a"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
           <Button text="Case Studies" />
            <h2 className="text-4xl font-bold mb-2 text-[#937c39]">Specialist Business Cases</h2>
            <h3 className="text-4xl font-bold text-[#2c4a6f]">Our Projects</h3>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((category) => (
              <PrtfollioButton
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative overflow-hidden px-6 py-2 rounded-full transition-all duration-300 group
                  ${activeCategory === category.id ? "bg-[#2c4a6f] text-white" : "bg-white text-[#b8975a] border border-gray-200"}
                `}
              >
               
                <span
                  className={`
                    absolute inset-0 bg-[#2c4a6f] transform
                    ${activeCategory !== category.id ? "translate-y-full group-hover:translate-y-0" : "translate-y-0"}
                    transition-transform duration-300 ease-out
                  `}
                ></span>

                <span
                  className={`
                    relative z-10 transition-colors duration-300
                    ${activeCategory !== category.id ? "group-hover:text-white" : ""}
                  `}
                >
                  {category.label}
                </span>
              </PrtfollioButton>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"></div>
        </div>
      </main>
    </div>
  );
}
