import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target } from "lucide-react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import SectionHeader from "@/components/reusable/SectionHeader";

const StrategicAdvisory = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className=" mx-auto px-4 relative z-10">
        {/* Header Section */}
        <SectionHeader
          title="Strategic Advisory Services"
          description="Our strategic advisory services provide the insights and guidance you need to navigate today's complex business landscape and achieve sustainable growth."
          icon={<Target className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-blue-600 to-purple-600"
          layout="stacked"
          dividerStyle="gradient"
          dividerColor="from-blue-500"
          // badge="Strategic Guidance"
          badgeColor="bg-blue-100 text-blue-800"
          maxWidth="max-w-6xl"
          animationDelay={0.1}
          titleClassName="tracking-tight"
        />

        {/* Content Section */}
        <div className="mt-16">
          <ImageTextSection
            title=""
            content={
              <div className="space-y-6">
                <ul className="space-y-5">
                  <li className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      <strong className="text-blue-700">Developing digital transformation roadmaps</strong> tailored to business objectives
                    </span>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      <strong className="text-blue-700">Identifying opportunities</strong> to optimize technology investments
                    </span>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      <strong className="text-blue-700">Assessing Data Management Maturity (DMM)</strong> against known standards and providing a roadmap for improvement
                    </span>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      <strong className="text-blue-700">Conducting cybersecurity assessments</strong> to evaluate current security posture
                    </span>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      <strong className="text-blue-700">Developing cybersecurity roadmaps</strong> to address gaps and align security strategies with organizational goals
                    </span>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      <strong className="text-blue-700">Advising on organizational change management</strong> to support transformation initiatives
                    </span>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      <strong className="text-blue-700">Sustainability Roadmap Development:</strong> Aligning operations and infrastructure with environmental and regulatory standards
                    </span>
                  </li>
                </ul>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center gap-2 group">
                      Schedule a Consultation
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <button className="px-8 py-4 bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            }
            imageSrc="/business-executive.png"
            imageAlt="Strategic Advisory Consultation"
            imagePosition="left"
            borderStyle="floating"
            borderColor="blue"
            badge=""
            textContentStyle="bordered"
            decorative={true}
            backgroundColor="rgba(248, 250, 252, 0.6)"
            backgroundStyle="gradient"
            imageEffect="none"
            imageHoverEffect="zoom"
          />
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvisory;