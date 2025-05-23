"use client";
import React from "react";
import { motion } from "framer-motion";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import {
  Database,
  BarChart,
  Shield,
  HardDrive,
  Zap,
  Cloud,
} from "lucide-react";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import SectionHeader from "@/components/reusable/SectionHeader";
const DataManagementServices = () => {
  return (
    <div className="relative pb-20 overflow-hidden">
      {/* Background Elements - using a different style from Automation component */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30"></div>
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div> */}

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-80 h-80 rounded-full bg-indigo-100/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl"></div>

      <SectionHeader
        title="Data Management Services"
        description="Data is your most strategic asset. We deliver services in data governance, real-time processing (including IoT and edge computing), AI/ML-powered analytics, and cloud-based warehousing. Our integrated data solutions enhance accuracy, compliance, and decision-making in real time.
"
        icon={<Database className="w-8 h-8 " />}
        layout="centered"
        titleSize="xl"
        badgeColor="bg-indigo-100 text-indigo-800"
        // badge="Strategic Data Solutions"
        animation={true}
        blueBg={true}
      />

      {/* Data Services Overview - Using ImageTextSection with a different approach */}
      <ImageTextSection
        title="TRANSFORMING YOUR DATA INTO BUSINESS VALUE"
        content={
          <div className="space-y-5">
            <p className="text-base mb-6">
              Our comprehensive data management services help organizations
              harness the full potential of their data, turning information into
              actionable insights and competitive advantage:
            </p>

            {/* Using a different bullet point style with cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-1 gap-4"
            >
              {/* Item 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-md flex-shrink-0">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Data Governance & Quality Management
                    </h3>
                    <p className="text-gray-600">
                      Ensuring data accuracy, consistency, and compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 with nested list */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-50 p-2 rounded-md flex-shrink-0">
                    <Zap className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Real-time Data Processing & Edge Computing
                    </h3>

                    <div className="pl-3 border-l-2 border-indigo-100 mt-3 space-y-2">
                      <p className="text-gray-600 text-sm">
                        Building and managing data pipelines for immediate
                        insights.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Processing high-frequency, time-series data directly at
                        the edge for rapid decision-making and reduced latency.
                      </p>
                      <p className="text-gray-600 text-sm">
                        IoT data ingestion and local processing.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Edge-to-cloud synchronization for centralized analytics.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Integration with AI/ML models for predictive and
                        real-time insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-md flex-shrink-0">
                    <BarChart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Advanced Data Analytics
                    </h3>
                    <p className="text-gray-600">
                      Delivering actionable insights through analytics and AI/ML
                      models.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-50 p-2 rounded-md flex-shrink-0">
                    <HardDrive className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Data Warehousing & Integration
                    </h3>
                    <p className="text-gray-600">
                      Centralized storage and seamless system integration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-md flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Data Security & Privacy
                    </h3>
                    <p className="text-gray-600">
                      Protecting sensitive data and ensuring compliance with
                      regulations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        }
        borderStyle="floating"
        borderColor="indigo"
        badge="Strategic Data Solutions"
        imagePosition="right"
        textContentStyle="minimal"
        decorative={true}
        backgroundColor="white"
        backgroundStyle="solid"
        customImage={
          <ImagePlaceholder
            title="Data Management"
            subtitle="Unlocking Business Intelligence"
            iconPath="/api/placeholder/48/48"
            accentColor="#4f46e5"
            bgColor="#e0e7ff"
            height="100%"
          />
        }
      />
    </div>
  );
};

export default DataManagementServices;
