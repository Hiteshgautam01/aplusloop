"use client";

import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";

interface EdrXdrSectionProps {
  useImagePlaceholder?: boolean;
}

const EdrXdrSection: React.FC<EdrXdrSectionProps> = ({
  useImagePlaceholder = false,
}) => {
  // EDR XDR icon path
  const iconPath =
    "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18";

  return (
    <ImageTextSection
      title="Endpoint Detection & Response (EDR) & Extended Detection & Response (XDR)"
      badge="Threat Detection & Response"
      borderStyle="layered"
      borderColor="indigo"
      imagePosition="left"
      imageSrc={
        useImagePlaceholder ? undefined : "/images/cybersecurity/edr-xdr.jpg"
      }
      imageAlt="Endpoint Detection and Response"
      usePlaceholder={useImagePlaceholder}
      placeholderIcon={iconPath}
      className="mb-16"
      customImage={
        useImagePlaceholder ? (
          <ImagePlaceholder
            title="EDR & XDR Solutions"
            subtitle="Comprehensive endpoint and extended threat detection"
            iconPath={iconPath}
            bgColor="#eef2ff"
            accentColor="#6366f1"
            height="100%"
          />
        ) : undefined
      }
      content={
        <>
          <p>
            Our EDR and XDR solutions provide comprehensive visibility and
            response capabilities across your entire digital environment, from
            endpoints to networks and cloud workloads.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Real-time monitoring and detection of threats at the endpoint
              level
            </li>
            <li>Behavioral analysis to identify suspicious activities</li>
            <li>Automated response to contain and remediate threats</li>
            <li>
              Extended visibility across multiple security domains with XDR
            </li>
            <li>Integration with threat intelligence for improved detection</li>
          </ul>
          <p>
            EDR and XDR solutions provide the visibility and response
            capabilities needed to detect, investigate, and remediate threats
            across your entire IT environment, preventing breaches before they
            impact your business.
          </p>
        </>
      }
    />
  );
};

export default EdrXdrSection;
