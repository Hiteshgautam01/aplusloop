import React from 'react';
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import { Heart, BrainCircuit, Palette } from "lucide-react";

const StartingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF5F9]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF3D9A] opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#C4008C] opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className=" mx-auto  py-10 relative z-10">
        {/* Main Content with Image and Text */}
        <div className="">
          <ImageTextSection
            title="Win Heart & Mind"
            subtitle="Your brand isn't just a logo or colour scheme"
            badge="Brand Strategy"
            borderColor="pink"
            imagePosition="right"
            content={
              <>
                <p className="mb-6 text-lg leading-relaxed">
                  It's people's perception of your product, service or company. It's all the individual elements that combine to differentiate your business from others. And it's an outward expression of your core vision and values.
                </p>
                
                <div className="mb-6 bg-[#FFE0F0] rounded-lg p-6 border-l-4 border-[#FF3D9A]">
                  <p className="text-lg font-semibold text-gray-800">
                    46% of consumers* are willing to pay more for brands they trust.
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed">
                  We'll set yours up for success by giving it a clear, long-term strategy and emotional appeal. And we'll ensure every detail of the customer experience is consistent with your brand promise, purpose, voice and personality.
                </p>
              </>
            }
            customImage={
              <ImagePlaceholder
                title="Brand Strategy & Development"
                subtitle="Creating memorable brands that resonate and inspire trust"
                bgColor="#FFF5F9"
                textColor="#C4008C"
                accentColor="#FF3D9A"
                iconPath="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                height="400px"
              />
            }
            backgroundStyle="solid"
            backgroundColor="transparent"
            imageEffect="none"
            textContentStyle="default"
          />
        </div>
        
        {/* Feature cards - moved outside of ImageTextSection for full width */}
        <div className="max-w-6xl px-4 mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-pink-100">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#FF3D9A]/10 to-[#C4008C]/10 rounded-full flex items-center justify-center">
                <Heart className="text-[#FF3D9A] h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand Promise</h3>
              <p className="text-gray-600">What you commit to deliver to your customers in every interaction.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-pink-100">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#FF3D9A]/10 to-[#C4008C]/10 rounded-full flex items-center justify-center">
                <BrainCircuit className="text-[#FF3D9A] h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand Purpose</h3>
              <p className="text-gray-600">The reason your brand exists beyond making profit.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-pink-100">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#FF3D9A]/10 to-[#C4008C]/10 rounded-full flex items-center justify-center">
                <Palette className="text-[#FF3D9A] h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand Voice & Personality</h3>
              <p className="text-gray-600">How your brand communicates and the character it portrays.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action section - not full width */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-[#FF3D9A] to-[#C4008C] px-8 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Build a brand that connects</h2>
              <p className="text-lg text-white/90 mb-8">
                Develop a brand strategy that wins both hearts and minds.
              </p>
              <button className="bg-white text-[#FF3D9A] font-semibold px-8 py-3 rounded-lg hover:bg-pink-50 transition-colors duration-300">
                Talk to our brand strategists
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartingSection;