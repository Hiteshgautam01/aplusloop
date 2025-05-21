import React from "react";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import SectionHeader from "@/components/reusable/SectionHeader";
import { Smartphone, Code, Globe } from "lucide-react";

const MobileAppsSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  return (
    <div className="w-full bg-white mt-16">
      {/* Main Header Section */}
      <div className="w-full bg-gradient-to-r from-white to-pink-50 py-12">
        <SectionHeader
          title="Types of Mobile Apps"
          description="To make the mobile development cash machine work, you must make some crucial decisions. First, decide what kind of mobile app would best meet your business goals."
          titleColor="text-gray-800"
          descriptionColor="text-gray-600"
          dividerColor="from-pink-500"
          layout="centered"
          showDivider={true}
          badge="Decision Guide"
          badgeColor="bg-pink-100 text-pink-800"
          titleSize="xl"
          animation={true}
          icon={
            <div className="text-white">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2" />
                <path d="M18 8h4v4h-4z" />
                <path d="M15 14l-3-3-2 2" />
              </svg>
            </div>
          }
          iconBackground="bg-gradient-to-br from-pink-500 to-pink-600"
        />
      </div>

      {/* Native Apps Section */}
      <ImageTextSection
        title="Native Apps"
        imagePosition="left"
        borderStyle="gradient"
        borderColor="pink"
        backgroundColor={lightBgColor}
        backgroundStyle="solid"
        textContentStyle="highlighted"
        customImage={
          <ImagePlaceholder
            title="Native Applications"
            subtitle="Platform-specific development"
            width="100%"
            height="100%"
            bgColor={mediumBgColor}
            textColor="#333"
            accentColor={primaryColor}
            iconPath="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 16a1 1 0 1 1 .01-2a1 1 0 0 1 0 2z"
          />
        }
        content={
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Specifically built for one platform (iOS or Android)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Use languages, frameworks, and tools recommended by operating system providers:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 mr-2"></span>
                      <span>Swift or Objective-C for iOS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 mr-2"></span>
                      <span>Kotlin or Java for Android</span>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Direct access to device hardware features (e.g., camera, GPS, accelerometer)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Offer exceptional performance and optimal UX</span>
              </li>
            </ul>
          </div>
        }
      />

      {/* Cross-platform Apps Section */}
      <ImageTextSection
        title="Cross-platform/Hybrid Apps"
        imagePosition="left"
        borderStyle="floating"
        borderColor="pink"
        backgroundColor="transparent"
        backgroundStyle="none"
        textContentStyle="bordered"
        customImage={
          <ImagePlaceholder
            title="Cross-platform Apps"
            subtitle="Write once, deploy everywhere"
            width="100%"
            height="100%"
            bgColor={mediumBgColor}
            textColor="#333"
            accentColor={primaryColor}
            iconPath="M16 18l6-6-6-6M8 6l-6 6 6 6"
          />
        }
        content={
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Developed with web technologies (HTML, CSS, JavaScript)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Use frameworks like React Native, Xamarin, or Flutter</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Leverage a single source code for multiple platforms</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Ensures faster time-to-market and reduces development costs</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Deliver performance and user experience close to native apps</span>
              </li>
            </ul>
          </div>
        }
      />

      {/* Progressive Web Apps Section */}
      <ImageTextSection
        title="Web Apps (Progressive Web Apps, PWA)"
        imagePosition="left"
        borderStyle="neon"
        borderColor="pink"
        backgroundColor={lightBgColor}
        backgroundStyle="solid"
        textContentStyle="card"
        customImage={
          <ImagePlaceholder
            title="Progressive Web Apps"
            subtitle="Browser-based applications"
            width="100%"
            height="100%"
            bgColor={mediumBgColor}
            textColor="#333"
            accentColor={primaryColor}
            iconPath="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z M3.6 9h16.8 M3.6 15h16.8 M12 3a15 15 0 0 1 0 18"
          />
        }
        content={
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Internet applications using web technologies to provide native app-like experiences</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Operate within a browser or on the device's home screen</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 text-pink-700 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Offer features such as offline functionality, push notifications, and limited access to device hardware</span>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default MobileAppsSection;