"use client"

import { useState } from "react"
import Slider from "react-slick"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const cards = [
  {
    id: "goal",
    title: "Goal Oriented",
    description:
      "We work closely with our clients to identify and keep track of their business objectives to ensure that everything is working towards the path to a clear ROI.",
    image: "/homepage/goalOriented.png",
  },
  {
    id: "synergy",
    title: "Strong Synergy",
    description: "We remain in contact with clients through channels that allow performance, transparency and accuracy, feasible with all time zones across the globe.",
    image: "/homepage/strongsygenry.png",
  },
  {
    id: "cost",
    title: "Cost Effective",
    description: "We have experts based in countries where the cost of living is cheaper, and thus we are able to provide more affordable services than most of our competitors.",
    image: "/homepage/cost.png",
  },
  {
    id: "creative",
    title: "Quality Driven",
    description: "We utilize quality control checklists and reguarly communicate with you throughout the development process to ensure that your project flows smoothly and efficiently.",
    image: "/homepage/creativeteam.png",
  },
 
]

export default function ProfessionalCards() {
  const [hovered, setHovered] = useState<string | null>(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  }

  return (
    <div className="w-full py-16 mt-[-10rem] relative bg-transparent z-40">
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id}>
              <div
                className="relative w-full h-[350px] group overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background Image */}
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#264b78] to-transparent" />

                <motion.div
                  className="absolute left-5 bottom-[50px] bg-white w-[300px] shadow-xl h-[60px] rounded-lg flex items-center justify-center z-50"
                  initial={{ opacity: 1, scale: 1, y: 0 }}
                  animate={{
                    opacity: hovered === card.id ? 0 : 1,
                    scale: hovered === card.id ? 0.95 : 1,
                    y: hovered === card.id ? 10 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <p className="text-[#937c39] text-xl font-semibold">{card.title}</p>
                </motion.div>

                <motion.div
                  className="absolute inset-3 m-4 bg-[#264b78]/95 backdrop-blur-sm px-6 py-6 rounded-2xl text-white flex flex-col justify-center items-center text-center z-30"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: hovered === card.id ? 0 : "100%",
                    opacity: hovered === card.id ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <motion.h3
                    className="text-xl font-bold mb-3 tracking-wide"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hovered === card.id ? 0 : 20,
                      opacity: hovered === card.id ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hovered === card.id ? 0 : 20,
                      opacity: hovered === card.id ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    {card.description}
                  </motion.p>

                  <motion.button
                    className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden group/btn"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hovered === card.id ? 0 : 20,
                      opacity: hovered === card.id ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />

                    <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <ArrowRight className="w-5 h-5 text-white relative z-10" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* FIX SPACING — SLICK OVERRIDE */}
      <style jsx global>{`
        .slick-slide > div {
          margin: 0 10px !important;
        }
        .slick-list {
          margin: 0 -10px !important;
        }
      `}</style>
    </div>
  )
}
