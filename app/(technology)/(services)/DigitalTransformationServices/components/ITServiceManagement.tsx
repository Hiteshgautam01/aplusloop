"use client";
import React, { useState } from "react";
import ITSMProcessWheel from "./ITSMProcessWheel";

const ITServiceManagement = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const itServices = [
    {
      title: "IT Service Management (ITSM): Aligning IT Services with Business Goals",
      description: "ITSM is a strategic approach focused on designing, delivering, managing, and improving IT services to meet business needs. It encompasses processes such as incident management, problem management, change management, and service request fulfillment. By implementing ITSM, organizations ensure that IT services are delivered efficiently and effectively, enhancing user satisfaction and aligning IT operations with business objectives.",
      details: [
        "Incident Management and Resolution",
        "Problem Management and Root Cause Analysis",
        "Change Management and Service Requests",
        "Service Level Management and Monitoring",
        "User satisfaction and business alignment"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      title: "IT Operations Management (ITOM): Ensuring Optimal IT Infrastructure Performance",
      description: "ITOM involves the administration of an organization's IT infrastructure, including hardware, software, and networks. Its primary goal is to ensure the availability, performance, and capacity of IT systems. Key functions include infrastructure management, network monitoring, server management, and performance monitoring. By proactively managing these components, ITOM helps maintain seamless IT operations and supports business continuity.",
      details: [
        "Infrastructure Management and Monitoring",
        "Network Performance Optimization",
        "Server Management and Maintenance",
        "Capacity Planning and Resource Allocation",
        "Performance Monitoring and Analytics"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      )
    },
    {
      title: "IT Asset Management (ITAM): Maximizing Value from IT Assets",
      description: "ITAM is a set of business practices that combines financial, contractual, and inventory functions to support lifecycle management and strategic decision-making for the IT environment. It ensures that all IT assets, including hardware, software, and licenses, are effectively tracked, utilized, and maintained throughout their lifecycle. By implementing ITAM, organizations can optimize asset utilization, reduce costs, and ensure compliance with licensing agreements.",
      details: [
        "Asset Lifecycle Management",
        "License Management and Compliance",
        "Financial and Contractual Oversight",
        "Inventory Tracking and Optimization",
        "Strategic Decision Support"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      title: "Robotic Process Automation (RPA): Automating Repetitive IT Tasks",
      description: "RPA involves the use of software robots to automate repetitive, rule-based tasks traditionally performed by humans. In the context of IT operations, RPA can automate processes such as ticketing, incident management, user onboarding, and data entry. By integrating RPA into ITSM, ITOM, and ITAM, organizations can enhance efficiency, reduce errors, and free up IT personnel to focus on more strategic initiatives.",
      details: [
        "Automated Ticketing and Incident Management",
        "User Onboarding and Provisioning",
        "Data Entry and Report Generation",
        "Integration with ITSM, ITOM, and ITAM",
        "Enhanced Efficiency and Error Reduction"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#07047F] font-semibold mb-4">
            Automation Services
          </h2>
          <h3 className="text-xl lg:text-2xl text-slate-700 font-medium mb-6">
            IT Service Management & Operations Excellence
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              In the ever-evolving landscape of IT, organizations strive to enhance service delivery, optimize asset utilization, and streamline operations. Central to achieving these objectives are frameworks like IT Service Management (ITSM), IT Operations Management (ITOM), and IT Asset Management (ITAM), complemented by technologies such as Robotic Process Automation (RPA). Together, they form the backbone of efficient, automated, and resilient IT ecosystems.
            </p>
          </div>
        </div>

        {/* First Half of Services */}
        <div className="space-y-6 mb-5">
          {itServices.slice(0, 2).map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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

     

      <div className="max-w-7xl mx-auto px-8">
        {/* Second Half of Services */}
        <div className="space-y-6 mb-16">
          {itServices.slice(2).map((service, index) => (
            <div 
              key={index + 2} 
              className="group cursor-pointer bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setExpandedSection(index + 2)}
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
                    expandedSection === index + 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                  expandedSection === index + 2 ? 'rotate-90' : ''
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* ITSM Process Wheel Component */}
      <ITSMProcessWheel />

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-slate-50 to-[#07047F]/5 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold text-[#07047F] mb-6 text-center">
            Integrating ITSM, ITOM, ITAM, and RPA: A Unified Approach to IT Management
          </h3>
          <p className="text-slate-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            The convergence of ITSM, ITOM, ITAM, and RPA offers a holistic approach to IT management. By integrating these frameworks and technologies, organizations can achieve:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#07047F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#07047F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Enhanced Efficiency</h4>
              <p className="text-sm text-slate-600">Automation reduces manual interventions, accelerating processes and minimizing errors.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#07047F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#07047F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Improved Visibility</h4>
              <p className="text-sm text-slate-600">A unified view of IT assets and operations enables better decision-making and resource allocation.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#07047F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#07047F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Proactive Issue Resolution</h4>
              <p className="text-sm text-slate-600">Predictive analytics and automated monitoring facilitate early detection and resolution of potential issues.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#07047F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#07047F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Cost Optimization</h4>
              <p className="text-sm text-slate-600">Efficient asset management and automated processes lead to significant cost savings.</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 text-white shadow-xl">
            <h4 className="text-2xl lg:text-3xl font-bold mb-4">
              🚀 Build a Resilient IT Environment
            </h4>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              By adopting an integrated approach, organizations can build a resilient, agile, and efficient IT environment that supports their strategic objectives. In conclusion, the synergy between ITSM, ITOM, ITAM, and RPA is pivotal in modern IT operations. By leveraging these frameworks and technologies, organizations can enhance service delivery, optimize asset utilization, and drive operational excellence.
            </p>
            <button className="bg-white text-slate-800 hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get IT Management Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITServiceManagement;