"use client";
import React, { useState } from "react";
import Image from "next/image";
import cloudimg from "@/public/images/cloud.jpg";

const CloudServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cloudPillars = [
    {
      title: "Cloud Information Systems",
      description: "Cloud Information Systems (CIS) are the backbone of data management in the cloud. They facilitate the storage, retrieval, and analysis of data across distributed environments. Modern CIS leverage big data analytics and AI to provide real-time insights, enhancing decision-making processes by integrating machine learning algorithms to predict trends, automate responses, and optimize operations.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      )
    },
    {
      title: "Cloud Management Platforms",
      description: "Effective management of cloud resources is crucial for operational efficiency. Cloud Management Platforms (CMPs) offer centralized control over multi-cloud environments, enabling administrators to monitor, provision, and manage resources seamlessly. Advanced CMPs incorporate AIOps (Artificial Intelligence for IT Operations) to automate routine tasks, detect anomalies, and proactively address issues, thereby reducing downtime and improving service quality.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      )
    },
    {
      title: "Hybrid Architecture Management",
      description: "Hybrid cloud architectures combine on-premises infrastructure with public and private cloud services, offering flexibility and scalability. Managing such architectures requires robust orchestration tools to ensure seamless integration and operation. Technologies like Infrastructure as Code (IaC) and container orchestration platforms (e.g., Kubernetes) enable automated deployment and management of applications across diverse environments, ensuring consistency and compliance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "Cloud Migration",
      description: "Transitioning to the cloud involves strategic planning and execution. Cloud migration strategies include Lift and Shift (moving applications without significant changes), Refactoring (modifying applications to better suit the cloud environment), and Rebuilding (redesigning applications to be cloud-native). Automation tools facilitate smooth migration by handling tasks like data transfer, configuration, and testing. Post-migration, continuous monitoring ensures performance optimization and security compliance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
        </svg>
      )
    },
    {
      title: "Workload Optimization",
      description: "Optimizing workloads ensures that applications run efficiently, utilizing resources effectively. Intelligent Workload Management (IWM) systems dynamically allocate resources based on demand, priorities, and policies. By employing AI and machine learning, IWM can predict workload patterns, automate scaling, and enhance performance. Additionally, integrating serverless computing and containerization allows for rapid deployment and scalability, further enhancing workload efficiency.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Layout with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl text-[#07047F] font-semibold mb-4">
                Cloud Services
              </h2>
              <h3 className="text-xl lg:text-2xl text-slate-700 font-medium mb-6">
                Empowering the Cloud: Five Strategic Pillars for Modern Enterprise Cloud Services
              </h3>
              <p className="text-slate-600 leading-relaxed">
                In today's digital landscape, cloud services are pivotal in driving innovation, scalability, and efficiency. 
                A comprehensive cloud strategy encompasses five key focus areas: Cloud Information Systems, Cloud Management Platforms, 
                Hybrid Architecture Management, Cloud Migration, and Workload Optimization. Leveraging the latest methodologies and 
                technologies in these domains ensures organizations remain agile and competitive.
              </p>
            </div>

            {/* Cloud Pillars */}
            <div className="space-y-6">
              {cloudPillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-4 py-4">
                    <div className="text-[#07047F] group-hover:text-[#05035F] transition-colors mt-1">
                      {pillar.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#05035F] transition-colors">
                        {pillar.title}
                      </h5>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                    <div className={`text-[#07047F]/30 group-hover:text-[#07047F] transition-all duration-300 ${
                      hoveredCard === index ? 'rotate-90' : ''
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="lg:sticky lg:top-8">
            <div className="relative bg-gradient-to-br from-[#07047F]/5 to-slate-100 rounded-2xl p-8 overflow-hidden">
              {/* Professional Background Pattern - Cloud Theme */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                {/* Cloud-like patterns */}
                <div className="absolute top-6 right-6 w-16 h-8 bg-[#07047F]/60 rounded-full"></div>
                <div className="absolute top-8 right-12 w-12 h-6 bg-slate-400 rounded-full"></div>
                <div className="absolute top-12 right-8 w-20 h-10 bg-[#07047F]/30 rounded-full"></div>
                <div className="absolute top-16 right-16 w-8 h-4 bg-slate-300 rounded-full"></div>
                <div className="absolute top-20 right-4 w-14 h-7 bg-[#07047F] rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-44 h-44 opacity-10">
                {/* Network/Connection patterns */}
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#07047F] rounded-full"></div>
                <div className="absolute bottom-12 left-16 w-3 h-3 bg-slate-400 rounded-full"></div>
                <div className="absolute bottom-16 left-12 w-3 h-3 bg-[#07047F]/60 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-3 h-3 bg-slate-500 rounded-full"></div>
                {/* Connection lines */}
                <div className="absolute bottom-8 left-11 w-5 h-0.5 bg-[#07047F]/60 transform rotate-45"></div>
                <div className="absolute bottom-14 left-15 w-4 h-0.5 bg-slate-400 transform -rotate-45"></div>
                <div className="absolute bottom-18 left-17 w-6 h-0.5 bg-[#07047F]/30 transform rotate-12"></div>
              </div>
              
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] mb-4">
                <Image src={cloudimg} alt="Cloud Services" width={1000} height={1000} className="w-full h-full object-cover" />
              </div>
              
             
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h4 className="text-2xl font-semibold text-slate-900 mb-6">
            Conclusion
          </h4>
          <p className="text-slate-600 leading-relaxed text-lg">
            Adopting a holistic approach to cloud services, focusing on these five areas, empowers organizations 
            to harness the full potential of the cloud. By integrating advanced methodologies and technologies, businesses 
            can achieve operational excellence, drive innovation, and maintain a competitive edge in the digital era.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#07047F] to-slate-700 rounded-2xl p-10 text-white shadow-xl">
            <h4 className="text-2xl lg:text-3xl font-bold mb-4">
              ☁️ Ready to Transform Your Cloud Strategy?
            </h4>
            <p className="text-xl mb-8 opacity-90">
              Let our cloud experts design and implement a comprehensive cloud solution tailored to your enterprise needs.
            </p>
            <button className="bg-white text-[#07047F] hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Cloud Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudServices;