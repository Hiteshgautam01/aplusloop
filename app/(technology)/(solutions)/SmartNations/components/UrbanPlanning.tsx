import React from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import { Building2, Map, Layers } from "lucide-react";

// Define content as arrays/objects for maintainability
const headerContent = {
  title: "Urban Planning",
  description: "3D digital twin solutions for designing efficient, accessible, and sustainable urban spaces.",
  paragraph1: "Traditional urban planning faces limitations due to static 2D models and disconnected datasets, constraining the ability to create truly optimized city spaces."
};

const featuresData = [
  {
    id: 1,
    title: "Integrated Urban Design",
    description: "Comprehensive approach to city planning that connects previously siloed datasets for better decision-making.",
    icon: <Building2 className="text-blue-400 h-6 w-6" />
  },
  {
    id: 2,
    title: "Advanced Visualization",
    description: "Transform abstract planning concepts into tangible 3D models for better stakeholder understanding and engagement.",
    icon: <Layers className="text-blue-400 h-6 w-6" />
  },
  {
    id: 3,
    title: "Impact Prediction",
    description: "Forecast the effects of urban development on traffic, accessibility, and environmental factors before implementation.",
    icon: <Map className="text-blue-400 h-6 w-6" />
  }
];

const mainContent = {
  title: "Urban Planning Digital Twin",
  subtitle: "Data-driven spatial planning for livable cities",
  badge: "Urban Development",
  problem: "Designing efficient, accessible, and sustainable urban spaces is constrained by static 2D models and disconnected datasets.",
  services: [
    {
      name: "Data Services",
      description: "Geospatial data integration and analysis for comprehensive urban planning."
    },
    {
      name: "Automation Services",
      description: "Workflow automation for urban design to streamline planning processes."
    },
    {
      name: "Cloud Services",
      description: "Centralized platform for interactive urban planning and stakeholder collaboration."
    }
  ],
  solution: "Urban planners face pressure to meet growing demands for housing, mobility, and green spaces while maintaining sustainability. A 3D digital twin allows stakeholders to evaluate the impact of new developments on traffic, accessibility, and the environment before construction begins. By visualizing pedestrian flow, vehicle traffic, and shadow impacts of buildings, cities can create designs that enhance livability and economic activity. This solution also supports citizen engagement by offering interactive platforms where residents can provide feedback on proposed changes."
};

const UrbanPlanning = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-600 opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-700 opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title={headerContent.title}
          icon={<Building2 size={24} className="text-white" />}
          description={headerContent.description}
          layout="stacked"
          titleSize="xl"
          titleColor="text-blue-950"
          descriptionColor="text-blue-900"
          dividerColor="from-blue-700"
          badge="City Development"
          badgeColor="bg-blue-100 text-blue-800 w-fit"
          className="max-w-6xl mx-auto px-4"
          animation={true}
        >
          <p className="text-slate-700 max-w-3xl mt-6">
            {headerContent.paragraph1}
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
      <div className="bg-white ">
        <ImageTextSection
          title={mainContent.title}
          subtitle={mainContent.subtitle}
          badge={mainContent.badge}
          borderColor="blue"
          imagePosition="right"
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
              title="Urban Planning Digital Twin"
              subtitle="Interactive 3D modeling for city development"
              bgColor="#eff6ff"
              textColor="#1e40af"
              accentColor="#3b82f6"
              iconPath="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              height="400px"
            />
          }
          backgroundStyle="solid"
          backgroundColor="white"
          imageEffect="none"
          textContentStyle="default"
        />
      </div>
    </section>
  );
};

export default UrbanPlanning;