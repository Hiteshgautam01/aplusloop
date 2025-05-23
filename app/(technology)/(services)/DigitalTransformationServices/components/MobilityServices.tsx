"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ImageTextSection from '@/components/reusable/ImageTextSection';
import SectionHeader from '@/components/reusable/SectionHeader';
import { Car, Route, Cog, Navigation, Bus, CheckCircle } from 'lucide-react';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';
import SmartMobilitySection from './SmartMobilitySolution';

const MobilityServices = () => {
  return (
    <div className="relative pb-20 overflow-hidden bg-gradient-to-tr from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Elements - different from other sections */}
      {/* <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-indigo-200/20 blur-3xl"></div> */}
      
      {/* Using our new SectionHeader component with stacked layout and different styling */}
      <SectionHeader
        title="Mobility Services"
        description="We design scalable, technology-driven mobility platforms for fleet optimization, route planning, and public-private transport integration. Our solutions improve efficiency, reduce operational costs, and adapt to evolving transportation demands."
        icon={<Navigation className="w-8 h-8 text-blue-600" />}
        layout="centered"
        dividerStyle="dashed"
        dividerColor="from-blue-500"
        // badge="Transportation Technology"
        // badgeColor="bg-blue-100 text-blue-800"
        maxWidth="max-w-6xl"
        animationDelay={0.2}
        titleClassName="tracking-tight"
        blueBg={true}
      />
      
      {/* ImageTextSection with concise bullet points only */}
      {/* <div className="relative z-10 mt-10">
        <ImageTextSection
          title="MOBILITY SOLUTIONS OVERVIEW"
          content={
            <div className="space-y-4">
              <p className="text-base mb-6">
                Our comprehensive mobility services focus on four key areas:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Fleet Optimization</strong>: Enhancing vehicle utilization and minimizing operational costs.</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Operational Efficiency</strong>: Streamlining workflows and improving real-time decision-making.</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Scalable Mobility Platforms</strong>: Supporting diverse fleet sizes and operational models.</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Multi-modal Transit Integration</strong>: Connecting public and private transportation systems.</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Fleet Definition:</span> "Fleet" refers to road vehicles, ranging from small passenger vehicles (e.g., cars, vans) to larger transport vehicles (e.g., buses, shuttles).
                </p>
              </div>
            </div>
          }
          borderStyle="tilt"
          borderColor="blue"
          badge="Mobility Innovation"
          imagePosition="left"
          textContentStyle="bordered"
          decorative={true}
          backgroundColor="rgba(245, 248, 255, 0.7)" // Light blue with transparency
          backgroundStyle="solid"
          imageEffect="saturation"
          customImage={
            <ImagePlaceholder 
              title="Mobility Solutions"
              subtitle="Smart Transportation Systems"
              iconPath="/api/placeholder/48/48"
              accentColor="#0047FF"
              bgColor="#F5F8FF"
              height="100%"
            />
          }
        />
      </div> */}
      <SmartMobilitySection />
    </div>
  );
};

export default MobilityServices;