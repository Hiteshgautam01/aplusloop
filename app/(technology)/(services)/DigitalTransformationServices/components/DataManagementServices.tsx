"use client";
import React, { useState } from "react";
import Image from "next/image";
import dataimg from "@/public/images/dataimg.jpg";

const DataManagementServices = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const dataServices = [
    {
      title: "Data Governance & Quality Management",
      description: "Establishing strong data foundations by enforcing accuracy, consistency, and compliance. We help businesses implement governance frameworks and quality assurance protocols that drive trust, transparency, and regulatory alignment.",
      details: [
        "Data governance frameworks and policies",
        "Data lineage and lifecycle management", 
        "Quality monitoring, validation, and cleansing",
        "Regulatory compliance (e.g., GDPR, UAE Data Law)"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      title: "Real-Time Data Processing & Edge Computing",
      description: "Accelerate decision-making with intelligent data flows from the edge to the cloud. We build robust data pipelines and integrate IoT and AI/ML systems to deliver insights when and where they matter most.",
      details: [
        "Real-time, high-frequency data ingestion",
        "IoT edge computing for reduced latency",
        "Edge-to-cloud synchronization",
        "Integration with AI/ML for real-time analytics",
        "Event-driven architecture and streaming data solutions"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "Advanced Data Analytics & AI",
      description: "Harness the power of data science to unlock meaningful insights and predict future trends. Our solutions combine statistical modeling, machine learning, and business intelligence to drive data-informed decisions.",
      details: [
        "Predictive & prescriptive analytics",
        "AI/ML model development and deployment",
        "Business intelligence dashboards",
        "Sentiment, trend & pattern analysis"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    },
    {
      title: "Data Warehousing & System Integration",
      description: "We design modern, scalable data warehouse solutions and ensure seamless integration across platforms, enabling a unified view of your business operations.",
      details: [
        "Centralized cloud & hybrid data warehouses",
        "ETL/ELT pipeline development",
        "API-based and legacy system integration",
        "Scalable architecture for structured and unstructured data"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
        </svg>
      )
    },
    {
      title: "Data Security & Privacy",
      description: "Your data deserves airtight protection. We implement best-in-class security frameworks to safeguard sensitive information and ensure compliance with evolving global and local data privacy laws.",
      details: [
        "Role-based access controls",
        "Data masking & tokenization",
        "Encryption at rest and in transit",
        "Compliance with ISO, HIPAA, GDPR, and local UAE standards"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      )
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Layout with Image - Reversed */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Image Placeholder */}
          <div className="lg:sticky lg:top-8 order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-100 to-[#07047F]/10 rounded-2xl p-8 overflow-hidden">
              {/* Professional Background Pattern - Data Theme */}
              <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
                <div className="absolute inset-0">
                  <div className="w-6 h-6 bg-[#07047F] rounded transform rotate-45 absolute top-4 left-4"></div>
                  <div className="w-4 h-4 bg-slate-400 rounded transform rotate-12 absolute top-8 left-12"></div>
                  <div className="w-8 h-8 bg-[#07047F]/30 rounded transform -rotate-30 absolute top-12 left-8"></div>
                  <div className="w-3 h-3 bg-slate-500 rounded absolute top-16 left-16"></div>
                  <div className="w-5 h-5 bg-[#07047F]/60 rounded transform rotate-60 absolute top-6 left-20"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-36 h-36 opacity-10">
                <div className="grid grid-cols-3 gap-2 p-4">
                  <div className="w-full h-6 bg-[#07047F]/60 rounded"></div>
                  <div className="w-full h-4 bg-slate-400 rounded"></div>
                  <div className="w-full h-5 bg-[#07047F]/30 rounded"></div>
                  <div className="w-full h-3 bg-slate-300 rounded"></div>
                  <div className="w-full h-6 bg-[#07047F] rounded"></div>
                  <div className="w-full h-4 bg-slate-400 rounded"></div>
                </div>
              </div>
              
              <div className="relative w-full h-96 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
            <img src={dataimg.src} alt="Data Management" width={1000} height={1000} className="w-full h-full object-cover" />
              </div>
              {/* <p className="relative text-sm text-slate-600 text-center">
                Data flow diagrams, analytics dashboards, and infrastructure visualizations
              </p> */}
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl text-[#07047F] font-semibold mb-4">
                Data Management Services
              </h2>
              <h3 className="text-xl lg:text-2xl text-slate-700 font-medium">
                From Data Integrity to Real-Time Intelligence
              </h3>
            </div>

            {/* Services */}
            <div className="space-y-6">
              {dataServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setExpandedSection(index)}
                  onMouseLeave={() => setExpandedSection(null)}
                >
                  <div className="flex items-start space-x-4 py-4">
                    <div className="text-[#07047F] group-hover:text-[#05035F] transition-colors mt-1">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#05035F] transition-colors">
                        {service.title}
                      </h4>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-[#07047F] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-600 text-sm leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`text-[#07047F]/30 group-hover:text-[#07047F] transition-all duration-300 ${
                      expandedSection === index ? 'rotate-90' : ''
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
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 text-white shadow-xl">
            <h4 className="text-2xl lg:text-3xl font-bold mb-4">
              📊 Ready to Transform Your Data Strategy?
            </h4>
            <p className="text-xl mb-8 opacity-90">
              Let our data experts help you unlock the full potential of your enterprise data.
            </p>
            <button className="bg-white text-slate-800 hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Data Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataManagementServices;