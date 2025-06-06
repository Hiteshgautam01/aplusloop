"use client";
import React, { useState, useEffect } from "react";
import ApplicationServices from "./components/ApplicationServices";
import DataManagementServices from "./components/DataManagementServices";
import SmartMobilityServices from "./components/SmartMobilityServices";
import CloudServices from "./components/CloudServices";
import DevOpsServices from "./components/DevOpsServices";

const DigitalTransformationServices = () => {
  const [activeSection, setActiveSection] = useState("applications");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const sections = [
    { 
      id: "applications", 
      label: "Application Services", 
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    { 
      id: "data", 
      label: "Data Management", 
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    { 
      id: "mobility", 
      label: "Smart Mobility", 
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17c0 .5 .4 1 1 1h8c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1h-8c-.6 0-1 .4-1 1v6z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v6z"/>
        </svg>
      )
    },
    { 
      id: "cloud", 
      label: "Cloud Services", 
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
        </svg>
      )
    },
    { 
      id: "devops", 
      label: "DevOps", 
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsMenuVisible(window.scrollY > heroHeight);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="font-['Montserrat',sans-serif] bg-white min-h-screen relative">
      {/* Hero Section - With Background Image */}
      <section className="relative py-20 lg:py-32 mt-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image.png')"
          }}
        ></div>
        
        {/* Blue Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/75 to-slate-900/80"></div>
        
        {/* Additional Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight uppercase">
              DIGITAL TRANSFORMATION
            </h1>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-8">
              SERVICES
            </h4>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-5">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-y-12"></div>
        </div>
      </section>

      {/* Sticky Navigation Menu */}
      <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        isMenuVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-xl shadow-blue-500/10 px-6 py-3">
          <div className="flex space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:scale-105 transform ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50'
                }`}
              >
                <span className={`transition-colors duration-300 ${
                  activeSection === section.id ? 'text-white' : 'text-slate-500'
                }`}>
                  {section.icon}
                </span>
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-8 bg-gradient-to-b from-slate-900/5 to-transparent"></div>

      {/* Application Services Component */}
      <div id="applications">
        <ApplicationServices />
      </div>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>
      </div>

      {/* Data Management Services Component */}
      <div id="data">
        <DataManagementServices />
      </div>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-blue-50 to-green-50"></div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        </div>
      </div>

      {/* Smart Mobility Services Component */}
      <div id="mobility">
        <SmartMobilityServices />
      </div>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>
      </div>

      {/* Cloud Services Component */}
      <div id="cloud">
        <CloudServices />
      </div>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50"></div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>
      </div>

      {/* DevOps Services Component */}
      <div id="devops">
        <DevOpsServices />
      </div>

      {/* Bottom CTA Section - Emtech Style */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
            READY TO TRANSFORM YOUR BUSINESS?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our digital transformation services can modernize your enterprise platforms and drive operational excellence.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide transition-colors duration-300">
            GET STARTED TODAY
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationServices;
