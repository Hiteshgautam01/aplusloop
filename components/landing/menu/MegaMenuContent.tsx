"use client";

import * as React from "react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ServicesContent } from "./ServicesMenuContent";
import { SolutionsContent } from "./SolutionsMenuContent";
import { cn } from "@/lib/utils";

// Top level tabs component
const TopLevelTabs: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b mb-4">
      <div
        className={cn(
          "px-6 py-3 font-medium cursor-pointer transition-colors",
          activeTab === "solutions"
            ? "text-blue-700 border-b-2 border-blue-700"
            : "hover:text-blue-600"
        )}
        onClick={() => setActiveTab("solutions")}
      >
        Solutions
      </div>
      <div
        className={cn(
          "px-6 py-3 font-medium cursor-pointer transition-colors",
          activeTab === "services"
            ? "text-blue-700 border-b-2 border-blue-700"
            : "hover:text-blue-600"
        )}
        onClick={() => setActiveTab("services")}
      >
        Services
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
        {activeTab === "solutions" ? <SolutionsContent /> : <ServicesContent />}
      </div>
    </NavigationMenuContent>
  );
}
