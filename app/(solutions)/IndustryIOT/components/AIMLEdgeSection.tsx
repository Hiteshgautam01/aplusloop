"use client";

import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";

const AIMLEdgeSection = () => {
  // Custom icon path for AI/ML chip
  const iconPath =
    "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z";

  return (
    <ImageTextSection
      title="AI ML Edge Automation"
      badge="Edge Intelligence"
      imagePosition="left"
      className="bg-slate-50 py-10"
      borderColor="blue"
      borderStyle="floating"
      usePlaceholder={true}
      placeholderIcon={iconPath}
      customImage={
        <ImagePlaceholder
          title="AI ML Edge Automation"
          subtitle="Intelligent processing at the edge"
          iconPath={iconPath}
          bgColor="#f0f7ff"
          accentColor="#0369a1"
          height="100%"
        />
      }
      content={
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Expert Support
            </h3>
            <p className="text-slate-600">
              Our team has in-depth expertise in the Apache PLC4X codebase and
              provides a managed service approach to ensure the solution is
              robust, secure, and continuously maintained.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Integrated Platform
            </h3>
            <p className="text-slate-600 mb-4">
              Using Apache IoTDB, Apache Kafka, and Apache Flink, we enable:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              <li>
                <span className="font-medium">Edge Processing:</span> Real-time
                analytics and anomaly detection at the edge to reduce latency
                and ensure actionable insights close to the source.
              </li>
              <li>
                <span className="font-medium">Stream Processing:</span>{" "}
                Real-time data pipelines and event-driven processing using Kafka
                and Flink for dynamic data integration.
              </li>
              <li>
                <span className="font-medium">Cloud Integration:</span> Securely
                encapsulating and transmitting data for centralized processing
                and long-term analytics using IoTDB for high-performance
                storage.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              End-to-End Solution
            </h3>
            <p className="text-slate-600">
              A comprehensive framework that seamlessly connects, processes, and
              transmits data from PLCs to downstream systems, ensuring
              scalability, efficiency, and security.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default AIMLEdgeSection;
