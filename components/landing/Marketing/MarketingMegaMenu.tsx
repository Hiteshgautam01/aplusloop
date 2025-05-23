"use client";

import * as React from "react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
import { TopLevelTabs } from "./TopLevelTabs";
import { ServicesContent } from "./ServicesContent";
import { SolutionsContent } from "./SolutionsContent";

interface MarketingMegaMenuProps {
  closeMenu?: () => void;
}

export const MarketingMegaMenu: React.FC<MarketingMegaMenuProps> = ({
  closeMenu,
}) => {
  const [activeTab, setActiveTab] = React.useState("solutions");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <NavigationMenuContent className="bg-white/95 backdrop-blur-lg border border-pink-100/50 shadow-2xl w-[900px] rounded-xl overflow-hidden">
      <div className="p-2 relative z-10">
        {/* Top tabs */}
        <TopLevelTabs activeTab={activeTab} setActiveTab={handleTabChange} />

        {/* Content based on active tab */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            {activeTab === "solutions" ? (
              <SolutionsContent />
            ) : (
              <ServicesContent />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom gradient accent */}
        <div className="h-1 bg-gradient-to-r from-[#FF3D9A] via-[#E91E63] to-[#C4008C]" />
      </div>
    </NavigationMenuContent>
  );
};
