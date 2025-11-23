"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { IoMailOpen } from "react-icons/io5";
import { ImMap } from "react-icons/im";
import { FaMobile } from "react-icons/fa6";




export default function ContactSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cards = [
    {
      icon: <ImMap />,
      title: "Office Location",
      lines: ["Clark, Pampanga, Philippines", "Manhattan, New York, USA"],
    },
    {
      icon: <IoMailOpen />,
      title: "Company Email",
      lines: ["contact@angelsoft.io", "angelsoftph@gmail.com"],
    },
    {
      icon: <FaMobile />,
      title: "Contact Us",
      lines: ["+1-646-752-4410", "+63-947-276-8475 / (045) 963-6958"],
    },
  ];

  return (
    <section className="py-20 bg-[#ececec] relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <Button text="Get In Touch" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#b8975a]">
            Have a Project in Mind?
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold text-[#2c4a6f]">
            Let&apos;s Connect
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white group  rounded-xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.05)] flex flex-col items-center text-center hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div
                className="w-20 h-20 mb-6 rounded-full bg-[#eef0f2] flex items-center justify-center 
                group-hover:bg-[#937c39] transition-all duration-300 transform origin-center 
                group-hover:scale-110"
              >
                <div className="w-10 h-10 text-[#2c4a6f] group-hover:text-white fill-[#2c4a6f] transition-colors duration-300 text-3xl flex items-center justify-center">
                  {card.icon}
                </div>
              </div>

              <h4 className="text-2xl font-extrabold text-[#b8975a] mb-4">
                {card.title}
              </h4>

              <div className="space-y-2">
                {card.lines.map((line, i) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        {/* <Button
          onClick={scrollToTop}
          className="rounded-full w-12 h-12 bg-white hover:bg-gray-50 text-[#2c4a6f] border-2 border-[#2c4a6f] shadow-lg p-0 flex items-center justify-center group"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </Button> */}
      </motion.div>
    </section>
  );
}
