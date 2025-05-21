import React from "react";
import WebAndMobileDevelopment from "./components/WebAndMobileDevelopment";
import TechLogo from "./components/TechLogo";
import StickySection from "./components/StickySection";
import Banner from "./components/Banner";

const Web = () => {
  return (
    <div className="mt-16">
      <Banner />
      <WebAndMobileDevelopment />
      <TechLogo />
      <StickySection />
    </div>
  );
};

export default Web;
