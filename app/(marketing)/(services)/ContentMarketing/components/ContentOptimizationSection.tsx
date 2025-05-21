import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import {
  Search,
  LineChart,
  Users,
  Zap,
  Target,
  ArrowUpRight,
} from "lucide-react";

const ContentOptimizationSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  const customImage = (
    <div className="h-full">
      <ImagePlaceholder
        title="Content Optimization"
        subtitle="Enhance Content Performance"
        bgColor={lightBgColor}
        textColor="#333"
        accentColor={primaryColor}
        iconPath="M13 10V3L4 14h7v7l9-11h-7z"
        height="100%"
      />
    </div>
  );

  return (
    <ImageTextSection
      title="Content Optimization"
      subtitle="Enhance your content's quality, relevance, and user experience"
      content={
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            We enhance your content by improving its quality, relevance, user
            experience, and accessibility for your target audience. Content
            optimization has the potential to boost your organic search
            rankings, increase user engagement on your pages, and consequently
            drive more conversions.
          </p>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We'll Enhance Content & Its Performance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Content optimization starts by reviewing your content goals and
              understanding your target audience, including their pain points
              and their questions. Next, we analyze your current content and
              competitor content. From there, we incorporate content updates in
              line with SEO, content, and UX best practices to ensure your
              content delivers value to your audience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-3">
              <Search className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">SEO Enhancement</h4>
                <p className="text-sm text-gray-600">
                  Improve search visibility
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <LineChart className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">
                  Performance Analysis
                </h4>
                <p className="text-sm text-gray-600">
                  Track and measure impact
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">User Experience</h4>
                <p className="text-sm text-gray-600">Enhance accessibility</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Zap className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Content Quality</h4>
                <p className="text-sm text-gray-600">
                  Improve relevance and value
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Audience Focus</h4>
                <p className="text-sm text-gray-600">
                  Address user pain points
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ArrowUpRight className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Conversion Rate</h4>
                <p className="text-sm text-gray-600">Drive better results</p>
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
      badge="Performance Enhancement"
    />
  );
};

export default ContentOptimizationSection;
