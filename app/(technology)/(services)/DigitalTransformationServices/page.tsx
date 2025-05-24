"use client";
import React, { useEffect } from "react";
import Development from "./Development";
import Banner from "../InfoSecurityServices/components/Banner";
import AutomationServices from "./components/AutomationServices";
import DataManagementServices from "./components/DataManagementServices";
import MobilityServices from "./components/MobilityServices";
import CloudServices from "./components/CloudServices";
import { useSearchParams } from "next/navigation";
import Devops from "./components/Devops";
const DigitalTransformationServices = () => {
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
        title="Digital Transformation Services"
        subtitle="Modernizing enterprise platforms and developing custom applications that align with your workflows for seamless, successful integration."
        height="700px"
        overlayType="gradient"
        overlayOpacity={0.7}
        animationDuration={0.8}
        layout="left"
        badge="Innovation"
        ctaButtons={[
          {
            text: "Get Started",
            variant: "primary",
            href: "#contact",
          },
          {
            text: "Learn More",
            variant: "outline",
            href: "#services",
          },
        ]}
        titleClassName="text-4xl md:text-5xl font-light mb-4"
        subtitleClassName="text-xl md:text-2xl font-light max-w-3xl mx-auto"
        imageSrc="/DigitalTransformation.jpg"
        
      />
      <div id="application-services">
        <Development />
      </div>
      <div id="automation-services">
        <AutomationServices />
      </div>
      <div id="data-management-services">
        <DataManagementServices />
      </div>
      <div id="mobility-services">
        <MobilityServices />
      </div>
      <div id="cloud-services">
        <CloudServices />
      </div>
      <div id="devops">
        <Devops />
      </div>
    </div>
  );
};

export default DigitalTransformationServices;
