import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import {
  FileText,
  Calendar,
  Edit,
  BarChart2,
  BookOpen,
  Repeat,
} from "lucide-react";

const EditorialStrategySection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  const customImage = (
    <div className="h-full">
      <ImagePlaceholder
        title="Editorial Strategy"
        subtitle="Comprehensive Content Framework"
        bgColor={lightBgColor}
        textColor="#333"
        accentColor={primaryColor}
        iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        height="100%"
      />
    </div>
  );

  return (
    <ImageTextSection
      title="Editorial Strategy & Content Development"
      subtitle="Supporting your content goals with a structured editorial process"
      content={
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Our editorial process enables us to support your content goals,
            track content development, and measure performance. Our goal is to
            create the best possible content for your site while empowering your
            team with the skills needed to continue producing high-quality
            content.
          </p>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We'll Own or Guide Content Creation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We can own content creation from start to finish or plug gaps in
              internal resources as needed. We'll provide topic ideation, copy
              briefs, an editorial calendar, copy editing, and copywriting (if
              needed). But it doesn't stop there—we'll provide ongoing editorial
              support through content reporting and content iteration as needed
              to ensure your pages maintain a competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Topic Ideation</h4>
                <p className="text-sm text-gray-600">
                  Strategic content planning
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">
                  Editorial Calendar
                </h4>
                <p className="text-sm text-gray-600">
                  Structured publishing schedule
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Edit className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Copy Editing</h4>
                <p className="text-sm text-gray-600">Quality assurance</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <BarChart2 className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Content Reporting</h4>
                <p className="text-sm text-gray-600">Performance tracking</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <BookOpen className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Copy Briefs</h4>
                <p className="text-sm text-gray-600">
                  Detailed content guidelines
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Repeat className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Content Iteration</h4>
                <p className="text-sm text-gray-600">Continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      }
      customImage={customImage}
      imagePosition="right"
      borderStyle="floating"
      borderColor="pink"
      backgroundColor="white"
      backgroundStyle="none"
      textContentStyle="default"
      badge="Editorial Process"
    />
  );
};

export default EditorialStrategySection;
