"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TopLevelTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TopLevelTabs: React.FC<TopLevelTabsProps> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <div className="flex border-b border-[#FFE0F0] mb-6 bg-[#FFF5F9] rounded-t-lg w-full">
      <div
        className={cn(
          "px-8 py-4 font-medium cursor-pointer transition-all duration-300 relative flex-1 text-center rounded-tl-lg",
          activeTab === "solutions" 
            ? "text-white bg-gradient-to-r from-[#FF3D9A] to-[#C4008C] shadow-md" 
            : "text-gray-600 hover:text-[#C4008C] hover:bg-[#FFE0F0]"
        )}
        onClick={() => setActiveTab("solutions")}
      >
        Solutions
        {activeTab === "solutions" && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[3px] bg-white"
            layoutId="active-tab-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
      
      <div
        className={cn(
          "px-8 py-4 font-medium cursor-pointer transition-all duration-300 relative flex-1 text-center rounded-tr-lg",
          activeTab === "services" 
            ? "text-white bg-gradient-to-r from-[#FF3D9A] to-[#C4008C] shadow-md" 
            : "text-gray-600 hover:text-[#C4008C] hover:bg-[#FFE0F0]"
        )}
        onClick={() => setActiveTab("services")}
      >
        Services
        {activeTab === "services" && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[3px] bg-white"
            layoutId="active-tab-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </div>
  );
};