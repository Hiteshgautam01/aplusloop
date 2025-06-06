"use client";
import React, { useState, useEffect } from "react";

const ITSMProcessWheel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const processes = [
    { name: "Change\nmanagement", angle: 0 },
    { name: "Release\nmanagement", angle: 36 },
    { name: "Configuration\nmanagement", angle: 72 },
    { name: "Continuous\nimprovement\nmanagement", angle: 108 },
    { name: "Incident\nmanagement", angle: 144 },
    { name: "Knowledge\nmanagement", angle: 180 },
    { name: "Problem\nmanagement", angle: 216 },
    { name: "Request\nmanagement", angle: 252 },
    { name: "Service-level\nmanagement", angle: 288 },
    { name: "Workflow and talent\nmanagement", angle: 324 }
  ];

  // Pre-calculate positions to avoid hydration mismatch
  const getProcessPosition = (angle: number, radius: number) => {
    const angleRad = (angle * Math.PI) / 180;
    const x = Math.round(Math.cos(angleRad) * radius * 100) / 100; // Round to 2 decimal places
    const y = Math.round(Math.sin(angleRad) * radius * 100) / 100; // Round to 2 decimal places
    return { x, y };
  };

  if (!isMounted) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[700px] sm:h-[750px] lg:h-[800px] xl:h-[850px] flex items-center justify-center overflow-hidden">
            <div className="animate-pulse">
              <div className="w-40 h-40 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[900px] sm:h-[950px] lg:h-[1000px] xl:h-[1100px] flex items-center justify-center overflow-visible">
          {/* Background Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] sm:w-[850px] sm:h-[850px] lg:w-[900px] lg:h-[900px] xl:w-[1000px] xl:h-[1000px] rounded-full border border-slate-200/50"></div>
            <div className="absolute w-[680px] h-[680px] sm:w-[720px] sm:h-[720px] lg:w-[760px] lg:h-[760px] xl:w-[840px] xl:h-[840px] rounded-full border border-slate-200/40"></div>
            <div className="absolute w-[560px] h-[560px] sm:w-[590px] sm:h-[590px] lg:w-[620px] lg:h-[620px] xl:w-[680px] xl:h-[680px] rounded-full border border-slate-200/30"></div>
          </div>

          {/* Center Circle */}
          <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 bg-gradient-to-br from-white to-slate-50 rounded-full flex flex-col items-center justify-center shadow-xl border border-slate-200">
            <div className="text-center">
              <div className="text-slate-700 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide">
                ITSM Processes
              </div>
            </div>
            {/* Center circle subtle glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#07047F]/5 to-slate-100/10"></div>
          </div>

          {/* Process Items */}
          {processes.map((process, index) => {
            const radius = 380; // Increased radius to prevent overlap
            const { x, y } = getProcessPosition(process.angle, radius);

            return (
              <div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Connection Line */}
                <div
                  className="absolute w-24 lg:w-28 h-px bg-gradient-to-r from-slate-300/60 to-transparent"
                  style={{
                    transform: `rotate(${process.angle + 180}deg)`,
                    transformOrigin: 'right center',
                  }}
                />
                
                {/* Process Box - Reduced width to prevent overlap */}
                <div className="relative bg-white backdrop-blur-sm border border-slate-200 rounded-2xl px-3 py-3 lg:px-4 lg:py-4 w-[140px] lg:w-[150px] xl:w-[160px] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
                  <div className="text-slate-700 text-xs lg:text-sm xl:text-base font-medium text-center leading-tight whitespace-pre-line">
                    {process.name}
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#07047F]/5 to-slate-100/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Subtle border highlight on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-[#07047F]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}

          {/* Subtle decorative dots */}
          <div className="absolute top-12 left-12 w-1.5 h-1.5 bg-[#07047F]/40 rounded-full"></div>
          <div className="absolute top-20 right-16 w-1 h-1 bg-slate-400/60 rounded-full"></div>
          <div className="absolute bottom-16 left-20 w-1 h-1 bg-slate-400/60 rounded-full"></div>
          <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-[#07047F]/40 rounded-full"></div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 lg:mt-12">
          
          
        </div>
      </div>
    </div>
  );
};

export default ITSMProcessWheel;