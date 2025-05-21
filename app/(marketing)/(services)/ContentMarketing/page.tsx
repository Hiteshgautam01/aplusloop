import React from "react";
import StartingSection from "./components/StartingSection";
import BenefitsGridSection from "./components/BenefitsGridSection";
import ApproachSection from "./components/ApproachSection";
import CopyUXWritingSection from "./components/CopyUXWritingSection";
import ContentStrategySection from "./components/ContentStrategySection";
import ContentAuditSection from "./components/ContentAuditSection";
import EditorialStrategySection from "./components/EditorialStrategySection";
import ContentOptimizationSection from "./components/ContentOptimizationSection";
import ContentPromotionSection from "./components/ContentPromotionSection";
import ContentReportingSection from "./components/ContentReportingSection";
import BannerSliderSection from "./components/BannerSliderSection";

const ContentMarketing = () => {
  return (
    <div className="mt-16">
      <BannerSliderSection />
      <StartingSection />
      <BenefitsGridSection />
      <ContentStrategySection />
      <EditorialStrategySection />
      <ContentAuditSection />
      <CopyUXWritingSection />
      <ContentOptimizationSection />
      <ContentPromotionSection />
      <ContentReportingSection />
      <ApproachSection />
    </div>
  );
};

export default ContentMarketing;
