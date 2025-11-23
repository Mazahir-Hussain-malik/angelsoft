"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";


interface OfficeCardProps {
  title: string
  location: string
  phone: string
  index: number
}

function OfficeCard({ title, location, phone, index }: OfficeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative  overflow-hidden group "
    >
      <div className="relative bg-white shadow-[0_0_4rem_rgba(0,0,0,0.1)] border-b-4 border-[#264b78] p-12 min-h-[240px] flex flex-col items-center justify-center text-center transition-all duration-300">
        <div className="absolute inset-0 bg-[#264b78] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out " />

        <div className=" text-[120px] text-[#b8975a] opacity-10 absolute group-hover:hidden">
            <BsFillLightbulbFill />
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#b8975a] group-hover:text-white transition-colors duration-500">
            {title}
          </h3>

          <p className="text-gray-600 text-lg mb-3 group-hover:text-white transition-colors duration-500">{location}</p>

          <p className="text-gray-600 text-lg group-hover:text-white transition-colors duration-500">{phone}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function OfficeLocations() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const offices = [
    {
      title: "Clark Office",
      location: "Clark, Pampanga, Philippines",
      phone: "+63 (045) 963 6958",
    },
    {
      title: "London Office",
      location: "London, United Kingdom",
      phone: "+44 7873 651031",
    },
    {
      title: "New York Office",
      location: "Manhattan, New York, US",
      phone: "+1 646 752 4410",
    },
    {
      title: "Abeokuta Office",
      location: "Abeokuta, Ogun, Nigeria",
      phone: "+2349068659872",
    },
    {
      title: "Buenos Aires Office",
      location: "Buenos Aires, Argentina",
      phone: "+54 9 11 2274 1582",
    },
  ]

  return (
    <section className="py-20  bg-[#ececec] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offices.map((office, index) => (
            <OfficeCard key={index} {...office} index={index} />
          ))}
        </div>
      </div>

     
       
    </section>
  )
}
