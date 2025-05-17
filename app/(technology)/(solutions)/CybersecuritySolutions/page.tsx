"use client";
import React from "react";
import { Metadata } from "next";
import SoarSection from "./components/cybersecurity/SoarSection";
import SecurityHero from "./components/cybersecurity/SecurityHero";
import EdrXdrSection from "./components/cybersecurity/EdrXdrSection";
import SiemSection from "./components/cybersecurity/SiemSection";
import SecOpsSection from "./components/cybersecurity/SecOpsSection";
import SecurityCTA from "./components/cybersecurity/SecurityCTA";



// export const metadata: Metadata = {
//   title: "Cybersecurity Solutions | A+ Loop",
//   description:
//     "Complete cybersecurity solutions including SOAR, EDR & XDR, SIEM, and SecOps for organizations facing sophisticated cyber threats.",
// };

// Check if images exist, otherwise use placeholders
const shouldUsePlaceholders = {
  soar: false, // Set to true if soar.jpg doesn't exist
  edrXdr: false, // Set to true if edr-xdr.jpg doesn't exist
  siem: false, // Set to true if siem.jpg doesn't exist
  secOps: true, // Set to true if secops.jpg doesn't exist or you want to showcase the placeholder
};

const CybersecuritySolutions = () => {
  return (
    <main className="pb-16 mt-16">
      {/* Hero Section */}
      <SecurityHero />

      {/* SOAR Section */}
      <SoarSection useImagePlaceholder={shouldUsePlaceholders.soar} />

      {/* EDR & XDR Section */}
      <EdrXdrSection useImagePlaceholder={shouldUsePlaceholders.edrXdr} />

      {/* SIEM Section */}
      <SiemSection useImagePlaceholder={shouldUsePlaceholders.siem} />

      {/* SecOps Section */}
      <SecOpsSection useImagePlaceholder={shouldUsePlaceholders.secOps} />

      {/* CTA Section */}
      <SecurityCTA />
    </main>
  );
};

export default CybersecuritySolutions;
