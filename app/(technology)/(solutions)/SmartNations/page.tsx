"use client";
import React from "react";
import { useScrollToSection } from "@/app/hooks/useScrollToSection";
import DigitalTwin from "./components/DigitalTwin";
import CityHealth from "./components/CityHealth";
import CityResilience from "./components/CityResilience";
import EmergencyTraining from "./components/EmergencyTraining";
import UrbanPlanning from "./components/UrbanPlanning";
import Transportation from "./components/Transportation";
import CitywideIntegration from "./components/CitywideIntegration";

const SmartNations = () => {
  useScrollToSection();

  return (
    <div className="bg-white">
      <div id="digital-twin">
        <DigitalTwin />
      </div>

      <div id="city-health">
        <CityHealth />
      </div>

      <div id="city-resilience">
        <CityResilience />
      </div>

      <div id="emergency-training">
        <EmergencyTraining />
      </div>

      <div id="urban-planning">
        <UrbanPlanning />
      </div>

      <div id="transportation">
        <Transportation />
      </div>

      <div id="citywide-integration">
        <CitywideIntegration />
      </div>
    </div>
  );
};

export default SmartNations;
