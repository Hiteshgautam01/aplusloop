"use client";
import React, { useState } from "react";

const ApplicationServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const coreOfferings = [
    {
      title: "Enterprise Platform Implementation",
      shortDescription: "Deploy industry-leading platforms",
      fullDescription: "Deploy and configure industry-leading platforms like HRMS, CRM, and ERP to streamline your human resources, customer engagement, and operational processes. Our team ensures a smooth rollout with minimal disruption.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      title: "Application Modernization",
      shortDescription: "Upgrade legacy systems",
      fullDescription: "Upgrade legacy systems to modern architectures that are faster, more secure, and compatible with today's cloud-native and AI-enabled ecosystems. We enhance your application's usability, scalability, and performance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      )
    },
    {
      title: "Custom Application Development",
      shortDescription: "Tailor-made solutions",
      fullDescription: "Get tailor-made applications built around your unique workflows and business logic. Our team of developers and architects work closely with you to design intuitive and scalable solutions for every use case.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      )
    },
    {
      title: "System Integration",
      shortDescription: "Unify your software ecosystem",
      fullDescription: "We unify your software ecosystem through seamless integrations that eliminate silos and enable real-time data sharing between applications—ensuring unified operations across departments.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "Support & Maintenance",
      shortDescription: "Ongoing reliability assurance",
      fullDescription: "Our ongoing support services cover updates, performance tuning, security monitoring, and feature enhancements to ensure your applications stay reliable and resilient over time.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
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
              <h2 className="text-3xl lg:text-4xl text-blue-600 font-semibold mb-4">
                Transforming Business Workflows through Intelligent Applications
              </h2>
              <h3 className="text-xl lg:text-2xl text-slate-700 font-medium">
                Future-Ready Applications for a Digital-First Enterprise
              </h3>
            </div>

            {/* Core Offerings */}
            <div className="space-y-6">
              {coreOfferings.map((offering, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-4 py-4">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors mt-1">
                      {offering.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {offering.title}
                      </h5>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {offering.fullDescription}
                        </p>
                      </div>
                    </div>
                    <div className={`text-blue-300 group-hover:text-blue-500 transition-all duration-300 ${
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
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 overflow-hidden">
              {/* Professional Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 bg-blue-500 rounded-full transform rotate-45 scale-75"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-slate-400 rounded-full transform -rotate-12"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 bg-blue-300 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <div className="absolute inset-0 bg-slate-500 transform rotate-12 rounded-lg"></div>
                <div className="absolute top-2 left-2 w-12 h-12 bg-blue-400 transform -rotate-45 rounded-lg"></div>
              </div>
              
              <div className="relative w-full h-96 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
                <p className="text-slate-500 font-medium text-center">SDLC Life-cycle<br/>Visual Placeholder</p>
              </div>
              <p className="relative text-sm text-slate-600 text-center">
                Show images of SDLC life-cycle. How software industry has changed the way organizations work starting from the initial days of software and today integrated and connected world
              </p>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-20">
          <h4 className="text-3xl font-bold text-slate-900 mb-12 text-center">Platforms We Work With</h4>
          <div className="overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 rounded-2xl py-8">
            <div className="flex animate-marquee">
              <div className="flex items-center space-x-10 min-w-max px-6">
                {[
                  { name: 'Oracle', logo: '/logos/oracle.png' },
                  { name: 'SAP', logo: '/logos/sap.png' },
                  { name: 'Microsoft', logo: '/logos/microsoft.png' },
                  { name: 'Zoho', logo: '/logos/zoho.png' },
                  { name: 'Salesforce', logo: '/logos/salesforce.png' },
                  { name: 'HubSpot', logo: '/logos/hubspot.png' },
                  { name: 'Workday', logo: '/logos/workday.png' },
                  { name: 'BambooHR', logo: '/logos/bamboo.png' }
                ].map((platform, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="w-28 h-18  rounded-xl flex items-center justify-center  hover:border-1 hover:border-blue-200  px-3">
                      <img 
                        src={platform.logo} 
                        alt={platform.name} 
                        className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-10 min-w-max px-6">
                {[
                  { name: 'Oracle', logo: '/logos/oracle.png' },
                  { name: 'SAP', logo: '/logos/sap.png' },
                  { name: 'Microsoft', logo: '/logos/microsoft.png' },
                  { name: 'Zoho', logo: '/logos/zoho.png' },
                  { name: 'Salesforce', logo: '/logos/salesforce.png' },
                  { name: 'HubSpot', logo: '/logos/hubspot.png' },
                  { name: 'Workday', logo: '/logos/workday.png' },
                  { name: 'BambooHR', logo: '/logos/bamboo.png' }
                ].map((platform, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="w-28 h-18  rounded-xl flex items-center justify-center  hover:border-1 hover:border-blue-200  px-3">
                      <img 
                        src={platform.logo} 
                        alt={platform.name} 
                        className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Why Choose - Simplified */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why Choose A+Loop?</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {["100% Tailored Implementation", "Agile Delivery Model", "Industry-Specific Expertise", "Enterprise-Grade Security", "Cross-Platform Compatibility", "24/7 Support & Monitoring"].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 py-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white shadow-xl">
            <h4 className="text-2xl lg:text-3xl font-bold mb-4">
              📩 Let's Talk About Your Application Needs
            </h4>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation with our solution architects today.
            </p>
            <button className="bg-white text-blue-600 hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationServices;