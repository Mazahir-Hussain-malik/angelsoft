"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface PreloaderProps {
  onClose?: () => void
}

export function Preloader({ onClose }: PreloaderProps) {
  const text = "ANGELSOFTSOLUTIONS"
  const letters = text.split("")

  const strokeIndices = [4, 5, 6, 7, 8] 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "#264b78" }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
        aria-label="Close preloader"
      >
        <X className="w-5 h-5 md:w-6 md:h-6 text-gray-800" strokeWidth={2} />
      </button>

      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16 px-4">
        {/* Animated Circle Loader */}
        <motion.div
          className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <motion.circle
              cx="80"
              cy="80"
              r="75"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{
                pathLength: [0, 0.85, 0],
                rotate: 360,
              }}
              transition={{
                pathLength: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          </svg>
        </motion.div>

        {/* WAVE TEXT ANIMATION */}
        <motion.div className="text-center overflow-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider flex flex-wrap items-center justify-center leading-tight">
            {letters.map((letter, index) => {
              const isStroke = strokeIndices.includes(index)

              return (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -12, 0], // 🌊 Wave motion
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: index * 0.08,
                    repeat: Infinity,
                  }}
                  style={{
                    color: isStroke ? "transparent" : "white",
                    WebkitTextStroke: isStroke ? "2px white" : "none",
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                  }}
                >
                  {letter}
                </motion.span>
              )
            })}
          </h1>
        </motion.div>
      </div>
    </motion.div>
  )
}
