import React from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import { Shield, AlertTriangle, Route, Building, Users, Compass } from "lucide-react";

// Define content as arrays/objects for maintainability
const headerContent = {
  title: "City Resilience",
  description: "Advanced 3D digital twin solutions for enhancing urban disaster preparedness and emergency response capabilities.",
  paragraph1: "Preparing for natural disasters like floods, fires, or earthquakes is currently limited by fragmented data sources and static scenario planning tools, leaving cities vulnerable to catastrophic events.",
  paragraph2: "Our 3D digital twin platform integrates real-time hazard data with comprehensive urban modeling, enabling cities to visualize potential disaster scenarios, test mitigation strategies, and coordinate emergency responses across multiple agencies."
};

const featuresData = [
  {
    id: 1,
    title: "Real-time Hazard Detection",
    description: "Continuous monitoring and analysis of potential natural disaster risks with automated early warning systems.",
    icon: <AlertTriangle className="text-indigo-600 h-6 w-6" />
  },
  {
    id: 2,
    title: "Evacuation Planning",
    description: "Dynamic evacuation route modeling based on population density, infrastructure status, and disaster progression.",
    icon: <Route className="text-indigo-600 h-6 w-6" />
  },
  {
    id: 3,
    title: "Infrastructure Assessment",
    description: "Vulnerability analysis and simulation of critical infrastructure during various disaster scenarios.",
    icon: <Building className="text-indigo-600 h-6 w-6" />
  }
];

const mainContent = {
  title: "Disaster Preparedness Digital Twin",
  subtitle: "Comprehensive scenario modeling and response coordination",
  badge: "Urban Resilience",
  problem: "Preparing for natural disasters like floods, fires, or earthquakes is limited by fragmented data and static scenario planning tools. This piecemeal approach leaves cities vulnerable to unexpected emergencies and hampers effective coordination between agencies.",
  services: [
    {
      name: "Data Services",
      description: "Real-time hazard data ingestion and analysis from multiple sources"
    },
    {
      name: "Strategic Advisory Services",
      description: "Disaster scenario modeling and resilience planning with expert guidance"
    },
    {
      name: "Cloud Services",
      description: "Centralized platform for disaster simulations and multi-agency coordination"
    }
  ],
  solution: "Effective disaster preparedness relies on understanding vulnerabilities and simulating potential scenarios. Our 3D digital twin enables cities to visualize flood zones, plan evacuation routes, and assess the impact of mitigation measures like levees or firebreaks. By providing a comprehensive risk profile and response strategies, this solution helps city leaders make informed decisions that save lives and protect assets. It also fosters inter-agency coordination by offering a unified platform for scenario testing and real-time collaboration during emergencies."
};

const additionalFeaturesData = [
  {
    id: 1,
    title: "Inter-Agency Coordination",
    description: "A unified platform where emergency services, utilities, transportation authorities, and city officials can collaborate on response strategies with shared situational awareness.",
    icon: <Users className="text-indigo-600 h-5 w-5" />
  },
  {
    id: 2,
    title: "Dynamic Response Planning",
    description: "Simulation of multiple disaster scenarios allows cities to develop flexible response protocols that adapt to evolving situations rather than relying on rigid, outdated emergency plans.",
    icon: <Compass className="text-indigo-600 h-5 w-5" />
  }
];

const CityResilience = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-blue-100/20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500 opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title={headerContent.title}
          icon={<Shield size={24} className="text-white" />}
          description={headerContent.description}
          layout="stacked"
          titleSize="xl"
          titleColor="text-indigo-950"
          descriptionColor="text-indigo-900"
          dividerColor="from-indigo-600"
          badge="Disaster Preparedness"
          badgeColor="bg-indigo-100 text-indigo-800 w-fit"
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
              <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </SectionHeader>
      </div>

      {/* Main Content with Image and Text */}
      <ImageTextSection
        title={mainContent.title}
        subtitle={mainContent.subtitle}
        badge={mainContent.badge}
        borderColor="indigo"
        imagePosition="right"
        content={
          <>
            <h3 className="text-xl font-semibold mb-3 text-indigo-800">
              The Problem
            </h3>
            <p className="mb-4">{mainContent.problem}</p>

            <h3 className="text-xl font-semibold mb-3 text-indigo-800">
              Our Integrated Services
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {mainContent.services.map((service, index) => (
                <li key={index}>
                  <span className="font-medium">{service.name}:</span> {service.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-indigo-800">
              Comprehensive Solution
            </h3>
            <p>{mainContent.solution}</p>
          </>
        }
        customImage={
          <ImagePlaceholder
            title="Urban Disaster Resilience Platform"
            subtitle="3D simulation and coordination for emergency preparedness"
            bgColor="#f0f5ff"
            textColor="#3730a3"
            accentColor="#6366f1"
            iconPath="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zm4-6v6m8-6v6"
            height="400px"
          />
        }
        backgroundStyle="solid"
        backgroundColor="white"
        imageEffect="none"
        textContentStyle="default"
      />
      
      {/* Additional Features - Improved Layout */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-indigo-900 mb-8 text-center">Key Resilience Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFeaturesData.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-indigo-800 mb-2">{feature.title}</h4>
                    <p className="text-slate-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityResilience;
