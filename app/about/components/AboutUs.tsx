"use client"
import React from 'react';
import VisionMission from './VissionMission';
import OurValues from './OurValues';
import UniqueApproach from './UniqueValues';
import GlobalPresence from './GlobalPresence';

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Decorative Blobs */}
      <div className="fixed top-0 right-0 w-1/3 h-screen">
        <div className="absolute top-40 -right-64 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl -z-10 animate-blob"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl -z-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="fixed top-0 left-0 w-1/3 h-screen">
        <div className="absolute bottom-40 -left-64 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl -z-10 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Wave Dividers */} 
      <div className="relative">
        
        {/* Wave separator */}
        <div className="absolute w-full h-16 overflow-hidden">
          <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1200 120" className="text-white fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      
      <VisionMission />
      
      <div className="w-full h-12 bg-gradient-to-b from-white to-gray-50/0"></div>
      
      <OurValues />
      
      <div className="w-full h-12 bg-gradient-to-b from-gray-50/0 to-white"></div>
      
      <UniqueApproach />

      
      
      <div className="w-full h-12 bg-gradient-to-b from-white to-gray-50/0"></div>
      
      {/* <GlobalPresence /> */}
      
      {/* Add custom styles for animations to the document */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
