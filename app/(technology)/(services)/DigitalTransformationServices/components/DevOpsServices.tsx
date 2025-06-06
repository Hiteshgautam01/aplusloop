"use client";
import React, { useState } from "react";

// Custom styles for animations
const customStyles = `
  @keyframes slowSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes reverseSpin {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  .slow { animation: slowSpin 8s linear infinite; }
  .reverse { animation: reverseSpin 6s linear infinite; }
`;

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
    <>
      <style jsx>{customStyles}</style>
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Layout with Image - Reversed */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Enhanced Image Placeholder */}
          <div className="lg:sticky lg:top-8 order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
              {/* Animated Background Pattern - DevOps Theme */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute animate-pulse top-6 left-6 w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                <div className="absolute animate-bounce top-8 left-8 w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
                <div className="absolute animate-pulse delay-300 top-12 left-12 w-8 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <div className="absolute animate-bounce delay-150 top-14 left-14 w-2 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
                <div className="absolute animate-pulse delay-500 top-18 left-18 w-8 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
                <div className="absolute animate-spin slow top-4 left-16 w-4 h-4 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full"></div>
                <div className="absolute animate-ping top-16 left-4 w-3 h-3 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full"></div>
                
                {/* Gear/Automation patterns */}
                <div className="absolute animate-spin slow bottom-8 right-8 w-12 h-12 border-2 border-cyan-400 rounded-full"></div>
                <div className="absolute animate-spin reverse slow bottom-10 right-10 w-8 h-8 border-2 border-emerald-400 rounded-full"></div>
                <div className="absolute animate-pulse bottom-12 right-12 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div className="absolute animate-pulse delay-200 bottom-6 right-16 w-6 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                <div className="absolute animate-pulse delay-400 bottom-16 right-6 w-1 h-6 bg-gradient-to-b from-indigo-400 to-blue-400 rounded-full"></div>
              </div>
              
              <div className="relative w-full h-96 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 flex items-center justify-center mb-4 shadow-xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">DevOps Pipeline</p>
                  <p className="text-white/80 text-sm">Automation Excellence</p>
                </div>
              </div>
              <p className="relative text-sm text-white/80 text-center font-medium">
                CI/CD pipeline diagrams, infrastructure automation workflows, and deployment process visualizations
              </p>
            </div>
          </div>

          {/* Right: Enhanced Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                <h2 className="text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                  DevOps Services
                </h2>
              </div>
              <h3 className="text-xl lg:text-2xl text-slate-700 font-semibold mb-6 leading-tight">
                Accelerate Development. Automate Delivery. Achieve Operational Excellence.
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                At Aplusloop, our DevOps services empower your organization to bridge the gap between development and operations—enhancing collaboration, increasing release velocity, and reducing deployment failures. By integrating modern DevOps practices, we help you streamline software delivery pipelines, improve product quality, and accelerate time-to-market.
              </p>
            </div>

            {/* What We Offer - Enhanced */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">What We Offer</h4>
              </div>
              <div className="space-y-4">
                {devOpsOfferings.map((offering, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`relative bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 ${
                      hoveredCard === index ? 'transform hover:-translate-y-1' : ''
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${offering.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                          <div className="text-white">
                            {offering.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                            {offering.title}
                          </h5>
                          <div className={`overflow-hidden transition-all duration-500 ${
                            hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <p className="text-slate-600 leading-relaxed">
                              {offering.description}
                            </p>
                          </div>
                        </div>
                        <div className={`text-slate-300 group-hover:text-blue-500 transition-all duration-300 ${
                          hoveredCard === index ? 'rotate-90' : ''
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section - Enhanced */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent mb-4">
              Benefits of Our DevOps Services
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-slate-700 leading-relaxed font-medium group-hover:text-slate-900 transition-colors">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section - Enhanced */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent mb-4">
              Why Choose Aplusloop for DevOps?
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{item.title}</h5>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute animate-pulse top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="absolute animate-ping top-8 right-8 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute animate-pulse delay-300 bottom-6 left-8 w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="absolute animate-bounce delay-500 bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl mb-6 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Ready to Accelerate Your Development Pipeline?
              </h4>
              <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Let our DevOps experts design and implement a streamlined delivery pipeline that scales with your business and accelerates your digital transformation journey.
              </p>
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                <span className="flex items-center space-x-3">
                  <span>Get DevOps Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default DevOpsServices;