"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MarketingSection } from "../menu/data/marketing";

interface SectionCardProps {
  section: MarketingSection;
  isVisible: boolean;
}

export const SectionCard: React.FC<SectionCardProps> = ({ 
  section, 
  isVisible 
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute left-full top-0 ml-3 w-80 z-50"
    >
      <div className="bg-white rounded-lg shadow-xl border border-pink-100 overflow-hidden">
        <div className="relative">
          <img
            src={section.imageSrc}
            alt={section.title}
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-lg">
            {section.title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {section.description}
          </p>
          
          <div className="flex items-center justify-between">
            <button className="text-sm font-medium text-white bg-gradient-to-r from-[#FF3D9A] to-[#C4008C] px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg">
              Learn More
            </button>
            <div className="text-xs text-gray-400">
              Click to explore
            </div>
          </div>
        </div>
        
        {/* Subtle pink accent */}
        <div className="h-1 bg-gradient-to-r from-[#FF3D9A] to-[#C4008C]" />
      </div>
    </motion.div>
  );
};