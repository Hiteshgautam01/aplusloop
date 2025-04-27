"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Zap, LineChart, Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

// Define a type for service categories to fix TypeScript errors
type ServiceCategory = "Technology" | "Marketing" | "Consulting" | "Training";

export function ServicesSection() {
  // Use explicit type casting to address TypeScript errors
  const [activeTab, setActiveTab] = useState<ServiceCategory>("Technology");

  // Define category icons and colors
  const categoryInfo = {
    Technology: {
      icon: Zap,
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    Marketing: {
      icon: LineChart,
      color: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    Consulting: {
      icon: Briefcase,
      color: "text-teal-500 dark:text-teal-400",
      bgColor: "bg-teal-100 dark:bg-teal-900/30"
    },
    Training: {
      icon: GraduationCap,
      color: "text-amber-500 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/30"
    }
  };

  // Define services with proper typing
  const services: Record<ServiceCategory, Array<{name: string, description: string}>> = {
    Technology: [
      {
        name: "Custom Software Development",
        description: "Tailored solutions designed to meet your specific business needs."
      },
      {
        name: "Cloud Infrastructure",
        description: "Scalable and secure cloud services for optimal performance."
      },
      {
        name: "Mobile Applications",
        description: "Intuitive apps that engage users across all platforms."
      },
      {
        name: "DevOps & Automation",
        description: "Streamlined processes for faster, more reliable delivery."
      },
      {
        name: "AI & Machine Learning",
        description: "Intelligent solutions that adapt and learn from your data."
      },
      {
        name: "IT Strategy & Consulting",
        description: "Strategic guidance to align technology with business goals."
      },
    ],
    Marketing: [
      {
        name: "Digital Marketing",
        description: "Comprehensive strategies to reach your target audience."
      },
      {
        name: "Social Media Management",
        description: "Engaging content that builds community and drives conversion."
      },
      {
        name: "Content Strategy",
        description: "Compelling narratives that resonate with your audience."
      },
      {
        name: "SEO Optimization",
        description: "Enhanced visibility to drive organic traffic and growth."
      },
      {
        name: "Brand Development",
        description: "Distinctive identities that capture your unique value."
      },
      {
        name: "Market Research",
        description: "Data-driven insights to inform strategic decisions."
      },
    ],
    Consulting: [
      {
        name: "Business Strategy",
        description: "Expert guidance to achieve sustainable competitive advantage."
      },
      {
        name: "Process Optimization",
        description: "Streamlined workflows to maximize efficiency and output."
      },
      {
        name: "Growth Planning",
        description: "Strategic frameworks for scalable and sustainable expansion."
      },
      {
        name: "Financial Analysis",
        description: "Comprehensive assessment to optimize financial performance."
      },
      {
        name: "Organizational Development",
        description: "Structured approaches to enhance team effectiveness."
      },
      {
        name: "Change Management",
        description: "Guided transitions to minimize disruption and maximize adoption."
      },
    ],
    Training: [
      {
        name: "Technical Skills Development",
        description: "Practical training to enhance your team's technical capabilities."
      },
      {
        name: "Leadership Training",
        description: "Programs designed to cultivate effective leaders at all levels."
      },
      {
        name: "Digital Literacy Programs",
        description: "Fundamental skills for success in the digital economy."
      },
      {
        name: "Marketing Workshops",
        description: "Hands-on sessions to master modern marketing techniques."
      },
      {
        name: "Data Analysis Training",
        description: "Skills to transform raw data into actionable insights."
      },
      {
        name: "Change Management Coaching",
        description: "Support for teams navigating organizational transitions."
      },
    ],
  };

  // Helper function to get the services for the active tab
  // This ensures TypeScript correctly handles the indexing
  const getActiveServices = () => {
    // Using explicit type checking to avoid TypeScript errors
    if (activeTab in services) {
      return services[activeTab];
    }
    return [];
  };

  return (
    <section className="py-24 pb-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[40%] right-[10%] w-96 h-96 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        {/* <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" /> */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground inline-block">
              Services We Offer
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
          >
            Our Services & Solutions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive technology and marketing services tailored to your business needs
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ServiceCategory)} className="w-full">
            <div className="flex justify-center w-full mb-8">
              <TabsList className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-auto p-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                {Object.keys(services).map((tab) => {
                  const CategoryIcon = categoryInfo[tab as ServiceCategory].icon;
                  return (
                    <TabsTrigger 
                      key={tab} 
                      value={tab}
                      className="px-6 py-2.5 rounded-full text-sm font-medium transition-all 
                        data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary
                        data-[state=active]:text-white data-[state=active]:shadow-sm
                        data-[state=inactive]:bg-transparent data-[state=inactive]:text-slate-600 data-[state=inactive]:dark:text-slate-300 
                        data-[state=inactive]:hover:bg-slate-100 data-[state=inactive]:dark:hover:bg-slate-800
                        focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1
                        flex items-center gap-2"
                    >
                      <CategoryIcon className="h-4 w-4" />
                      {tab}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Services content box */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                > 
                  {getActiveServices().map((service, index) => {
                    const CategoryIcon = categoryInfo[activeTab].icon;
                    return (
                      <motion.div 
                        key={`${service.name}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className={`p-2.5 rounded-lg ${categoryInfo[activeTab].bgColor} flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110`}>
                          <CategoryIcon className={`h-5 w-5 ${categoryInfo[activeTab].color}`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-slate-800 dark:text-slate-100 mb-1.5">{service.name}</h3>
                          <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}