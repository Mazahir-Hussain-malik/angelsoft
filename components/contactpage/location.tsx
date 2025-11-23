"use client";
import { motion } from "framer-motion";
import type React from "react";

import { useState } from "react";

export default function Location() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map Section */}
          <div className="w-full h-[500px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.959895897937!2d120.5736!3d15.1869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2f3bdbfb1c3%3A0x8e0f6c6c6c6c6c6c!2sClark%20Marriott%20Hotel!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Contact Form Section */}
          <div className="w-full">
            <motion.div
              animate={{
                y: [0, -20, 0],
                scaleY: [1, 1.1, 0.9, 1.05, 1],
                scaleX: [1, 0.95, 1.05, 0.98, 1],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.4, 0.6, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              <div className=" mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                <span className="inline-block bg-white shadow-lg text-[#264B78] px-3 sm:px-12 py-1.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                  Got Inquiries?
                </span>
              </div>
            </motion.div>
            <h1 className="text-[#B8934F] text-5xl lg:text-6xl font-extrabold mb-6">
              Talk To Us
            </h1>
            <p className="text-[#6B6B6B] text-base lg:text-lg mb-8 leading-relaxed">
              Use the form below to send us a message. We will get back to you
              as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-md text-[#333333] placeholder:text-[#AAAAAA] focus:outline-none focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-md text-[#333333] placeholder:text-[#AAAAAA] focus:outline-none focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-md text-[#333333] placeholder:text-[#AAAAAA] focus:outline-none focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-md text-[#333333] placeholder:text-[#AAAAAA] focus:outline-none focus:border-transparent transition-all"
                />
              </div>

              <textarea
                placeholder="Leave A Comment"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                rows={6}
                className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-md text-[#333333] placeholder:text-[#AAAAAA] focus:outline-none  focus:border-transparent resize-none transition-all"
              />

              <button
                type="submit"
                className="bg-[#3B5F8F] hover:bg-[#2E4D73] text-white font-semibold px-12 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
