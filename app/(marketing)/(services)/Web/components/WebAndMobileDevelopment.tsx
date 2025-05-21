"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/reusable/SectionHeader';

import { Code, Layout, Smartphone, ShoppingCart, Cloud, Paintbrush, Database, FileCode } from 'lucide-react';

const WebAndMobileDevelopment = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  // Service card data
  const services = [
    {
      title: "Web Development",
      description: "Web development is the process of building visually appealing and highly functional websites and web applications. It's about transforming ideas into interactive, user-friendly digital experiences that work seamlessly across all devices.",
      icon: <Layout size={28} color="white" />,
      iconPath: "M3 3h18v18H3zM9 9h6v6H9z",
      link: null
    },
    {
      title: "Frontend Development",
      description: "The part of the website you see and interact with. Sleek, responsive design with animations. Ensures a flawless user experience on any device.",
      icon: <Code size={28} color="white" />,
      iconPath: "M16 18l6-6-6-6M8 6l-6 6 6 6",
      link: null
    },
    {
      title: "Backend Development",
      description: "The engine that powers your website. Uses frameworks like Symfony and NestJS. Builds scalable and secure API, ensuring smooth operation regardless of traffic.",
      icon: <Database size={28} color="white" />,
      iconPath: "M21 5H3m4 4h10M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z",
      link: null
    },
    {
      title: "Design Development",
      description: "Ensures consistency for a great user experience. Develops comprehensive design systems. Every element fits together perfectly, creating a cohesive and professional look.",
      icon: <Paintbrush size={28} color="white" />,
      iconPath: "M12 19l7-7 3 3-7 7-3-3z",
      link: null
    },
    {
      title: "eCommerce Development",
      description: "Builds secure, scalable platforms for online sales. Makes it easy to manage your products and sales. Helps grow your business effortlessly.",
      icon: <ShoppingCart size={28} color="white" />,
      iconPath: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
      link: null
    },
    {
      title: "Cloud",
      description: "Manages application hosting on servers. Utilises technologies like AWS and OVH. Ensures reliable, scalable, and secure infrastructure. Provides flexibility and efficiency in maintaining your web applications.",
      icon: <Cloud size={28} color="white" />,
      iconPath: "M9.88 9.88a3 3 0 1 0 4.24 4.24M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14",
      link: null
    },
    {
      title: "Mobile App Development",
      description: "Mobile apps know how to make money. SensorTower research projects that by 2025, consumer app spending will reach 270 billion dollars. This figure includes spending on paid apps, in-app purchases, and subscription plans.",
      icon: <Smartphone size={28} color="white" />,
      iconPath: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z",
      link: "/mobile-app-development"
    },
    {
      title: "CMS Development",
      description: "A content Management System generally refers to a web-based application that enables multiple users with different privilege levels to manage any type of data, content, or information of any website application, or project on the internet forum.",
      icon: <FileCode size={28} color="white" />,
      iconPath: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-white to-purple-50">
        <div className="container mx-auto px-4 pt-24 pb-1">
          <SectionHeader
            title="Elements of Web Development"
            description="Web development is the process of building visually appealing and highly functional websites and web applications. It's about transforming ideas into interactive, user-friendly digital experiences that work seamlessly across all devices."
            titleColor="text-gray-800"
            descriptionColor="text-gray-600"
            layout="centered"
            titleSize="xl"
            dividerColor={`from-[${primaryColor}]`}
            animationDelay={0.2}
            badge="Web Development"
            badgeColor={`bg-[${lightBgColor}] text-[${secondaryColor}] flex items-center justify-center`}
            icon={<Layout size={28} color="white" />}
            iconBackground={`bg-gradient-to-br from-[${primaryColor}] to-[${secondaryColor}]`}
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-4" style={{ backgroundColor: lightBgColor }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="h-full">
                {service.link ? (
                  <Link href={service.link} className="block h-full">
                    <ServiceCard 
                      service={service} 
                      index={index} 
                      primaryColor={primaryColor} 
                      secondaryColor={secondaryColor} 
                      mediumBgColor={mediumBgColor}
                    />
                  </Link>
                ) : (
                  <ServiceCard 
                    service={service} 
                    index={index} 
                    primaryColor={primaryColor} 
                    secondaryColor={secondaryColor} 
                    mediumBgColor={mediumBgColor}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, index, primaryColor, secondaryColor, mediumBgColor }: { service: any, index: number, primaryColor: string, secondaryColor: string, mediumBgColor: string }) => {
  return (
    <div 
      className="h-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-pink-100"
    >
      <div className="h-full flex flex-col">
        {/* Card Header with Icon */}
        <div className="p-6 flex items-start space-x-4">
          <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-[${primaryColor}] to-[${secondaryColor}] shadow-md`}>
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
        </div>
        
        {/* Card Content */}
        <div className="px-6 pb-6 flex-grow">
          <p className="text-gray-600">{service.description}</p>
        </div>
        
        {/* Card Footer */}
        {service.link && (
          <div className={`px-6 py-4 bg-[${mediumBgColor}] border-t border-pink-100`}>
            <span className="text-[#C4008C] font-medium flex items-center">
              Know More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebAndMobileDevelopment;