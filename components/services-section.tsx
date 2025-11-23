
"use client";

import { motion } from "framer-motion";
import { ServicesCard } from "./services-card";
import Button from "./ui/button";
import { BsFillLaptopFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { FaMobileScreenButton, FaPalette } from "react-icons/fa6";

const services = [
  {
    id: 1,
    icon: <BsFillLaptopFill className="icon" />,
    title: "Web Design & Development",
    description:
      "We design and develop clean, modern, engaging and search engine-friendly websites using popular CMS like WordPress, etc.",
  },
  {
    id: 2,
    icon: <FaStore className="icon" />,
    title: "E-commerce Development",
    description:
      "We develop online stores using today's most popular platforms like BigCommerce, WooCommerce, Magento and Shopify.",
  },
  {
    id: 3,
    icon: <FaMobileScreenButton className="icon" />,
    title: "Mobile App Development",
    description:
      "We create high quality and high performance mobile apps using today's most popular technologies such as React Native and Flutter.",
  },
  {
    id: 4,
    icon: <FaPalette className="icon"/>,
    title: "UI/UX Design & Branding",
    description:
      "We create beautiful and engaging UI/UX designs and branding that provide better user experience and deliver tangible business results.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative px-4 py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Button text="Our Services" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl max-w-2xl mx-auto md:text-[44.5px]  font-extrabold text-[#937C39] mb-8 leading-tight"
          >
            We offer practical and cost-effective solutions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-[#6b7280] max-w-3xl mx-auto leading-relaxed"
          >
            Angelsoft Solutions offers a wide range of IT services from UI/UX
            design, web and mobile applications development, staff augmentation,
            back-office support, and cloud hosting/deployment services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServicesCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
