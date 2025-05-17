"use client"
import React from 'react';
import { 
  Zap, Shield, Briefcase, Users, Building2, Smartphone, 
  Cpu, Lock, Globe, PenTool, Palette, MonitorSmartphone, 
  FileText, Camera, Megaphone, ArrowRight, ChevronRight
} from 'lucide-react';

// Custom Workflow icon since it's not in lucide-react
const Workflow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M6 9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
  </svg>
);

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType; // This allows for any React component or HTML element
  href: string;
}

const TechnologyAndMarketing = () => {
  // Technology data
  const techServices: ServiceItem[] = [
    {
      title: "Digital Transformation",
      description: "Reimagine your business processes and customer experiences",
      icon: Zap,
      href: "/DigitalTransformationServices",
    },
    {
      title: "Info Security Services",
      description: "Protect your business with enterprise-grade security",
      icon: Shield,
      href: "/InfoSecurityServices",
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance to optimize your operations",
      icon: Briefcase,
      href: "/BusinessConsultingServices",
    },
    {
      title: "IT Staff Augmentation",
      description: "Scale your team with specialized technical talent",
      icon: Users,
      href: "/StaffingServices",
    },
  ];

  const techSolutions: ServiceItem[] = [
    {
      title: "Business & Infrastructure",
      description: "Scalable infrastructure for growing enterprises",
      icon: Building2,
      href: "/BusinessInfrastructureSolutions",
    },
    {
      title: "Mobility Solutions",
      description: "Enterprise-grade mobile applications and strategies",
      icon: Smartphone,
      href: "/MobilitySolutions",
    },
    {
      title: "Digital Transformation",
      description: "Complete digital overhaul for legacy systems",
      icon: Workflow,
      href: "/digital-transformation-solution",
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection for digital assets",
      icon: Lock,
      href: "/CybersecuritySolutions",
    },
    {
      title: "Industry 4.0 & IOT",
      description: "Smart manufacturing and connected devices",
      icon: Cpu,
      href: "/IndustryIOT",
    },
    {
      title: "Smart Nations Solutions",
      description: "Technology infrastructure for smart cities",
      icon: Globe,
      href: "/SmartNations",
    },
  ];

  // Marketing data
  const marketingServices: ServiceItem[] = [
    {
      title: "Design Services",
      description: "Intuitive UI/UX and visually stunning designs",
      icon: PenTool,
      href: "/design-services",
    },
    {
      title: "Branding & Creative",
      description: "Identity development and creative direction",
      icon: Palette,
      href: "/branding-creative",
    },
    {
      title: "WEB Services",
      description: "High-performance websites and applications",
      icon: MonitorSmartphone,
      href: "/web-services",
    },
    {
      title: "Content Marketing",
      description: "Engaging content that converts and builds trust",
      icon: FileText,
      href: "/content-marketing",
    },
    {
      title: "Photography & Videography",
      description: "Professional visual content production",
      icon: Camera,
      href: "/photography-videography",
    },
  ];

  const marketingSolutions: ServiceItem[] = [
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns across all digital channels",
      icon: Megaphone,
      href: "/digital-marketing",
    },
  ];

  // Helper function to render icon
  const renderIcon = (Icon: React.ElementType, className: string) => {
    return <Icon className={className} />;
  };

  return (
    <section className="py-20 relative overflow-hidden w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20 relative">
          {/* Subtle decorative elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl"></div>
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-indigo-700/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          {/* Tag with subtle gradient */}
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-900/5 to-blue-800/10 rounded-full backdrop-blur-sm border border-blue-900/10 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
              <span className="text-sm font-medium text-blue-900">Our Expertise</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
            </div>
          </div>
          
          {/* Main heading with premium styling */}
          <h2 className="relative text-2xl md:text-3xl xl:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
              Services & Solutions
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full mx-auto mt-6"></div>
          </h2>
          
          {/* Improved subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology and marketing offerings designed to elevate and transform your business
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          {/* Technology Section - Left */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-white to-blue-50 relative">
            {/* Decorative elements */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-10 h-full">
              <div className="inline-block rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 text-white mb-6 shadow-lg shadow-blue-200/50 transform hover:rotate-3 transition-transform duration-300">
                {renderIcon(Cpu, "h-7 w-7")}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Technology</h3>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mb-6"></div>
              
              <p className="text-gray-600 mb-10">
                Future-proof your business with our innovative technology services and solutions.
              </p>
              
              {/* Technology Services */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">S</span>
                    </span>
                    Services
                  </h4>
                  <a href="/tech-services" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group">
                    View all 
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {techServices.map((service, index) => (
                    <a 
                      key={index} 
                      href={service.href}
                      className="flex items-start p-4 rounded-xl bg-white border border-blue-100/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mr-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        {renderIcon(service.icon, "h-5 w-5")}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 mb-1">{service.title}</h5>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Technology Solutions */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">S</span>
                    </span>
                    Solutions
                  </h4>
                  <a href="/tech-solutions" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group">
                    View all 
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {techSolutions.map((solution, index) => (
                    <a 
                      key={index} 
                      href={solution.href}
                      className="flex items-start p-4 rounded-xl bg-white border border-blue-100/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mr-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        {renderIcon(solution.icon, "h-5 w-5")}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 mb-1">{solution.title}</h5>
                        <p className="text-sm text-gray-500">{solution.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Marketing Section - Right */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-white to-pink-50 relative">
            {/* Decorative elements */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-10 h-full">
              <div className="inline-block rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 p-3 text-white mb-6 shadow-lg shadow-pink-200/50 transform hover:-rotate-3 transition-transform duration-300">
                {renderIcon(Megaphone, "h-7 w-7")}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Marketing</h3>
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mb-6"></div>
              
              <p className="text-gray-600 mb-10">
                Elevate your brand with our innovative marketing strategies and creative solutions.
              </p>
              
              {/* Marketing Services */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="bg-pink-100 text-pink-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">S</span>
                    </span>
                    Services
                  </h4>
                  <a href="/marketing-services" className="text-pink-600 hover:text-pink-800 text-sm font-medium flex items-center group">
                    View all 
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {marketingServices.map((service, index) => (
                    <a 
                      key={index} 
                      href={service.href}
                      className="flex items-start p-4 rounded-xl bg-white border border-pink-100/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center mr-4 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                        {renderIcon(service.icon, "h-5 w-5")}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 mb-1">{service.title}</h5>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 ml-auto text-pink-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Marketing Solutions */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="bg-pink-100 text-pink-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">S</span>
                    </span>
                    Solutions
                  </h4>
                  <a href="/marketing-solutions" className="text-pink-600 hover:text-pink-800 text-sm font-medium flex items-center group">
                    View all 
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {marketingSolutions.map((solution, index) => (
                    <a 
                      key={index} 
                      href={solution.href}
                      className="flex items-start p-5 rounded-xl bg-white border border-pink-100/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center mr-5 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                        {renderIcon(solution.icon, "h-6 w-6")}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-lg text-gray-900 mb-1">{solution.title}</h5>
                        <p className="text-gray-500">{solution.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 ml-4 text-pink-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyAndMarketing;