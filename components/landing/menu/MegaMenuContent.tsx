"use client";

import * as React from "react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ServicesContent } from "./ServicesMenuContent";
import { SolutionsContent } from "./SolutionsMenuContent";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Top level tabs component
const TopLevelTabs: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b mb-4">
      <div
        className={cn(
          "px-6 py-3 font-medium cursor-pointer transition-colors relative",
          activeTab === "solutions" ? "text-blue-700" : "hover:text-blue-600"
        )}
        onClick={() => setActiveTab("solutions")}
      >
        Solutions
        {activeTab === "solutions" && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"
            layoutId="active-tab-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
      <div
        className={cn(
          "px-6 py-3 font-medium cursor-pointer transition-colors relative",
          activeTab === "services" ? "text-blue-700" : "hover:text-blue-600"
        )}
        onClick={() => setActiveTab("services")}
      >
        Services
        {activeTab === "services" && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"
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

// Main navigation content component
export function MegaMenuContent() {
  const [activeTab, setActiveTab] = React.useState("solutions");

  return (
    <NavigationMenuContent className="bg-background/95 backdrop-blur-lg border border-muted/20 shadow-lg w-[900px] rounded-lg overflow-hidden">
      <div className="p-2">
        {/* Top tabs */}
        <TopLevelTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "solutions" ? (
              <SolutionsContent />
            ) : (
              <ServicesContent />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </NavigationMenuContent>
  );
}
