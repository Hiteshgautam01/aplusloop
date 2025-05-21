import React from "react";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import SectionHeader from "@/components/reusable/SectionHeader";
import { Database, FileText, Settings, Layout, Edit, Server, Code } from "lucide-react";

const CMSSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  return (  
    <div className="w-full bg-white mt-16">
      {/* Main Header */}
      <div className="w-full bg-gradient-to-b from-white to-pink-50 py-16">
        <SectionHeader
          title="CMS Development"
          description="A content Management System generally refers to a web-based application that enables multiple users with different privilege levels to manage any type of data, content, or information of any website application, or project on the internet forum."
          titleColor="text-gray-800"
          descriptionColor="text-gray-600"
          dividerColor="from-pink-500"
          layout="centered"
          titleSize="2xl"
          badgeColor="bg-pink-100 text-pink-800"
          badge="Expert Solutions"
          iconBackground="bg-gradient-to-br from-pink-500 to-pink-600"
          animation={true}
          icon={
            <div className="text-white">
              <Code className="h-6 w-6" />
            </div>
          }
        />
      </div>
      
      {/* First CMS Section - Image on Left */}
      <ImageTextSection
        title="Integrate your website's content through management"
        imagePosition="left"
        borderStyle="shadow"
        borderColor="pink"
        backgroundColor="transparent"
        backgroundStyle="none"
        textContentStyle="default"
        badge="Content Management"
        customImage={
          <ImagePlaceholder
            title="Website Content Management"
            subtitle="The heart of your digital presence"
            width="100%"
            height="100%"
            bgColor={mediumBgColor}
            textColor="#333"
            accentColor={primaryColor}
            iconPath="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6 M14 3v5h5 M18 21v-6 M15 18h6 M12 12v9"
          />
        }
        content={
          <div className="space-y-4">
            <p>
              If the website is a skeleton, then Content Management System is its heart. At the core of any website development, content management is essential for its successful run. But the irony of the fact is that marketers or companies barely know about this feature whenever they are designing their website. As a result, they compromise on a lot of benefits. As a digital agency, Red Berries Digital has made it a point to facilitate awareness around CMS integration to a website.
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Relevance of CMS</h3>
              <p>
                Besides content marketing, <span className="font-semibold">Content Management</span> Systems also bring other exciting benefits. These include high ranking on search engines which is possible with an incredible Content Strategy. An essential way to leverage the power of content is the easy and seamless way of uploading through content management systems.
              </p>
              <p className="mt-3">
                Nowadays, a lot of marketers in UAE are getting particular, not just about the website's UX and design, but also towards the nitty-gritty of SEO and On-site conversions. For all such individuals, Content Management System is sort of a revelation that can bring the desired benefits of ROI on Digital Spends.
              </p>
            </div>
          </div>
        }
      />

      <div className="w-full py-16 bg-gradient-to-r from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Edit className="h-5 w-5 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Simple Content Editing</h3>
                <p className="text-gray-600">Intuitive interfaces that make updating your website content quick and easy, even for non-technical users.</p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Database className="h-5 w-5 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Centralized Management</h3>
                <p className="text-gray-600">Store and organize all your digital assets and content in one secure, accessible location.</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Server className="h-5 w-5 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">Grow your website without limitations using a flexible system that adapts to your changing needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second CMS Section - Image on Right */}
      <ImageTextSection
        title="Why your website needs CMS?"
        imagePosition="right"
        borderStyle="default"
        borderColor="pink"
        backgroundColor={lightBgColor}
        backgroundStyle="solid"
        textContentStyle="default"
        customImage={
          <ImagePlaceholder
            title="CMS Benefits"
            subtitle="Take control of your content"
            width="100%"
            height="100%"
            bgColor={mediumBgColor}
            textColor="#333"
            accentColor={primaryColor}
            iconPath="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M7.5 4.21l4.5 2.6l4.5-2.6 M7.5 19.79V14.6L3 12 M21 12l-4.5 2.6v5.19 M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12"
          />
        }
        content={
          <div className="space-y-4">
            <p>
              The advantages are many if you wish to have a dynamic website. It brings a lot of independence to you as a marketer, if you wish to update content, as and when you want. You won't have to rely on your digital agency to publish content. If you have hired an agency for content marketing, still the control will be in your hands.
            </p>
            
            <p>
              You can check the content (blog, article, video, etc) and analyse if it resonates with your brand's tonality before publishing. You can even share your views independently over your blog, without any dependency in a more frequent manner. Isn't it great?
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Management System in Dubai, UAE</h3>
              <p>
                At APLUSLOOP Marketing our main aim is to generate value for our clients, and Content Management System UAE is one way with which we achieve our mission. From beginning of website development to the ideal CMS, from website design to content writing, we bring it all on the table for a fruitful partnership with our clients.
              </p>
              <p className="mt-3">
                If you're looking for a web design company in Dubai? Get in touch with us. Let's have a conversation about how we can help find a way to make users say "wow" to your website or app.
              </p>
              
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-md hover:from-pink-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200">
                  <span>Contact Us Today</span>
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        }
      />

      {/* Final CTA Section */}
      <div className="w-full py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to take control of your content?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our CMS solutions are tailored to your business needs, providing you with the tools to manage your website effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-md hover:from-pink-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200">
              <span>Schedule a Demo</span>
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-pink-600 bg-white border border-pink-200 rounded-lg shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSSection;