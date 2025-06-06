"use client";
import React, { useState } from "react";
import Image from "next/image";
import devopsimg from "@/public/images/devops.jpg";

const DevOpsServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const devOpsOfferings = [
    {
      title: "DevOps Assessment & Strategy",
      description: "We begin with a maturity assessment of your current processes and design a tailored roadmap aligned with your business goals. Our strategy encompasses toolchain optimization, CI/CD pipeline design, and infrastructure automation plans.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      )
    },
    {
      title: "Continuous Integration & Continuous Deployment (CI/CD)",
      description: "We implement robust CI/CD pipelines using tools like Jenkins, GitLab, GitHub Actions, and Azure DevOps, enabling automated testing, faster deployments, and minimized human error.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      )
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "We manage your infrastructure using code via tools like Terraform, Ansible, and AWS CloudFormation, allowing scalable, repeatable, and version-controlled environment provisioning.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      )
    },
    {
      title: "Cloud & Containerization Services",
      description: "Whether you're migrating or building from scratch, our team uses Docker, Kubernetes, and cloud-native technologies across AWS, Azure, or GCP to build resilient, scalable environments.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      )
    },
    {
      title: "Configuration Management & Automation",
      description: "Ensure consistency across environments with automated configuration management tools such as Puppet, Chef, and Ansible.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: "Monitoring & Log Management",
      description: "We integrate observability into your system with tools like Prometheus, Grafana, ELK Stack, and Datadog—so you can detect, respond, and recover from incidents quickly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      title: "Security Integration (DevSecOps)",
      description: "Security is built into your development lifecycle with automated vulnerability scans, compliance checks, and secure coding practices—shifting security left in your DevOps pipeline.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    }
  ];

  const benefits = [
    "Faster release cycles and quicker go-to-market timelines",
    "Reduced risk of failure during deployments",
    "Increased team collaboration and productivity",
    "Improved infrastructure scalability and system stability",
    "Enhanced visibility and real-time performance monitoring",
    "Seamless integration with cloud and hybrid environments"
  ];

  const whyChooseUs = [
    {
      title: "Expertise Across Tools & Platforms",
      description: "Certified DevOps engineers with hands-on experience across AWS, Azure, Kubernetes, Docker, and more."
    },
    {
      title: "End-to-End Automation",
      description: "From development to deployment, we automate everything that can be automated."
    },
    {
      title: "Security & Compliance First",
      description: "We build DevOps pipelines that are not only fast but also secure and audit-ready."
    },
    {
      title: "Scalable, Future-Ready Solutions",
      description: "We build systems that grow as your business grows."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Layout with Image - Reversed */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Image Placeholder */}
          <div className="lg:sticky lg:top-8 order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-100 to-[#07047F]/10 rounded-2xl p-8 overflow-hidden">
              {/* Professional Background Pattern - DevOps Theme */}
              <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
                {/* Pipeline/Flow patterns */}
                <div className="absolute top-6 left-6 w-8 h-2 bg-slate-500 rounded"></div>
                <div className="absolute top-8 left-8 w-2 h-8 bg-[#07047F] rounded"></div>
                <div className="absolute top-12 left-12 w-8 h-2 bg-slate-400 rounded"></div>
                <div className="absolute top-14 left-14 w-2 h-8 bg-[#07047F]/60 rounded"></div>
                <div className="absolute top-18 left-18 w-8 h-2 bg-slate-500 rounded"></div>
                <div className="absolute top-4 left-16 w-4 h-4 bg-[#07047F]/30 rounded-full"></div>
                <div className="absolute top-16 left-4 w-3 h-3 bg-slate-300 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-36 h-36 opacity-10">
                {/* Gear/Automation patterns */}
                <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-[#07047F]/60 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-8 h-8 border-2 border-slate-400 rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-4 h-4 bg-[#07047F] rounded-full"></div>
                <div className="absolute bottom-6 right-16 w-6 h-1 bg-slate-400 rounded"></div>
                <div className="absolute bottom-16 right-6 w-1 h-6 bg-[#07047F]/60 rounded"></div>
              </div>
              
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] mb-4">
                <Image src={devopsimg} alt="DevOps Services" width={1000} height={1000} className="w-full h-full object-cover" />
              </div>  
              
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl text-[#07047F] font-semibold mb-4">
                DevOps Services
              </h2>
              <h3 className="text-xl lg:text-2xl text-slate-700 font-medium mb-6">
                Accelerate Development. Automate Delivery. Achieve Operational Excellence.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                At Aplusloop, our DevOps services empower your organization to bridge the gap between development and operations—enhancing collaboration, increasing release velocity, and reducing deployment failures. By integrating modern DevOps practices, we help you streamline software delivery pipelines, improve product quality, and accelerate time-to-market.
              </p>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-slate-900 mb-8">What We Offer</h4>
              <div className="space-y-6">
                {devOpsOfferings.map((offering, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start space-x-4 py-4">
                      <div className="text-[#07047F] group-hover:text-slate-700 transition-colors mt-1">
                        {offering.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                          {offering.title}
                        </h5>
                        <div className={`overflow-hidden transition-all duration-500 ${
                          hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                      <div className={`text-slate-300 group-hover:text-slate-500 transition-all duration-300 ${
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
          </div>
        </div>

        {/* Benefits Section - Enhanced */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-slate-900 mb-4">
              Benefits of Our DevOps Services
            </h4>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transform your development lifecycle with measurable improvements across your entire organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl border border-slate-200 p-6 h-full hover:shadow-lg hover:border-[#07047F]/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#07047F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#07047F]/20 transition-colors duration-300">
                        <svg className="w-5 h-5 text-[#07047F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-700 leading-relaxed font-medium group-hover:text-slate-900 transition-colors duration-300">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section - Enhanced */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose Aplusloop for DevOps?
            </h4>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Partner with experts who understand the complexities of modern software delivery and infrastructure management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl border border-slate-200 p-8 h-full hover:shadow-lg hover:border-[#07047F]/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#07047F]/5 transition-colors duration-300">
                      <svg className="w-8 h-8 text-slate-600 group-hover:text-[#07047F] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h5 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#05035F] transition-colors duration-300">
                      {item.title}
                    </h5>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Value Proposition */}
          <div className="mt-12 bg-slate-50 rounded-2xl p-8">
            <div className="text-center">
              <h5 className="text-xl font-bold text-slate-900 mb-4">
                Comprehensive DevOps Partnership
              </h5>
              <p className="text-slate-600 leading-relaxed max-w-4xl mx-auto">
                From initial assessment to full-scale implementation, we provide end-to-end DevOps solutions that align with your business objectives. Our certified engineers work alongside your team to ensure knowledge transfer and long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-[#07047F] rounded-2xl p-10 text-white shadow-xl">
            <h4 className="text-2xl lg:text-3xl font-bold mb-4">
              🚀 Ready to Accelerate Your Development Pipeline?
            </h4>
            <p className="text-xl mb-8 opacity-90">
              Let our DevOps experts design and implement a streamlined delivery pipeline that scales with your business.
            </p>
            <button className="bg-white text-slate-800 hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get DevOps Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsServices;