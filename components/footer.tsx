"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import dynamic from "next/dynamic";

const Wave = dynamic(() => import("react-wavify"), { ssr: false });

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const socialIconVariants: Variants = {
  hover: { scale: 1.15, y: -4, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
  tap: { scale: 0.98 },
};

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative bg-[#0f172a] text-white">
      {mounted && (
        <div className="absolute top-0 left-0 right-0 w-full -translate-y-full">
          <Wave
            fill="#0f172a"
            paused={false}
            style={{
              display: "block",
              width: "100%",
              height: "80px",
            }}
            options={{
              height: 20,
              amplitude: 25,
              speed: 0.3,
              points: 3,
            }}
          />
        </div>
      )}
      <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] rounded-full border border-slate-700/30 z-0" />
      <div className="absolute bottom-[20%] left-[5%] md:w-[400px]  md:h-[400px] sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] rounded-full border border-slate-700/30 z-0" />
      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 pt-24 z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-3 text-white">About Us</h3>
            <div className="flex gap-1 mb-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1.5 h-0.5 bg-[#264B78]" />
              ))}
            </div>

            <h3 className="text-2xl font-extrabold mb-2 leading-tight">
              Ready To Start <span className="text-white font-extrabold">Work</span>
            </h3>
            <h3 className="text-2xl font-extrabold mb-6 leading-tight">With Us?</h3>

            <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-[280px]">
              Send us a message describing your ideas or project, and we&apos;ll
              get back to you with a quote as soon as possible.
            </p>

            <motion.button
              className="px-8 py-3.5 bg-[#264b78] hover:bg-[#293646] text-white rounded-full font-medium text-[15px] shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get a Quote
            </motion.button>

            <motion.div
              className="flex gap-3 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                {
                  Icon: () => (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-11 h-11 bg-[#475569] hover:text-[#475569] hover:bg-[#fff] rounded-full flex items-center justify-center transition-colors duration-200"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <div className="flex gap-1 mb-8">
              {[...Array(8)].map((_, i) => (
                 <div key={i} className="w-1.5 h-0.5 bg-[#264B78]" />
              ))}
            </div>

            <ul className="space-y-4">
              {[
                "About Us",
                "Our Services",
                "Our Portfolio",
                "Careers Page",
              ].map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-[15px]"
                  >
                    <span className="w-2 h-2 rotate-45 transition delay-150 group-hover:rotate-0 bg-[#264B78]/40" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Our Services
            </h3>
            <div className="flex gap-1 mb-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1.5 h-0.5 bg-[#264B78]" />
              ))}
            </div>

            <ul className="space-y-4 " >
              {[
                "Web Design/Development",
                "E-commerce Development",
                "Mobile App Development",
                "UI/UX Design / Branding",
                "Staff Augmentation",
              ].map((service, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-slate-400 hover:underline hover:text-white transition-colors group duration-200 transition delay-150 flex items-center gap-2 text-[15px]"
                  >
                    <span className="w-2 h-2 rotate-45 transition delay-150 group-hover:rotate-0 bg-[#264B78]/40" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Operating Hours
            </h3>
            <div className="flex gap-1 mb-8">
              {[...Array(8)].map((_, i) => (
                 <div key={i} className="w-1.5 h-0.5 bg-[#264B78]" />
              ))}
            </div>

            <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-[15px]">Week Days</span>
                  <span className="text-white font-medium text-[15px]">
                    09:00 - 18:00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-[15px]">Saturday</span>
                  <span className="text-white font-medium text-[15px]">
                    09:00 - 12:00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-[15px]">Sunday</span>
                  <span className="text-white font-medium text-[15px]">
                    Day Off
                  </span>
                </div>
              </div>

              <motion.button
                className="w-full px-6 py-3.5 bg-[#264b78] hover:bg-[#1c2531] text-white rounded-full font-medium text-[15px] shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact us
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#264b78] hover:bg-[#2563eb] rounded-full flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
      <motion.div
        className="border-t border-slate-800"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />{" "}
      <motion.div
        className="text-center text-slate-400 text-sm py-10 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {" "}
        <p>Copyright © 2025 Angelsoft Solutions</p>{" "}
      </motion.div>
    </div>
  );
};

export default Footer;
