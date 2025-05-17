"use client";

import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";

interface SiemSectionProps {
  useImagePlaceholder?: boolean;
}

const SiemSection: React.FC<SiemSectionProps> = ({
  useImagePlaceholder = false,
}) => {
  // SIEM icon path
  const iconPath =
    "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4";

  return (
    <ImageTextSection
      title="Security Information and Event Management (SIEM)"
      badge="Centralized Security Monitoring"
      borderStyle="floating"
      borderColor="purple"
      imagePosition="right"
      imageSrc={
        useImagePlaceholder ? undefined : "/images/cybersecurity/siem.jpg"
      }
      imageAlt="Security Information and Event Management"
      usePlaceholder={useImagePlaceholder}
      placeholderIcon={iconPath}
      className="mb-16"
      customImage={
        useImagePlaceholder ? (
          <ImagePlaceholder
            title="SIEM Solutions"
            subtitle="Centralized security event monitoring and analytics"
            iconPath={iconPath}
            bgColor="#faf5ff"
            accentColor="#9333ea"
            height="100%"
          />
        ) : undefined
      }
      content={
        <>
          <p>
            Our SIEM solutions provide comprehensive visibility into your
            security posture by collecting, analyzing, and correlating security
            data from across your organization.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Centralized log collection and management from diverse sources
            </li>
            <li>Real-time security event correlation and analysis</li>
            <li>Advanced threat detection using behavioral analytics</li>
            <li>Automated alerting and incident response</li>
            <li>Compliance reporting and security posture management</li>
          </ul>
          <p>
            By implementing a modern SIEM solution, organizations can gain
            comprehensive visibility into security events, reduce mean time to
            detect (MTTD) and mean time to respond (MTTR), and maintain
            compliance with regulatory requirements.
          </p>
        </>
      }
    />
  );
};

export default SiemSection;
