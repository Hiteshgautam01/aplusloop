"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import icons from tech-stack-icons package
import StackIcon from 'tech-stack-icons';

// Define the tech stack item type for TypeScript
interface TechStackItem {
  name: string;
  color: string;
  iconName: string;
  imageSrc: string;
}

// List of icon names we know aren't available in the package
const UNAVAILABLE_ICONS = ['symfony', 'reactnative'];

// Tech stack data - exported for reuse in other components
export const techStackData: TechStackItem[] = [
  { 
    name: "TypeScript", 
    color: "#007ACC", 
    iconName: "typescript",
    imageSrc: "/icons/typescript.png"
  },
  { 
    name: "Node.js", 
    color: "#339933", 
    iconName: "nodejs",
    imageSrc: "/icons/nodejs.png"
  },
  { 
    name: "PHP", 
    color: "#777BB4", 
    iconName: "php",
    imageSrc: "/icons/php.png"
  },
  { 
    name: "GO", 
    color: "#00ADD8", 
    iconName: "go",
    imageSrc: "/icons/go.png"
  },
  { 
    name: "AWS", 
    color: "#FF9900", 
    iconName: "aws",
    imageSrc: "/icons/aws.png"
  },
  { 
    name: "React", 
    color: "#61DAFB", 
    iconName: "reactjs",
    imageSrc: "/icons/react.png"
  },
//   { 
//     name: "React Native", 
//     color: "#61DAFB", 
//     iconName: "reactnative",
//     imageSrc: "/icons/react-native.png"
//   },
  { 
    name: "Next.js", 
    color: "#000000", 
    iconName: "nextjs",
    imageSrc: "/icons/nextjs.png"
  },
  // Removed from main display since we're showing only 8 items (to leave room for the "See all" card)
  // This can still be used in the full tech stack page
//   { 
//     name: "Symfony", 
//     color: "#000000", 
//     iconName: "symfony",
//     imageSrc: "/icons/symfony.png"
//   },
];

const TechLogo: React.FC = () => {
  // Display only the first 8 items in the main grid
  const displayItems = techStackData.slice(0, 8);
  
  // Check if an icon exists in tech-stack-icons based on our known list
  const iconShouldRender = (iconName: string): boolean => {
    return !UNAVAILABLE_ICONS.includes(iconName);
  };
  
  return (
    <div className="py-10 px-4 bg-gradient-to-b from-white to-[#FFF5F9]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
          Our modern full-stack tech. <span className="text-[#FF3D9A]">Built for performance.</span>
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to deliver scalable, high-performance solutions.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {displayItems.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-pink-50 group py-12"
            >
              <div className="w-full h-14 flex items-center justify-center mb-1">
                {tech.iconName && iconShouldRender(tech.iconName) ? (
                  // Use StackIcon component only for icons we know are available
                          <div className="w-14 h-14 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                              
                    <StackIcon name={tech.iconName} />
                  </div>
                ) : tech.imageSrc ? (
                  // Fallback to image when iconName doesn't exist or is not available
                  <div className="w-10 h-10 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={tech.imageSrc} 
                      alt={`${tech.name} logo`} 
                      width={40} 
                      height={40}
                      className="object-contain" 
                    />
                  </div>
                ) : (
                  // Text fallback if neither iconName nor imageSrc works
                  <div className="w-10 h-10 rounded-md bg-[#FFE0F0] flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ backgroundColor: tech.color || "#FF3D9A" }}
                    ></div>
                    <div className="relative z-10 font-bold text-[#C4008C] text-center text-sm">
                      {tech.name.charAt(0)}
                    </div>
                  </div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
            </div>
          ))}
          
          {/* "See our whole tech stack" card */}
          <Link href="/tech-stack" className="block">
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-br from-[#FF3D9A] to-[#C4008C] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full text-white group">
              <div className="w-full h-14 flex items-center justify-center mb-1">
                <div className="w-10 h-10 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                  {/* Grid pattern icon representing "all tech" */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
              </div>
              <span className="text-xs font-medium text-center">See our whole tech stack</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechLogo;