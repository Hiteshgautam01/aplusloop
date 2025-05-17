"use client";

import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";

interface SecOpsSectionProps {
  useImagePlaceholder?: boolean;
}

const SecOpsSection: React.FC<SecOpsSectionProps> = ({
  useImagePlaceholder = false,
}) => {
  // SecOps icon path
  const iconPath =
    "M12 15c-1.85 0-3.35-1.5-3.35-3.35s1.5-3.35 3.35-3.35 3.35 1.5 3.35 3.35-1.5 3.35-3.35 3.35zm0-13.75c-5.75 0-10.4 4.65-10.4 10.4s4.65 10.4 10.4 10.4 10.4-4.65 10.4-10.4-4.65-10.4-10.4-10.4zm0 18.25c-4.34 0-7.85-3.51-7.85-7.85s3.51-7.85 7.85-7.85 7.85 3.51 7.85 7.85-3.51 7.85-7.85 7.85z";

  return (
    <ImageTextSection
      title="Security Operations (SecOps)"
      badge="Managed Security"
      borderStyle="cutout"
      borderColor="cyan"
      imagePosition="left"
      imageSrc={
        useImagePlaceholder ? undefined : "/images/cybersecurity/secops.jpg"
      }
      imageAlt="Security Operations Center"
      usePlaceholder={useImagePlaceholder}
      placeholderIcon={iconPath}
      className="mb-16"
      customImage={
        useImagePlaceholder ? (
          <ImagePlaceholder
            title="Security Operations"
            subtitle="24/7 security monitoring and management"
            iconPath={iconPath}
            bgColor="#ecfeff"
            accentColor="#06b6d4"
            height="100%"
          />
        ) : undefined
      }
      content={
        <>
          <p>
            Our SecOps solutions establish a fully managed Security Operations
            Center tailored to your organization's needs, providing
            around-the-clock security monitoring, detection, and response.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 security monitoring and incident response</li>
            <li>Threat hunting and vulnerability management</li>
            <li>Security tool management and optimization</li>
            <li>Incident response planning and simulation</li>
            <li>Regular security posture assessment and improvement</li>
          </ul>
          <p>
            A robust SecOps function is the cornerstone of effective
            cybersecurity, providing the people, processes, and technology
            needed to detect, respond to, and remediate security threats before
            they impact your business operations.
          </p>
        </>
      }
    />
  );
};

export default SecOpsSection;
