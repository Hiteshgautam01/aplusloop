import React from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import { Globe, Wind, BarChart2 } from "lucide-react";

const CityHealth = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-blue-100/20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="City Health"
          icon={<Globe size={24} className="text-white" />}
          description="Comprehensive 3D digital twin solutions for monitoring, analyzing, and improving air quality across urban environments."
          layout="stacked"
          titleSize="xl"
          titleColor="text-blue-950"
          descriptionColor="text-blue-900"
          dividerColor="from-blue-600"
          badge="Environmental Innovation"
          badgeColor="bg-blue-100 text-blue-800 w-fit"
          className="max-w-6xl mx-auto px-4"
          animation={true}
        >
          <p className="text-slate-700 max-w-3xl mt-6">
            Our advanced digital twin technology creates highly detailed 3D
            models of urban environments to track, visualize, and predict air
            quality patterns across all elevations - not just at ground level.
          </p>
          <p className="text-slate-700 max-w-3xl mt-4">
            By combining IoT sensor networks, satellite data, and advanced AI
            algorithms, we empower city planners and environmental agencies to
            make data-driven decisions for creating healthier, more sustainable
            urban spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Wind className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Real-Time Monitoring
              </h3>
              <p className="text-slate-600">
                Continuous air quality tracking across vertical and horizontal
                urban spaces with high spatial resolution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Predictive Analytics
              </h3>
              <p className="text-slate-600">
                AI-powered forecasting to predict pollution patterns and
                identify potential health risk zones before they develop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Intervention Simulation
              </h3>
              <p className="text-slate-600">
                Test and visualize the impact of potential environmental
                policies before implementation.
              </p>
            </div>
          </div>
        </SectionHeader>
      </div>

      {/* Main Content with Image and Text */}
      <ImageTextSection
        title="3D Air Quality Digital Twin"
        subtitle="Advanced vertical and horizontal pollution monitoring"
        badge="Environmental Health"
        borderColor="blue"
        imagePosition="left"
        content={
          <>
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              The Challenge
            </h3>
            <p className="mb-4">
              Traditional air quality monitoring relies on sparse ground-level
              data points, missing critical vertical pollutant distribution.
              This limited approach creates blind spots in urban environments,
              making it difficult for city planners to identify pollution
              hotspots and implement targeted mitigation strategies.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              Our Integrated Approach
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="font-medium">Data Services:</span> Multi-source
                environmental data integration across different elevations
              </li>
              <li>
                <span className="font-medium">Automation Services:</span>{" "}
                Real-time air quality processing workflows with predictive
                capabilities
              </li>
              <li>
                <span className="font-medium">Cloud Services:</span> Centralized
                3D pollutant visualization and intervention simulation
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              Comprehensive Solution
            </h3>
            <p>
              Our 3D digital twin technology enables cities to improve public
              health by precisely mapping pollution patterns across all
              elevations. Urban planners and environmental agencies can test
              interventions like traffic rerouting or green corridor placement
              before implementation. This evidence-based approach ensures
              targeted actions such as zone-specific industrial emission
              regulations, supporting long-term sustainability goals while
              providing clear visual communication with all stakeholders.
            </p>
          </>
        }
        customImage={
          <ImagePlaceholder
            title="3D Urban Air Quality Monitoring"
            subtitle="Vertical & horizontal pollution mapping with digital twin technology"
            bgColor="#f0f7ff"
            textColor="#1e40af"
            accentColor="#3b82f6"
            iconPath="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            height="400px"
          />
        }
        backgroundStyle="solid"
        backgroundColor="white"
        imageEffect="none"
        textContentStyle="default"
      />
    </section>
  );
};

export default CityHealth;
