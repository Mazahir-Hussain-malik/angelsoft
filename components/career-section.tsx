"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function CareerSection() {
  return (
    <section className="relative bg-gradient-to-b py-20 from-gray-50 to-white overflow-hidden">
      <div className=" mx-auto px-4 max-w-7xl relative z-10  mb-12  ">
        {/* bg svg  */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              animate={{
                y: [0, -20, 0],
                scaleY: [1, 1.1, 0.9, 1.05, 1],
                scaleX: [1, 0.95, 1.05, 0.98, 1],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.4, 0.6, 0.8, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              <div className=" mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                <span className=" bg-white shadow-lg text-[#264B78] sm:w-[150px] flex justify-center items-center h-[40px] text-center rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                  Career
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-[44.5px] font-extrabold text-[#937C39] leading-tight">
                Looking for a New Career?
              </h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-[#264b78] leading-tight">Join Us</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#264b78] hover:bg-[#1e3347] text-white px-8 py-4 rounded-full text-base font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
                See Open Position
              </button>
            </div>
          </div>

          {/* Right Images - Two overlapping photos on desktop, stacked on mobile */}
          <div className="lg:relative h-auto lg:h-[500px] w-full flex flex-col lg:flex-row gap-0">
            {/* Decorative curly line - positioned above images */}
            <div className="hidden lg:block absolute -top-12 -left-12 w-48 h-48 opacity-30 z-0">
              <svg viewBox="0 0 200 150" className="w-full h-full">
                <path
                  d="M10,75 Q50,20 100,40 T190,75"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M10,105 Q50,50 100,70 T190,105"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Image 1: Man with headphones */}
            <div className="lg:absolute lg:top-0 lg:left-0 w-full lg:w-[65%] h-[300px] lg:h-[85%] lg:z-10 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/chooseus2.png"
                alt="Team member with headphones"
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>

            {/* Image 2: Woman with laptop */}
            <div className="lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-[65%] h-auto lg:h-[85%] lg:z-20 rounded-2xl overflow-hidden shadow-2xl lg:border-8 border-white">
              <Image
                src="/chooseus1.png"
                alt="Team member working on laptop"
                className="w-full h-full object-cover"
                width={180}
                height={180}
              />
            </div>
          </div>
        </div>

        {/* Decorative dot pattern - top left */}
        <div className="absolute left-2 top-1/4 -z-10 grid grid-cols-9 gap-1.5  ">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image src="/homepage/shape_13.svg" width={300} height={300} alt="shape" />
          </motion.div>
        </div>

        {/* Decorative curved line - top right */}
        <div className="absolute right-20 top-8 w-64 h-48 opacity-30">
          <svg viewBox="0 0 200 150" className="w-full h-full">
            <path d="M10,75 Q50,20 100,40 T190,75" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Decorative dot pattern - bottom right */}
        <div className="absolute right-8 bottom-32 grid grid-cols-9 gap-1.5 opacity-40">
          {Array.from({ length: 81 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          ))}
        </div>

        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 -z-10 right-0 h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="#f9fafb"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="900"
          viewBox="0 0 1920 900"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Wavy bottom shape"
        >
          <rect width="100%" height="100%" fill="#f7f7f7" />

          <path
            d="
        M0 900
        L0 670
        C140 630 320 610 480 610
        C640 610 760 650 920 650
        C1080 650 1160 610 1320 610
        C1480 610 1620 630 1760 650
        C1840 662 1900 675 1920 682
        L1920 900
        Z
      "
            fill="#ffffff"
            stroke="none"
          />
        </svg>
      </div>
    </section>
  )
}
