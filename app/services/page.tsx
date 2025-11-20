"use client";

import React from 'react';
import Image from 'next/image';
import ServiceCard from '@/components/servicecard';
import { motion } from "framer-motion";
import HeroTitle from "@/components/hero-title";
import Button from "@/components/ui/button";
const ServicesPage = () => {
  const services = [
    {
      image: "/icons/icon-1.png",
      title: "Web Design & Development",
      description: "We design and develop modern, clean, engaging, user-friendly and SEO-friendly websites using popular CMS like WordPress, Joomla, Drupal, and Umbraco. We also develop custom websites and REST APIs."
    },
    {
      image: "/icons/icon-2.png",
      title: "E-commerce Development",
      description: "We develop online stores using today's most popular platforms like BigCommerce, WooCommerce, Magento, Shopify and Prestashop. We also develop custom e-commerce sites and apps."
    },
    {
      image: "/icons/icon-3.png",
      title: "Mobile App Development",
      description: "We develop high quality and high performance mobile apps using today's most popular technologies such as React Native and Flutter. We can also deploy your apps to the app stores."
    },
    {
      image: "/icons/icon-4.png",
      title: "Corporation Branding",
      description: "We conceptualize strategies that effectively promote your brand. We can design your brand's logo, letterhead, and calling cards. We can also help you outline your company value, mission and vision."
    },
    {
      image: "/icons/icon-5.png",
      title: "Recruitment Outsourcing",
      description: "Reduce costs by letting us handle your recruitment process. Our recruitment team has broad connections and technical knowledge to find the perfect candidates for your requirement."
    },
    {
      image: "/icons/icon-5.png",
      title: "Staff Augmentation",
      description: "Looking for temporary staff to quickly fill short-term job positions within your company? We have a pool of developers who are skilled and experienced in today's most popular technologies."
    },
    {
      image: "/icons/icon-8.png",
      title: "UI/UX Design",
      description: "We create beautiful and engaging UI/UX designs that provide better experience to your users, and deliver tangible business results."
    },
    {
      image: "/icons/icon-8.png",
      title: "Business Planning",
      description: "We provide business planning services by helping you define your business goals, conducting market research, identifying resources, and developing strategies."
    },
    {
      image: "/icons/icon-9.png",
      title: "Enterprise Analysis",
      description: "We can help you identify business opportunities, develop and maintain a business architecture, and determine optimum project investments."
    },
    {
      image: "/icons/icon-10.png",
      title: "Translation Services",
      description: "We can translate from English to Chinese, Russian, Spanish, Romanian, Portuguese, Filipino, Korean, Japanese and vice versa."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      
       <HeroTitle
  title="Services"
  leftText="Home"
  rightText="Services"
/>

        {/* Services Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto ">
            {/* Section Header */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                scaleY: [1, 1.1, 0.9, 1.05, 1],
                scaleX: [1, 0.95, 1.05, 0.98, 1]
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.4, 0.6, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            >
              {/* Your content inside */}
              <Button text="Our Members" />
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 pointer-events-none"></div>
        <div className="fixed top-1/2 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 pointer-events-none"></div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default ServicesPage;