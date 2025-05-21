import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import { Search, BarChart2, Users, FileSearch } from "lucide-react";

const ContentAuditSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  const customImage = (
    <div className="h-full">
      <ImagePlaceholder
        title="Content Performance Analysis"
        subtitle="Comprehensive Content Audit"
        bgColor={lightBgColor}
        textColor="#333"
        accentColor={primaryColor}
        iconPath="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        height="100%"
      />
    </div>
  );

  return (
    <ImageTextSection
      title="Content Audit"
      subtitle="Analyze, optimize, and enhance your content performance"
      content={
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            A cohesive content strategy produces relevant content for users at
            every sales funnel stage. Whether you want to see an improvement in
            rankings, user engagement, or conversions, our content strategy
            framework looks for ongoing opportunities to help you reach your
            business goals.
          </p>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We'll Use Content Strategy to Get Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your target audience and their customer journeys are the basis of
              our strategy. We'll work with you to understand your content
              vision and harness your subject matter expertise. From there,
              we'll analyze the performance of existing content, perform
              competitive analyses, and utilize keyword research and SEO
              insights to craft a strategic content plan. We can also train your
              teams on how to create their own content strategy so they can
              produce results on a regular basis.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-3">
              <Search className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Content Analysis</h4>
                <p className="text-sm text-gray-600">
                  In-depth performance review
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <BarChart2 className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">
                  Performance Metrics
                </h4>
                <p className="text-sm text-gray-600">Data-driven insights</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Audience Focus</h4>
                <p className="text-sm text-gray-600">User journey mapping</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileSearch className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">SEO Optimization</h4>
                <p className="text-sm text-gray-600">
                  Keyword and ranking analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      customImage={customImage}
      imagePosition="left"
      borderStyle="floating"
      borderColor="pink"
      backgroundColor="white"
      backgroundStyle="none"
      textContentStyle="default"
      badge="Content Analysis"
    />
  );
};

export default ContentAuditSection;
