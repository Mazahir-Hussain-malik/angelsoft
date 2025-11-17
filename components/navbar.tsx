'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
    <nav className="fixed w-full z-40  px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Box */}
          <div className="bg-white rounded-2xl shadow-xl px-5 py-4 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              {/* Triangle Logo SVG */}
              <svg viewBox="0 0 50 50" className="w-7 h-7 flex-shrink-0">
                <polygon points="25,8 42,42 8,42" fill="#D4AF37"/>
                <polygon points="25,16 38,38 12,38" fill="#B8860B"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xs text-[#1a1a1a] tracking-wider">ANGELSOFT</span>
                <span className="text-xs font-bold text-[#D4AF37]">SOLUTIONS</span>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center bg-white rounded-2xl shadow-xl px-8 py-4 flex-1 max-w-md justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#1a1a1a] hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section - Search and CTA */}
          <div className="hidden lg:flex items-center bg-white rounded-2xl shadow-xl px-5 py-4 gap-5 flex-shrink-0">
            <button className="p-2 text-[#1a1a1a] hover:text-[#D4AF37] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="px-6 py-2.5 bg-[#2C5282] text-white rounded-full font-semibold text-sm hover:bg-[#1a365d] transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 bg-white rounded-lg shadow-lg text-[#1a1a1a]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-2xl shadow-xl p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-[#1a1a1a] hover:text-[#D4AF37] hover:bg-[#f8f8f8] rounded transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-2 px-4 py-2 bg-[#2C5282] text-white rounded-full font-semibold text-sm hover:bg-[#1a365d] transition-colors duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
