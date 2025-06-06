"use client";
import React, { useState } from "react";
import Image from "next/image";
import mobilityimg from "@/public/images/fleet.png";  
const SmartMobilityServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mobilityServices = [
    {
      title: "Fleet Optimization",
      description: "Maximize vehicle utilization and reduce costs with intelligent routing, scheduling, and real-time monitoring. Our advanced fleet tools ensure each vehicle is used efficiently—minimizing downtime and fuel waste.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 18h.01M17 18h.01M5 17.97A9 9 0 0112.52 4c3.05 0 5.83 1.4 7.71 3.61M3 8l1.89 1.89 2.83-2.83M21 8l-1.89 1.89-2.83-2.83"/>
        </svg>
      )
    },
    {
      title: "Operational Efficiency",
      description: "Drive smarter operations through workflow automation and real-time decision-making. We implement digital platforms and IoT-based technologies that streamline tasks, reduce human error, and enhance responsiveness across your fleet operations.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "Scalable Mobility Platforms",
      description: "Whether you're managing a small shuttle network or a multi-city transport system, our modular mobility platforms adapt to your needs—supporting fixed-route services, on-demand transit, and hybrid models with ease.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
        </svg>
      )
    },
    {
      title: "Fleet Defined",
      description: "We support fleets of all sizes—from compact cars and vans to large-scale buses and commercial shuttles. Our solutions are tailored to suit your specific vehicle mix and usage model.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17c0 .5 .4 1 1 1h8c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1h-8c-.6 0-1 .4-1 1v6z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v6z"/>
        </svg>
      )
    },
    {
      title: "Multi-Modal Transit Integration",
      description: "Unify public and private transportation systems with seamless, tech-enabled coordination. We help you enable true mobility-as-a-service (MaaS) by integrating buses, ride-shares, trains, and more into one connected ecosystem.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
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
                Smart Mobility & Fleet Management
              </h2>
              <h3 className="text-xl lg:text-2xl text-slate-700 font-medium">
                Delivering intelligent, tech-driven solutions to optimize fleet performance, reduce operational costs, and power sustainable urban mobility.
              </h3>
            </div>

            {/* Mobility Services */}
            <div className="space-y-6">
              {mobilityServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-4 py-4">
                    <div className="text-[#07047F] group-hover:text-[#07047F] transition-colors mt-1">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#07047F] transition-colors">
                        {service.title}
                      </h5>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.description}
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
            <div className="relative bg-gradient-to-br from-[#07047F]/5 to-[#07047F]/5 rounded-2xl p-8 overflow-hidden">
              {/* Professional Background Pattern - Mobility Theme */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-10">
                {/* Route/Path patterns */}
                <div className="absolute top-8 right-8 w-16 h-2 bg-[#07047F]/60 rounded-full transform rotate-12"></div>
                <div className="absolute top-12 right-12 w-12 h-2 bg-[#07047F]/60 rounded-full transform -rotate-12"></div>
                <div className="absolute top-16 right-6 w-20 h-2 bg-[#07047F]/30 rounded-full transform rotate-24"></div>
                <div className="absolute top-20 right-16 w-8 h-2 bg-[#07047F]/30 rounded-full transform -rotate-24"></div>
                {/* Vehicle dots */}
                <div className="absolute top-6 right-14 w-3 h-3 bg-[#07047F] rounded-full"></div>
                <div className="absolute top-14 right-8 w-3 h-3 bg-[#07047F] rounded-full"></div>
                <div className="absolute top-22 right-20 w-3 h-3 bg-[#07047F]/60 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10">
                {/* Network/Fleet patterns */}
                <div className="absolute bottom-8 left-8 w-4 h-6 bg-[#07047F]/60 rounded"></div>
                <div className="absolute bottom-12 left-12 w-6 h-4 bg-[#07047F]/60 rounded"></div>
                <div className="absolute bottom-16 left-6 w-3 h-8 bg-[#07047F]/30 rounded"></div>
                <div className="absolute bottom-6 left-16 w-8 h-3 bg-[#07047F]/30 rounded"></div>
                <div className="absolute bottom-10 left-20 w-2 h-2 bg-[#07047F] rounded-full"></div>
                <div className="absolute bottom-18 left-10 w-2 h-2 bg-[#07047F] rounded-full"></div>
              </div>
              
              <div className="relative w-full h-96 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
                  <Image src={mobilityimg} alt="Smart Mobility" width={1000} height={1000} className="w-full h-full object-cover" />
              </div>
                 
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#07047F] to-[#07047F] rounded-2xl p-10 text-white shadow-xl">
            <h4 className="text-2xl lg:text-3xl font-bold mb-4">
              🚗 Transform Your Fleet Operations
            </h4>
            <p className="text-xl mb-8 opacity-90">
              Optimize your mobility solutions with our smart fleet management technologies.
            </p>
            <button className="bg-white text-[#07047F] hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Fleet Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMobilityServices;