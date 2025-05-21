import React from 'react';
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import { Edit, MessageSquare, Type } from "lucide-react";

const StartingSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  return (
    <div className="w-full bg-white">
      <ImageTextSection
        title="Find the Right Words"
        subtitle="Great writing makes your digital products more accessible and easier to use"
        imagePosition="right"
        borderStyle="floating"
        borderColor="pink"
        backgroundColor="transparent"
        backgroundStyle="none"
        textContentStyle="default"
        badge="UX Writing"
        customImage={
          <ImagePlaceholder
            title="Compelling Copy"
            subtitle="Words that convert and engage"
            width="100%"
            height="100%"
            bgColor={mediumBgColor}
            textColor="#333"
            accentColor={primaryColor}
            iconPath="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z M7 9l5 5 5-5"
          />
        }
        content={
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Interface copy impacts decision making<span className="text-pink-500 font-bold">*</span>. With the right words, you can guide users seamlessly to wherever they need to go. And you help them complete actions faster – creating a positive experience they'll want to repeat.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Carefully crafted content also supports your wider business goals and brand-building efforts. It builds trust and helps you increase inbound leads and conversions, while allowing you to project a consistent tone of voice and brand message.
            </p>
            
            <div className="pt-6 flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                  <MessageSquare className="h-5 w-5 text-pink-600" />
                </div>
                <p className="text-sm text-center text-gray-700 font-medium">Clear Messaging</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                  <Type className="h-5 w-5 text-pink-600" />
                </div>
                <p className="text-sm text-center text-gray-700 font-medium">Consistent Voice</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                  <Edit className="h-5 w-5 text-pink-600" />
                </div>
                <p className="text-sm text-center text-gray-700 font-medium">Targeted Content</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-6">
              <span className="text-pink-500 font-bold">*</span> Based on research showing that clear copy can improve conversion rates by up to 30%.
            </p>
          </div>
        }
      />
    </div>
  );
};

export default StartingSection;