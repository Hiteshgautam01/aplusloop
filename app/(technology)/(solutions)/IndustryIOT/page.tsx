"use client";
import React from "react";

import RealtimeDataSection from "./components/RealtimeDataSection";
import AIMLEdgeSection from "./components/AIMLEdgeSection";
import HeroSection from "@/components/reusable/HeroSection";
import { useScrollToSection } from "@/app/hooks/useScrollToSection";
import IoTTimeSeriesDataManagement from "./components/TimeSeriesData";
import AIMLEdgeAutomation from "./components/AIMLEdgeSection";

const IndustryIoTSolutions = () => {
  useScrollToSection();
  return (
    <main className="pb-16 mt-16">
      {/* Hero Section */}
      <HeroSection
        tagText="Industrial IoT"
        tagBgColor="bg-blue-500/20"
        tagTextColor="text-blue-200"
        heading="Industrial IoT Solutions"
        subheading="Transforming industrial operations with real-time data and intelligent automation"
        description="Our Industrial IoT solutions connect your physical and digital worlds, creating a seamless ecosystem of data-driven intelligence for manufacturing, utilities, and industrial applications."
        dividerColor="bg-blue-500"
        bgGradient="bg-gradient-to-br from-slate-900 to-blue-900"
        descriptionColor="text-blue-200"
      />

      <div className="" id="time-series-data">
        <IoTTimeSeriesDataManagement />
      </div>

      {/* Realtime Data Acquisition Section */}
      <div className="mt-10" id="realtime-data">
        <RealtimeDataSection />
      </div>

      {/* AI ML Edge Automation Section */}
      <div className="" id="ai-ml-edge-automation">
        <AIMLEdgeAutomation />
      </div>
    </main>
  );
};

export default IndustryIoTSolutions;
