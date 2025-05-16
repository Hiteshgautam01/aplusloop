"use client";

import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";

interface SoarSectionProps {
  useImagePlaceholder?: boolean;
}

const SoarSection: React.FC<SoarSectionProps> = ({
  useImagePlaceholder = false,
}) => {
  // SOAR icon path
  const iconPath =
    "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 18l-1-1M19.25 15.25l-1.5-1.5";

  return (
    <ImageTextSection
      title="Security Orchestration, Automation and Response (SOAR)"
      badge="Advanced Security Solution"
      borderStyle="neon"
      borderColor="blue"
      imagePosition="right"
      imageSrc={
        useImagePlaceholder ? undefined : "/images/cybersecurity/soar.jpg"
      }
      imageAlt="Security Orchestration, Automation and Response"
      usePlaceholder={useImagePlaceholder}
      placeholderIcon={iconPath}
      className="mb-16"
      customImage={
        useImagePlaceholder ? (
          <ImagePlaceholder
            title="SOAR Solutions"
            subtitle="Automate and streamline security responses"
            iconPath={iconPath}
            bgColor="#f0f7ff"
            accentColor="#3b82f6"
            height="100%"
          />
        ) : undefined
      }
      content={
        <>
          <p>
            Our SOAR solutions provide a comprehensive approach to security
            incident response, threat hunting, and security operations,
            combining orchestration, automation, and response capabilities to
            streamline security operations.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Automated incident response workflows to accelerate threat
              resolution
            </li>
            <li>
              Integrated threat intelligence for improved detection and response
            </li>
            <li>
              Orchestration of security tools to eliminate siloed operations
            </li>
            <li>Reduction in alert fatigue through smart prioritization</li>
            <li>Comprehensive case management for security incidents</li>
          </ul>
          <p>
            By implementing SOAR, organizations can dramatically reduce incident
            response times, improve consistency in security operations, and
            enable your team to focus on strategic security initiatives.
          </p>
        </>
      }
    />
  );
};

export default SoarSection;
