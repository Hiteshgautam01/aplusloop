"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

// Define a type for service categories to fix TypeScript errors
type ServiceCategory = "Technology" | "Marketing" | "Consulting" | "Training";

export function ServicesSection() {
  // Use explicit type casting to address TypeScript errors
  const [activeTab, setActiveTab] = useState<ServiceCategory>("Technology");

  // Define services with proper typing
  const services: Record<ServiceCategory, string[]> = {
    Technology: [
      "Custom Software Development",
      "Cloud Infrastructure",
      "Mobile Applications",
      "DevOps & Automation",
      "AI & Machine Learning",
      "IT Strategy & Consulting",
    ],
    Marketing: [
      "Digital Marketing",
      "Social Media Management",
      "Content Strategy",
      "SEO Optimization",
      "Brand Development",
      "Market Research",
    ],
    Consulting: [
      "Business Strategy",
      "Process Optimization",
      "Growth Planning",
      "Financial Analysis",
      "Organizational Development",
      "Change Management",
    ],
    Training: [
      "Technical Skills Development",
      "Leadership Training",
      "Digital Literacy Programs",
      "Marketing Workshops",
      "Data Analysis Training",
      "Change Management Coaching",
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
    <section className="py-24 bg-muted/30 relative">
      {/* Subtle background effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Removed the pattern overlay that was causing click issues */}

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services & Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology and marketing services tailored to your business needs
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ServiceCategory)} className="w-full">
            <div className="flex justify-center w-full mb-8">
              <TabsList className="bg-transparent h-auto p-1 rounded-full border border-border/30">
                {Object.keys(services).map((tab) => (
                  <TabsTrigger 
                    key={tab} 
                    value={tab}
                    className="px-6 py-2 rounded-full text-sm font-medium transition-colors 
                      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm
                      data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted/50
                      focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Services content box (stays stable) */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 relative z-10">
              {/* Each tab content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" key={activeTab}> {/* Added key to force re-render */}
                {getActiveServices().map((service, index) => (
                  <div 
                    key={`${service}-${index}`}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <motion.h3 
                        className="font-medium text-lg"
                        initial={{ opacity: 0, x: -15, y: -5 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        {service}
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      >
                        {activeTab === "Technology" && "Cutting-edge technology solutions to drive your business forward."}
                        {activeTab === "Marketing" && "Data-driven marketing strategies that deliver measurable results."}
                        {activeTab === "Consulting" && "Expert guidance to help you navigate complex business challenges."}
                        {activeTab === "Training" && "Comprehensive programs to develop your team's capabilities."}
                      </motion.p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}