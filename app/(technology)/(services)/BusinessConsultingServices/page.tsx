"use client";
import React, { useEffect } from "react";
import Banner from "../InfoSecurityServices/components/Banner";
import SoftwareAdvisory from "./components/SoftwareAdvisory";
import ProgramManagement from "./components/ProgramManagement";
import StrategicAdvisory from "./components/StrategicAdvisory";
import ResearchInnovation, {
  ProcessImprovement,
} from "./components/ResearchInovation";
import BespokeDevelopment from "./components/BespokeDevelopment";
import SectionSeparator from "@/components/reusable/SectionSeparator";
import { useSearchParams } from "next/navigation";

const BusinessConsultingServices = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        const headerOffset = 100;
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
        title="Business Consulting Services"
        subtitle="Strategic solutions to optimize your business operations and drive sustainable growth"
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
      />
      
      <div id="software-advisory" className="relative">
        <SoftwareAdvisory />
        <SectionSeparator variant="default" className="bottom-0" />
      </div>
      
      <div id="program-management" className="relative">
        <ProgramManagement />
        <SectionSeparator variant="decorative" className="bottom-0" />
      </div>
      
      <div id="strategic-advisory" className="relative">
        <StrategicAdvisory />
        <SectionSeparator variant="minimal" className="bottom-0" />
      </div>
      
      <div id="research-innovation" className="relative">
        <ResearchInnovation />
        <SectionSeparator variant="wave" className="bottom-0" />
      </div>
      
      <div id="process-improvement" className="relative">
        <ProcessImprovement />
        <SectionSeparator variant="decorative" className="bottom-0" />
      </div>
      
      <div id="bespoke-development">
        <BespokeDevelopment />
      </div>
    </div>
  );
};

export default BusinessConsultingServices;