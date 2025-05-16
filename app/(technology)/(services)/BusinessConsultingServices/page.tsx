"use client";
import React from "react";
import Banner from "../InfoSecurityServices/components/Banner";
import SoftwareAdvisory from "./components/SoftwareAdvisory";
import ProgramManagement from "./components/ProgramManagement";
import StrategicAdvisory from "./components/StrategicAdvisory";
import ResearchInnovation from "./components/ResearchInovation";

const BusinessConsultingServices = () => {
  return (
    <div>
      <Banner
        // imageSrc="/.jpg"
        title="Business Consulting Services"
        subtitle="Strategic solutions to optimize your business operations and drive sustainable growth"
        // overlayType="glass"
        layout="center"
        height="650px"
        badge="EXPERTISE"
        titleClassName="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800"
        subtitleClassName="mt-6 text-xl md:text-2xl font-light max-w-3xl text-slate-700"
        ctaButtons={[
          {
            text: "Explore Services",
            variant: "primary",
            className: "bg-blue-600 text-white hover:bg-blue-700",
          },
          {
            text: "Contact Us",
            variant: "outline",
            className:
              "text-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white",
          },
        ]}
        // customOverlayStyle={{ backgroundColor: "rgba(255,255,255,0.7)" }}
      />
      <SoftwareAdvisory />
      <ProgramManagement />
      <StrategicAdvisory />
      <ResearchInnovation />
    </div>
  );
};

export default BusinessConsultingServices;
