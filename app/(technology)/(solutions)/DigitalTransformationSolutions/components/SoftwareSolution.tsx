import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Globe, 
  Layers, 
  Server, 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  Building2,
  DollarSign,
  UserCheck,
  Package,
  TrendingUp,
  GraduationCap,
  Heart,
  Leaf,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const BusinessSoftwarePlatforms = () => {
  // Platform types data
  const platformTypes = [
    {
      title: "Cloud-Based Platforms",
      description: "These platforms are hosted on the cloud and accessed over the internet. Users don't need to manage hardware or install software locally.",
      examples: "Google Workspace, Microsoft 365, AWS-based apps",
      keyBenefits: "Scalability, accessibility from anywhere, reduced infrastructure cost",
      useCases: "Remote collaboration, data storage, global services",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Software as a Service (SaaS)",
      description: "SaaS is a cloud delivery model where users access software via a web browser. It's managed entirely by the vendor, including updates and security.",
      examples: "Salesforce, Zoom, Dropbox, HubSpot",
      keyBenefits: "No installation, subscription-based, fast deployment",
      useCases: "CRM, email marketing, document sharing, customer support",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Platform as a Service (PaaS)",
      description: "PaaS provides a cloud environment for developers to build, test, and deploy applications without worrying about infrastructure.",
      examples: "Google App Engine, Microsoft Azure App Services, Heroku",
      keyBenefits: "Faster development, automatic scaling, built-in tools",
      useCases: "Web app development, APIs, backend services",
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "On-Premises Platforms",
      description: "These are installed and run locally on a company's own servers and infrastructure. Often used when data security or control is a top priority.",
      examples: "SAP ERP (on-prem version), legacy CRM systems, custom enterprise software",
      keyBenefits: "Full control, customizable, secure within internal network",
      useCases: "Government, finance, regulated industries, sensitive data environments",
      icon: <Server className="w-8 h-8" />
    }
  ];

  // Functional categories
  const functionalCategories = [
    { 
      name: "Finance", 
      icon: <DollarSign className="w-6 h-6" />,
      description: "Financial planning, budgeting, and reporting solutions",
      color: "green"
    },
    { 
      name: "CRM", 
      icon: <Users className="w-6 h-6" />,
      description: "Customer relationship and sales management systems",
      color: "blue"
    },
    { 
      name: "HRMS", 
      icon: <UserCheck className="w-6 h-6" />,
      description: "Human resource management and employee solutions",
      color: "purple"
    },
    { 
      name: "Procurement", 
      icon: <Package className="w-6 h-6" />,
      description: "Supply chain and procurement management tools",
      color: "orange"
    }
  ];

  // Vertical categories
  const verticalCategories = [
    { 
      name: "Fintech", 
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Financial technology and digital banking solutions",
      color: "emerald"
    },
    { 
      name: "EduTech", 
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Educational technology and e-learning platforms",
      color: "violet"
    },
    { 
      name: "HealthTech", 
      icon: <Heart className="w-6 h-6" />,
      description: "Healthcare technology and medical software",
      color: "red"
    },
    { 
      name: "AgriTech", 
      icon: <Leaf className="w-6 h-6" />,
      description: "Agricultural technology and farming solutions",
      color: "green"
    }
  ];

  // Why choose reasons
  const whyChooseReasons = [
    "End-to-End Advisory + Implementation",
    "C-Level Expertise Driving Innovation",
    "Security-First Architecture",
    "Scalable & Cloud-Agnostic Solutions",
    "Industry-Ready Use Cases across Finance, Retail, Healthcare & More"
  ];

  return (
    <section className=" relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">BUSINESS SOFTWARE PLATFORMS</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900 mb-2">Scalable Platforms.</span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-2">
              Seamless Integration.
            </span>
            <span className="block text-slate-700">Built to Perform.</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in delivering powerful, scalable software platforms designed to meet the unique needs of modern businesses. As technology continues to evolve, companies require agile, intelligent solutions to stay competitive. Our platforms are built to do exactly that—drive efficiency, unlock innovation, and fuel growth.
            </p>
          </div>
        </motion.div>

        {/* Types of Software Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-b from-white/50 to-blue-50/30 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Types of Software Platforms
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platformTypes.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-500 group overflow-hidden bg-white/90 backdrop-blur-sm">
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-300" />
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300 flex-shrink-0">
                          {platform.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                            {platform.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            {platform.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg p-4 group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors duration-300">
                          <h4 className="font-semibold text-slate-800 mb-2 text-sm flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Examples
                          </h4>
                          <p className="text-slate-600 text-sm">{platform.examples}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg p-4 group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors duration-300">
                          <h4 className="font-semibold text-slate-800 mb-2 text-sm flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Key Benefits
                          </h4>
                          <p className="text-slate-600 text-sm">{platform.keyBenefits}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg p-4 group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors duration-300">
                          <h4 className="font-semibold text-slate-800 mb-2 text-sm flex items-center gap-2">
                            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Use Cases
                          </h4>
                          <p className="text-slate-600 text-sm">{platform.useCases}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Functional and Verticals Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Functional */}
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Functional Solutions
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
                  <p className="text-slate-600 mt-4 text-sm">
                    Comprehensive business function management
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {functionalCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300 mx-auto">
                          {category.icon}
                        </div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors mb-2">
                          {category.name}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                          {category.description}
                        </p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Verticals */}
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Industry Verticals
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
                  <p className="text-slate-600 mt-4 text-sm">
                    Specialized solutions for diverse industries
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {verticalCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white/90 backdrop-blur-sm border border-indigo-100 rounded-2xl p-6 text-center hover:shadow-xl hover:border-indigo-200 transition-all duration-300 h-full">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:from-indigo-100 group-hover:to-purple-200 transition-colors duration-300 mx-auto">
                          {category.icon}
                        </div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors mb-2">
                          {category.name}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                          {category.description}
                        </p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* From startups to enterprises section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="bg-white/60 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed">
              From startups to enterprises, our software platforms are{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                engineered for agility, performance, and long-term growth.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white/60 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Aplusloop for Emerging Technologies?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyChooseReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 leading-relaxed">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Transform faster, operate smarter,<br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                and lead with technology.
              </span>
            </h2>
            <p className="text-lg text-slate-200 mb-8">
              Talk to us about what's next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-xl flex items-center gap-3 group shadow-lg font-semibold">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSoftwarePlatforms;