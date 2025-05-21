import React from "react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import {
  Share2,
  Globe,
  Newspaper,
  MessageCircle,
  TrendingUp,
  Award,
} from "lucide-react";

const ContentPromotionSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  const customImage = (
    <div className="h-full">
      <ImagePlaceholder
        title="Content Promotion"
        subtitle="Amplify Your Brand Reach"
        bgColor={lightBgColor}
        textColor="#333"
        accentColor={primaryColor}
        iconPath="M7 16.462v.038a.5.5 0 0 0 .847.359l2.153-1.77 2.153 1.77a.5.5 0 0 0 .847-.359v-.038a.5.5 0 0 0-.153-.334l-2.153-1.77v-3.083l2.153-1.77a.5.5 0 0 0 .153-.334v-.038a.5.5 0 0 0-.847-.359l-2.153 1.77-2.153-1.77a.5.5 0 0 0-.847.359v.038a.5.5 0 0 0 .153.334l2.153 1.77v3.083l-2.153 1.77a.5.5 0 0 0-.153.334z"
        height="100%"
      />
    </div>
  );

  return (
    <ImageTextSection
      title="Content Promotion"
      subtitle="Amplify your brand's reach through strategic content distribution"
      content={
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Great content is the backbone of any strong content strategy, and
            promoting it will help you gain notoriety for your brand. We'll help
            promote your content by crafting newsworthy articles that generate
            new visitors.
          </p>

          <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We'll Promote Your Content to Publicize Your Brand
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We'll lead the way in producing, pitching, and promoting engaging,
              shareworthy content that lives on your website. We know how to
              effectively get your content to relevant bloggers, journalists,
              and news outlets across the country.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-3">
              <Share2 className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">
                  Strategic Outreach
                </h4>
                <p className="text-sm text-gray-600">
                  Targeted content distribution
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Globe className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Digital PR</h4>
                <p className="text-sm text-gray-600">Build online presence</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Newspaper className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Media Coverage</h4>
                <p className="text-sm text-gray-600">
                  Press and publication outreach
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">
                  Influencer Network
                </h4>
                <p className="text-sm text-gray-600">
                  Industry expert connections
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Growth Strategy</h4>
                <p className="text-sm text-gray-600">
                  Scalable promotion tactics
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Award className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Brand Authority</h4>
                <p className="text-sm text-gray-600">Industry recognition</p>
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
      badge="Brand Amplification"
    />
  );
};

export default ContentPromotionSection;
