import React from "react";
import StartingSection from "./components/StartingSection";
import BenefitsGridSection from "./components/BenefitsGridSection";
import ApproachSection from "./components/ApproachSection";

const ContentMarketing = () => {
  return (
    <div className="mt-16">
      <StartingSection />
      <BenefitsGridSection />
      <ApproachSection />
    </div>
  );
};

export default ContentMarketing;
