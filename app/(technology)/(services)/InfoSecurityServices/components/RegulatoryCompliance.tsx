import React from "react";
import { motion } from "framer-motion";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";

// Compliance regulations list component
const ComplianceList = () => {
  const regulations = [
    { id: 1, name: "ISO27001" },
    { id: 2, name: "NIST 800 Cyber Security Frame Work" },
    { id: 3, name: "HIPPA" },
    { id: 4, name: "PCI DSS" },
    { id: 5, name: "GDPR" },
    { id: 6, name: "ISR Compliance (DESC)" }
  ];
  
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-4">We make you ready for these regulations:</h4>
      <div className="grid grid-cols-2 gap-3">
        {regulations.map((reg) => (
          <div key={reg.id} className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">{reg.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RegulatoryCompliance = () => {
  // Define shield icon path for compliance
  const complianceIconPath = "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4";

  // Define content sections with proper formatting
  const complianceContent = (
    <>
      <p className="mb-3 text-gray-700">
        Compliance management is the management and adherence to the laws, regulations, standards, policies, and codes of conduct that apply to an organization.
      </p>
      <p className="mb-3 text-gray-700">
        Many organizations, either by mandate or industry best practice, turn to frameworks for compliance and risk management guidance. A framework is a guideline for processes that meet legal or voluntary regulations.
      </p>
      <p className="mb-3 text-gray-700">
        <span className="text-blue-700 font-medium">A+loop</span> becomes a pathway for organizations who need to adapt to that framework. Our SOC follows several well-established best practices as a guide and is governed by compliance requirements and provides organizations with all the necessary information and guidance to comply with these requirements.
      </p>
      <p className="mb-3 text-gray-700">
        For this, <span className="text-blue-700 font-medium">A+loop</span> provides a service of Compliance Management where we perform regular auditing of the systems to ensure compliance with regulations issued by their industry or governing bodies.
      </p>
      
      <ComplianceList />
    </>
  );

  return (
    <section className=" bg-white">
      <div className=" mx-auto">
        <ImageTextSection
          imagePosition="left"
          title="Regulatory Compliance Management"
          subtitle="Ensuring your organization meets industry standards and regulations"
          badge="Compliance & Governance"
          content={complianceContent}
          borderStyle="frosted"
          borderColor="blue"
          backgroundColor="white"
          textContentStyle="default"
          customImage={
            <ImagePlaceholder 
              title="Regulatory Compliance"
              subtitle="Meet Industry Standards & Requirements"
              iconPath={complianceIconPath}
              accentColor="#1a56db"
              bgColor="#f0f7ff"
              height="100%"
            />
          }
        />
      </div>
    </section>
  );
};

export default RegulatoryCompliance;