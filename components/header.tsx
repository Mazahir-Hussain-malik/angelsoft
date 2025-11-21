"use client";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdHeadphones } from "react-icons/md";
import React, { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  to?: string;
}

// Reusable Icon Wrapper
function IconWrapper({ children, to = "#" }: IconWrapperProps) {
  return (
    <div
      className="group md:w-[30px] md:h-[30px] w-[20px] h-[20px]  rounded-full flex justify-center items-center
      bg-white/10 hover:bg-white transition-all duration-300 ease-out
      hover:shadow-[0px_0px_8px_rgba(255,255,255,0.6)] hover:scale-[1.15]
      cursor-pointer"
    >
      <a
        href={to}
        className="md:text-[14px] sm:text-[12px] text-[10px] text-white group-hover:text-[#264b78]
        transition-all duration-300 ease-out group-hover:scale-[1.20]"
      >
        {children}
      </a>
    </div>
  );
}

const social_icons = [
  { id: 1, icon: <FaFacebookF />, to: "#" },
  { id: 2, icon: <IoLogoGoogleplus />, to: "#" },
  { id: 3, icon: <FaTwitter />, to: "#" },
  { id: 4, icon: <FaLinkedinIn />, to: "#" },
  { id: 5, icon: <FaTiktok />, to: "#" },
];

export default function Header() {
  return (
    <div className="text-white py-2 px-6 absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 sm:text-xs text-[10px]">

        {/* Left Section - Social Icons */}
        <div className="flex items-center gap-4">
          <span className="font-medium text-white/80">Follow Us:</span>

          <div className="flex gap-[0.5rem]">
            {social_icons.map(({ id, icon, to }) => (
              <IconWrapper key={id} to={to}>
                {icon}
              </IconWrapper>
            ))}
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8">

          {/* Email */}
          <div className="sm:flex  hidden items-center md:gap-1.5">
            <IconWrapper>
              <IoMail className="text-[#264b78]" />
            </IconWrapper>
            <span className="whitespace-nowrap sm:block hidden text-white/90">
              Email: contact@angelsoft.io
            </span>
          </div>

          {/* Phone */}
          <div className="sm:flex items-center gap-1.5  hidden">
            <IconWrapper>
              <MdHeadphones className="text-[#264b78]" />
            </IconWrapper>
            <span className="whitespace-nowrap sm:block hidden text-white/90">
              Call: +1 646 752 4410
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
