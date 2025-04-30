// components/careers/NavMenu.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface NavMenuProps {
  sections: {
    name: string;
    ref: React.RefObject<HTMLDivElement | null>;
  }[];
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

export default function NavMenu({ sections, scrollToSection }: NavMenuProps) {
  const [activeSection, setActiveSection] = useState(sections[0].name);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.div 
      className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2" : "bg-white py-4"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center overflow-x-auto no-scrollbar">
          <nav className="flex space-x-1 sm:space-x-2 md:space-x-6 items-center">
            {sections.map((section, index) => (
              <div key={section.name} className="relative">
                <motion.button
                  onClick={() => {
                    scrollToSection(section.ref);
                    setActiveSection(section.name);
                  }}
                  className={`px-3 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-200 ${
                    activeSection === section.name
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center">
                    {activeSection === section.name && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-blue-500 mr-1 text-xs font-bold"
                      >
                        •
                      </motion.span>
                    )}
                    <span>{section.name}</span>
                  </div>
                </motion.button>
                {activeSection === section.name && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-0.5 bg-blue-600 rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile dropdown for very small screens */}
        <div className="md:hidden mt-1 flex justify-center">
          {sections.length > 3 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: sections.length > 3 ? 1 : 0 }}
              className="text-xs text-blue-600 flex items-center justify-center"
            >
              <span>Scroll</span>
              <ChevronRight className="h-3 w-3 animate-pulse" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Gradient borders for premium look */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
    </motion.div>
  );
}