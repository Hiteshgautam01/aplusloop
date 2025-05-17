"use client";
import React, { useEffect } from "react";
import Banner from "../InfoSecurityServices/components/Banner";
import SoftwareAdvisory from "./components/SoftwareAdvisory";
import ProgramManagement from "./components/ProgramManagement";
import StrategicAdvisory from "./components/StrategicAdvisory";
import ResearchInnovation from "./components/ResearchInovation";
import { useSearchParams } from "next/navigation";

const BusinessConsultingServices = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the section parameter from the URL
    const section = searchParams.get("section");
    if (section) {
      // Find the element with the corresponding ID
      const element = document.getElementById(section);
      if (element) {
        // Scroll to the element with a smooth behavior and some offset to account for fixed headers
        const headerOffset = 100; // Adjust this value based on your header height
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [searchParams]);

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
      <div id="software-advisory">
        <SoftwareAdvisory />
      </div>
      <div id="program-management">
        <ProgramManagement />
      </div>
      <div id="strategic-advisory">
        <StrategicAdvisory />
      </div>
      <div id="research-innovation">
        <ResearchInnovation />
      </div>
    </div>
  );
};

export default BusinessConsultingServices;
