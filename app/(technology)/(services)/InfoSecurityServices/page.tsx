"use client";
import React, { useEffect } from "react";
import Banner from "./components/Banner";
import RiskManagement from "./components/RiskManagement";
import DesignConsulting from "./components/DesignConsulting";
import PolicyWriting from "./components/PolicyWriting";
import RegulatoryCompliance from "./components/RegulatoryCompliance";
import ZeroTrust from "./components/ZeroTrust";
import { useSearchParams } from "next/navigation";
import NetworkCommunication from "./components/NetworkCommunicationContent";
import ZeroTrustSecurity from "./components/ZeroTrust";
const InfoSecurityServices = () => {
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
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <div className=" mx-auto px-4 py-16 space-y-">
        <div id="risk-assessment-and-vapt">
          <RiskManagement />
        </div>

        <div id="design-consulting">
          <DesignConsulting />
        </div>

        <div id="policy-writing">
          <PolicyWriting />
        </div>

        <div id="regulatory-compliance">
          <RegulatoryCompliance />
        </div>

        <div id="zero-trust-ot-it">
          <ZeroTrustSecurity />
        </div>
        <div id="network-communication">  
          <NetworkCommunication />
        </div>
      </div>
    </main>
  );
};

export default InfoSecurityServices;
