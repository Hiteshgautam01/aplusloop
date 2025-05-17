"use client"
import React from 'react';
import { ArrowRight, BarChart, FileText } from 'lucide-react';

const PremiumCTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden z-10 mt-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-950/30 to-transparent"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Highlight tag */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-700/20 rounded-full backdrop-blur-sm border border-blue-700/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="text-sm font-medium text-blue-100">Transform Your Business</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            </div>
          </div>
          
          {/* Main heading with enhanced typography */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
              Elevate Your Business with Intelligent Solutions
            </span>
          </h2>
          
          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-700/70 to-indigo-700/70 rounded-full"></div>
          </div>
          
          {/* Description with refined typography */}
          <p className="text-xl text-blue-100/90 text-center mb-12 leading-relaxed">
            Get a comprehensive ROI assessment and discover how our premium solutions can drive 
            measurable outcomes while optimizing operational efficiency for your organization.
          </p>
          
          {/* Action buttons with premium styling */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {/* Primary button */}
            <a 
              href="/roi-assessment" 
              className="group relative flex items-center justify-center w-full sm:w-auto"
            >
              {/* Button background with layered effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-xl"></div>
              <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] rounded-xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white to-blue-100 rounded-xl"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-2 px-8 py-4">
                <BarChart className="w-5 h-5 text-blue-900" />
                <span className="font-semibold text-blue-900">Get ROI Assessment</span>
                <div className="p-1 rounded-full bg-blue-100 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                </div>
              </div>
              
              {/* Shine effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out rounded-xl"></div> */}
            </a>
            
            {/* Secondary button */}
            <a 
              href="/case-studies" 
              className="group relative flex items-center justify-center w-full sm:w-auto"
            >
              {/* Button background with glass effect */}
              <div className="absolute inset-0 bg-blue-800/10 backdrop-blur-sm rounded-xl border border-white/10"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 rounded-xl"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-2 px-8 py-4">
                <FileText className="w-5 h-5 text-white" />
                <span className="font-semibold text-white">View Case Studies</span>
                <div className="p-1 rounded-full bg-white/10 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </a>
          </div>
          
          {/* Trust indicators */}
          {/* <div className="mt-12 flex flex-col items-center">
            <p className="text-blue-300/70 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-70">
              <div className="w-16 h-8 bg-white/10 rounded-md"></div>
              <div className="w-20 h-8 bg-white/10 rounded-md"></div>
              <div className="w-18 h-8 bg-white/10 rounded-md"></div>
              <div className="w-24 h-8 bg-white/10 rounded-md"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PremiumCTASection;