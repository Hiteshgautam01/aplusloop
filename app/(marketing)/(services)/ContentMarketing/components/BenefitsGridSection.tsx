import React from 'react';
import SectionHeader from "@/components/reusable/SectionHeader";
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Bookmark, 
  Radio, 
  Navigation, 
  Search, 
  Shield
} from "lucide-react";

const BenefitsGridSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";
  
  // Benefit cards data
  const benefits = [
    {
      title: "Strengthen your Brand",
      description: "Reinforce your brand values through your content, and take your brand voice and messaging to a wider audience.",
      icon: <Bookmark className="h-6 w-6 text-pink-600" />
    },
    {
      title: "WOW your audience",
      description: "Make a lasting impression with relevant, captivating, and superbly-looking content. Move. Persuade. Inspire.",
      icon: <Heart className="h-6 w-6 text-pink-600" />
    },
    {
      title: "Engage Users",
      description: "Give your users clear, helpful content that makes their lives easier, and they'll keep coming back for more.",
      icon: <Users className="h-6 w-6 text-pink-600" />
    },
    {
      title: "Increase Conversion Rates",
      description: "Compel people to take action with engaging storytelling, persuasive messaging and focused calls to action.",
      icon: <TrendingUp className="h-6 w-6 text-pink-600" />
    },
    {
      title: "Persuade Through Story telling",
      description: "Hardly anything can beat a convincing, personal story – even in the business world. Tailored videos enable you to present your unique voice and personality.",
      icon: <Radio className="h-6 w-6 text-pink-600" />
    },
    {
      title: "Improve usability",
      description: "Make it easier for users to navigate your communication, find the information they need – and get things done.",
      icon: <Navigation className="h-6 w-6 text-pink-600" />
    },
    {
      title: "Better you SEO Performance",
      description: "Get your products and services found by the right people with expertly optimized SEO content.",
      icon: <Search className="h-6 w-6 text-pink-600" />
    },
    {
      title: "Build Trust & Credibility",
      description: "Create a positive impression with writing that's clear, accurate and consistent with your brand voice.",
      icon: <Shield className="h-6 w-6 text-pink-600" />
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creative Section Header */}
        <div className="relative mb-20">
          {/* Background decoration */}
          <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-pink-100 opacity-50 blur-3xl"></div>
          <div className="absolute top-20 right-0 w-40 h-40 rounded-full bg-pink-200 opacity-40 blur-3xl"></div>
          
          {/* Animated quotation marks */}
          <div className="absolute -top-14 left-0 text-9xl font-serif text-pink-200 opacity-80">"</div>
          <div className="absolute -bottom-20 right-10 text-9xl font-serif text-pink-200 opacity-80">"</div>
          
          {/* Main header content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-medium mb-4 transform -rotate-1">
                The Power of Words
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="relative inline-block">
                  <span className="relative z-10">Think words are just words?</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-200 opacity-70 transform -rotate-1"></span>
                </span>
                <br />
                <span className="text-pink-600">Think again.</span>
              </h2>
              
              <h3 className="text-xl md:text-2xl text-gray-700 mb-6">
                Here's what they can do for you.
              </h3>
              
              <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
              
              {/* Animated typing effect visual */}
              <div className="mt-10 flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg transform rotate-1">
                <div className="w-3 h-6 bg-pink-500 animate-pulse"></div>
                <div className="h-px w-32 bg-gradient-to-r from-pink-400 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-pink-300"
                  style={{ opacity: 1 - (i * 0.15) }}
                ></div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-pink-300"
                  style={{ opacity: 1 - (i * 0.15) }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="h-1 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <div className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{benefit.description}</p>
                <div className="mt-4 flex justify-end">
                  <div className="w-8 h-1 bg-pink-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional Decorative Elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl z-0"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl z-0"></div>
      </div>
    </div>
  );
};

export default BenefitsGridSection;