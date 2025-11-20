'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Music } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const linkHoverVariants = {
    hover: { 
      x: 8,
      color: '#60A5FA',
      transition: { duration: 0.2 }
    },
  }

  const socialIconVariants = {
    hover: { 
      scale: 1.15,
      y: -4,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 },
  }

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
    },
    tap: { scale: 0.98 },
  }

  const dashedLineVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-30"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Ready To Start <span className="font-bold">Work</span></h3>
            <h3 className="text-2xl font-bold mb-6">With Us?</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Send us a message describing your ideas or project, and we'll get back to you with a quote as soon as possible.
            </p>
            <motion.button
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get a Quote
            </motion.button>

            <motion.div
              className="flex gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Music, label: 'Behance' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative mb-6">
              <h3 className="relative text-xl font-bold mb-3 ">Quick Links</h3>
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-transparent w-[72px]"
                style={{ backgroundImage: 'repeating-linear-gradient(to right, #3B82F6 0px, #3B82F6 8px, transparent 8px, transparent 16px)' }}
                variants={dashedLineVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              />
            </div>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Our Portfolio', 'Careers Page'].map((item) => (
                <motion.li key={item}>
                  <motion.a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative mb-6">
              <h3 className="text-xl font-bold mb-3">Our Services</h3>
               <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-transparent w-[72px]"
                style={{ backgroundImage: 'repeating-linear-gradient(to right, #3B82F6 0px, #3B82F6 8px, transparent 8px, transparent 16px)' }}
                variants={dashedLineVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              />
            </div>
            <ul className="space-y-3">
              {['Web Design/Development', 'E-commerce Development', 'Mobile App Development', 'UI/UX Design / Branding', 'Staff Augmentation'].map((item) => (
                <motion.li key={item}>
                  <motion.a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative mb-6">
              <h3 className="text-xl font-bold mb-3">Operating Hours</h3>
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-transparent w-[72px]"
                style={{ backgroundImage: 'repeating-linear-gradient(to right, #3B82F6 0px, #3B82F6 8px, transparent 8px, transparent 16px)' }}
                variants={dashedLineVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              />
            </div>
            <ul className="space-y-4 text-sm">
              <motion.li
                variants={itemVariants}
                className="flex justify-between text-slate-400"
              >
                <span>Week Days</span>
                <span className="text-white font-medium">09:00 - 18:00</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex justify-between text-slate-400"
              >
                <span>Saturday</span>
                <span className="text-white font-medium">09:00 - 12:00</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex justify-between text-slate-400"
              >
                <span>Sunday</span>
                <span className="text-white font-medium">Day Off</span>
              </motion.li>
            </ul>

            <motion.button
              className="w-full mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-slate-800"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="text-center text-slate-400 text-sm pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>Copyright © 2025 Angelsoft Solutions</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer;
