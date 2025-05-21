import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import { Target, BarChart2, Users, Lightbulb } from "lucide-react";

const ContentStrategySection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  const customImage = (
    <div className="h-full">
      <ImagePlaceholder
        title="Target Audience"
        subtitle="Customer Journey Focus"
        bgColor={lightBgColor}
        textColor="#333"
        accentColor={primaryColor}
        iconPath="M22 12h-4l-3 9L9 3l-3 9H2"
        height="100%"
      />
    </div>
  );

  return (
    <ImageTextSection
      title="Content Strategy"
      subtitle="A cohesive content strategy produces relevant content for users at every sales funnel stage"
      content={
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Whether you want to see an improvement in rankings, user engagement,
            or conversions, our content strategy framework looks for ongoing
            opportunities to help you reach your business goals.
          </p>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We'll Use Content Strategy to Get Results
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your target audience and their customer journeys are the basis of
              our strategy. We'll work with you to understand your content
              vision and harness your subject matter expertise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From there, we'll analyze the performance of existing content,
              perform competitive analyses, and utilize keyword research and SEO
              insights to craft a strategic content plan. We can also train your
              teams on how to create their own content strategy so they can
              produce results on a regular basis.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Targeted Approach</h4>
                <p className="text-sm text-gray-600">
                  Focused on your audience needs
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <BarChart2 className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Data-Driven</h4>
                <p className="text-sm text-gray-600">
                  Based on performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Team Enablement</h4>
                <p className="text-sm text-gray-600">
                  Training and knowledge sharing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Strategic Vision</h4>
                <p className="text-sm text-gray-600">
                  Long-term content planning
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
      badge="Strategy Framework"
    />
  );
};

export default ContentStrategySection;
