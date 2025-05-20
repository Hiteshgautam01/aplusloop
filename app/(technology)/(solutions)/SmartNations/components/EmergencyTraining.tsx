import React from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import { Workflow, Activity, Clock, Zap, Radio, Users, SirenIcon, HeadphonesIcon } from "lucide-react";

// Define content as arrays/objects for maintainability
const headerContent = {
  title: "Emergency Training",
  description: "Advanced digital twin solutions for realistic emergency response training and enhanced situational awareness during crisis events.",
  paragraph1: "Emergency personnel often lack realistic training tools and struggle with situational awareness during high-stakes crises, resulting in inefficient response coordination and potentially increased risk to human life.",
  paragraph2: "Our digital twin platform provides immersive training environments for emergency responders while enabling real-time data integration and coordination during actual crisis events, dramatically improving response effectiveness."
};

const featuresData = [
  {
    id: 1,
    title: "Immersive Scenario Training",
    description: "Virtual environments that simulate various emergency scenarios with dynamic variables for comprehensive response practice.",
    icon: <SirenIcon className="text-blue-400 h-6 w-6" />
  },
  {
    id: 2,
    title: "Real-time Data Integration",
    description: "Seamless incorporation of live data feeds during actual emergencies for enhanced situational awareness.",
    icon: <Activity className="text-blue-400 h-6 w-6" />
  },
  {
    id: 3,
    title: "Coordinated Response",
    description: "Unified command interface that facilitates multi-agency collaboration during complex emergency situations.",
    icon: <HeadphonesIcon className="text-blue-400 h-6 w-6" />
  }
];

const mainContent = {
  title: "Emergency Response Digital Twin",
  subtitle: "Training and coordination for high-stakes crisis scenarios",
  badge: "First Responder Solutions",
  problem: "Emergency personnel lack realistic training tools and struggle with situational awareness during high-stakes crises, making it difficult to coordinate effectively when seconds count.",
  services: [
    {
      name: "Data Services",
      description: "Integration of real-time incident data from multiple sources including IoT sensors, traffic cameras, and mobile response units"
    },
    {
      name: "Automation Services",
      description: "Crisis scenario simulation workflows with configurable parameters for comprehensive training scenarios"
    },
    {
      name: "Cloud Services",
      description: "Centralized training and response coordination platform accessible across agencies and jurisdictions"
    }
  ],
  solution: "Realistic training and rapid response are critical to handling emergencies like industrial fires or mass evacuations. A 3D digital twin creates immersive environments for training personnel under simulated conditions, improving their readiness for rare but high-impact events. During live crises, the solution enhances situational awareness by integrating real-time data, enabling emergency teams to quickly assess risks and coordinate responses. This proactive approach minimizes damage and enhances public trust in city management."
};

const additionalFeaturesData = [
  {
    id: 1,
    title: "After-Action Review",
    description: "Comprehensive analytics and playback capabilities allow teams to review their performance after training sessions or actual emergencies, identifying areas for improvement.",
    icon: <Clock className="text-blue-400 h-5 w-5" />
  },
  {
    id: 2,
    title: "Multi-Agency Integration",
    description: "Seamless communication channels between fire, police, medical, and utility services within a single platform, eliminating siloed response efforts.",
    icon: <Radio className="text-blue-400 h-5 w-5" />
  }
];

const EmergencyTraining = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-600 opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-700 opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title={headerContent.title}
          icon={<Workflow size={24} className="text-white" />}
          description={headerContent.description}
          layout="stacked"
          titleSize="xl"
          titleColor="text-blue-950"
          descriptionColor="text-blue-900"
          dividerColor="from-blue-700"
          badge="Crisis Response"
          badgeColor="bg-blue-100 text-blue-800 w-fit"
          className="max-w-6xl mx-auto px-4"
          animation={true}
        >
          <p className="text-slate-700 max-w-3xl mt-6">
            {headerContent.paragraph1}
          </p>
          <p className="text-slate-700 max-w-3xl mt-4">
            {headerContent.paragraph2}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {featuresData.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm border border-blue-200 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </SectionHeader>
      </div>

      {/* Main Content with Image and Text */}
      <div className="bg-white py-16">
        <ImageTextSection
          title={mainContent.title}
          subtitle={mainContent.subtitle}
          badge={mainContent.badge}
          borderColor="blue"
          imagePosition="left"
          content={
            <>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                The Problem
              </h3>
              <p className="mb-4">{mainContent.problem}</p>

              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Our Integrated Services
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {mainContent.services.map((service, index) => (
                  <li key={index}>
                    <span className="font-medium">{service.name}:</span> {service.description}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Comprehensive Solution
              </h3>
              <p>{mainContent.solution}</p>
            </>
          }
          customImage={
            <ImagePlaceholder
              title="Emergency Response Training Platform"
              subtitle="Immersive digital twin technology for crisis preparedness"
              bgColor="#eff6ff"
              textColor="#1e40af"
              accentColor="#3b82f6"
              iconPath="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              height="400px"
            />
          }
          backgroundStyle="solid"
          backgroundColor="white"
          imageEffect="none"
          textContentStyle="default"
        />
      </div>
      
      {/* Key Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Training & Response Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFeaturesData.map((feature) => (
              <div key={feature.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-sm border border-blue-200 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">{feature.title}</h4>
                    <p className="text-slate-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Statistics Section - Additional element to differentiate */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Impact of Emergency Training</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="text-white h-5 w-5" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">38%</h4>
                <p className="text-white/80 text-sm">Faster response time</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-white h-5 w-5" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">87%</h4>
                <p className="text-white/80 text-sm">Improved coordination</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">64%</h4>
                <p className="text-white/80 text-sm">Reduced decision time</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Radio className="text-white h-5 w-5" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">93%</h4>
                <p className="text-white/80 text-sm">Increased confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyTraining;