"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ImageTextSection from '@/components/reusable/ImageTextSection';
import SectionHeader from '@/components/reusable/SectionHeader';
import { Cloud, Server, Database } from 'lucide-react';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';

const CloudServices = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Elements - using a unique cloud-inspired background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-white via-indigo-50/30 to-blue-50/50"></div>
      
      {/* Animated Cloud-like Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-blue-50/40 blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-40 right-1/5 w-80 h-80 rounded-full bg-indigo-50/30 blur-3xl animate-pulse" style={{ animationDuration: '20s' }}></div>
      
      {/* Using SectionHeader with different layout */}
      <div className="relative z-10">
        <SectionHeader
          title="Cloud Services"
          description="From infrastructure management to application migration, our cloud experts deliver flexible, secure, and scalable solutions. We specialize in hybrid cloud architectures, workload optimization, and end-to-end cloud transition strategies."
          icon={<Cloud className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-indigo-500 to-blue-600"
          layout="standard"
          dividerStyle="solid"
          dividerColor="blue-400"
        //   badge="Cloud Solutions"
          badgeColor="bg-indigo-100 text-indigo-800"
          maxWidth="max-w-6xl"
          animationDelay={0.2}
        />
      </div>
      
      {/* Services Overview with image placement */}
      <div className="relative z-10">
        <ImageTextSection
          title="CLOUD INFRASTRUCTURE & MANAGEMENT"
          content={
            <div className="space-y-6">
              <div className="space-y-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-indigo-500">
                  <h4 className="font-medium text-gray-900 mb-1">Cloud Infrastructure Services (CIS)</h4>
                  <p className="text-gray-600">Managing and maintaining cloud infrastructure, including compute, storage, and networking, with a focus on high availability and performance.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-medium text-gray-900 mb-1">Cloud Management Platform (CMP)</h4>
                  <p className="text-gray-600">Unified management for multi-cloud or hybrid cloud environments, covering resource provisioning, cost management, and governance.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-indigo-500">
                  <h4 className="font-medium text-gray-900 mb-1">Hybrid Edge-Cloud Architecture</h4>
                  <p className="text-gray-600">Combining edge-level data processing with cloud-based analytics for low-latency and scalable solutions.</p>
                </div>
              </div>
            </div>
          }
          borderStyle="floating"
          borderColor="indigo"
          badge="Infrastructure Solutions"
          imagePosition="left"
          textContentStyle="minimal"
          decorative={true}
          backgroundColor="white"
          backgroundStyle="solid"
          customImage={
            <ImagePlaceholder 
              title="Cloud Infrastructure"
              subtitle="High Performance Solutions"
              iconPath="/api/placeholder/48/48"
              accentColor="#4f46e5"
              bgColor="#e0e7ff"
              height="100%"
            />
          }
        />
      </div>
      
      {/* Migration Services */}
      <div className="relative z-10 mt-16">
        <ImageTextSection
          title="CLOUD MIGRATION STRATEGIES"
          content={
            <div className="space-y-6">
              <div className="space-y-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-medium text-gray-900 mb-1">Application Migration</h4>
                  <p className="text-gray-600">Rehosting, refactoring, and re-platforming enterprise applications for cloud environments.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-indigo-500">
                  <h4 className="font-medium text-gray-900 mb-1">Data Migration</h4>
                  <p className="text-gray-600">Securely transferring structured and unstructured data to the cloud while ensuring integrity.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-medium text-gray-900 mb-1">Workload Optimization</h4>
                  <p className="text-gray-600">Prioritizing and optimizing workloads for performance and cost-efficiency.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-indigo-500">
                  <h4 className="font-medium text-gray-900 mb-1">End-to-End Migration Strategy</h4>
                  <p className="text-gray-600">Comprehensive planning and execution, from pre-migration assessments to post-migration optimization.</p>
                </div>
              </div>
            </div>
          }
          borderStyle="tilt"
          borderColor="blue"
          badge="Migration Solutions"
          imagePosition="right"
          textContentStyle="bordered"
          decorative={true}
          backgroundColor="rgba(239, 246, 255, 0.7)"
          backgroundStyle="solid"
          customImage={
            <ImagePlaceholder 
              title="Cloud Migration"
              subtitle="Seamless Transition Strategy"
              iconPath="/api/placeholder/48/48"
              accentColor="#3b82f6"
              bgColor="#bfdbfe"
              height="100%"
            />
          }
        />
      </div>
      
      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="bg-gradient-to-b from-indigo-600 to-blue-700 rounded-xl overflow-hidden">
          <div className="px-6 py-10 md:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4 text-center">
                Ready to transform your cloud infrastructure?
              </h3>
              <p className="text-indigo-100 text-center max-w-2xl mx-auto mb-8">
                Our cloud services adapt to your specific business needs, whether you're just starting your cloud journey or optimizing existing resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                  Schedule a Consultation
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CloudServices;
