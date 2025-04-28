'use client'
import React from 'react';
import { Button } from '@/components/ui/button';

interface BannerProps {
  onContactClick: () => void;
}

export const Banner: React.FC<BannerProps> = ({ onContactClick }) => {
  return (
    <div className="relative overflow-hidden bg-blue-900 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/ContactUs.jpg"
          alt="Contact Us Banner"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            We're Here to <span className="text-blue-300">Help</span>
          </h1>
          
          <p className="text-xl mb-8 text-blue-100 max-w-lg">
            Our dedicated team is ready to answer your questions and provide the support you need for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={onContactClick}
              className="bg-white text-blue-900 hover:bg-blue-50 font-medium px-6 py-5"
            >
              Contact Us
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-blue-200 font-medium px-6 py-5"
            >
              View Support Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};