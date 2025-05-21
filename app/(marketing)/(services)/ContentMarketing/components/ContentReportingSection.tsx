import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import {
  BarChart2,
  Search,
  MousePointer2,
  LineChart,
  Target,
  RefreshCw,
} from "lucide-react";

const ContentReportingSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  const customImage = (
    <div className="h-full">
      <ImagePlaceholder
        title="Content Reporting"
        subtitle="Data-Driven Content Strategy"
        bgColor={lightBgColor}
        textColor="#333"
        accentColor={primaryColor}
        iconPath="M21 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h17v18zM14 7v14M8 7v14M4 11h16M4 15h16"
        height="100%"
      />
    </div>
  );

  return (
    <ImageTextSection
      title="Content Reporting"
      subtitle="Make data-informed decisions to optimize your content strategy"
      content={
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Through content reporting, we can see what content works well and
            what opportunities exist for improvements. This ongoing monitoring
            ensures that we can continuously adapt our approach to align with
            your content goals.
          </p>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We'll Make Data-Informed Content Decisions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Using data from your analytics platform, Google Search Console,
              heatmap tracking platform, and keyword tracking platform, we gain
              a deep understanding of user behavior, engagement, and conversion
              patterns. We'll make data-informed decisions about how to adjust
              or maintain our content development and optimization efforts to
              continually improve your website's performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-3">
              <BarChart2 className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">
                  Analytics Insights
                </h4>
                <p className="text-sm text-gray-600">
                  Performance metrics tracking
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Search className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">
                  Search Console Data
                </h4>
                <p className="text-sm text-gray-600">
                  Search performance analysis
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MousePointer2 className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">User Behavior</h4>
                <p className="text-sm text-gray-600">
                  Heatmap and click tracking
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <LineChart className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Keyword Tracking</h4>
                <p className="text-sm text-gray-600">
                  Search ranking monitoring
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Goal Tracking</h4>
                <p className="text-sm text-gray-600">Conversion optimization</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RefreshCw className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Iterative Updates</h4>
                <p className="text-sm text-gray-600">Continuous improvement</p>
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
      badge="Performance Analytics"
    />
  );
};

export default ContentReportingSection;
