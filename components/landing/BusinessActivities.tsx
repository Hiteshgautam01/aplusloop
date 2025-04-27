"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Code, BarChart3, Briefcase } from "lucide-react";

export function BusinessActivities() {
  const activitiesRef = useRef(null);
  const isActivitiesInView = useInView(activitiesRef, {
    once: true,
    margin: "-100px 0px",
  });

  const activities = [
    {
      title: "Technology Solutions",
      description:
        "Custom software development, cloud infrastructure, and digital transformation solutions to modernize your business operations.",
      icon: Code,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800",
      iconColor: "#3b82f6", // blue-500
      iconColorDark: "#60a5fa", // blue-400
      delay: 0.2,
    },
    {
      title: "Marketing Excellence",
      description:
        "Strategic marketing services, brand development, and digital marketing campaigns to increase your market presence.",
      icon: BarChart3,
      color: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800",
      iconColor: "#8b5cf6", // purple-500
      iconColorDark: "#a78bfa", // purple-400
      delay: 0.4,
    },
    {
      title: "Business Consulting",
      description:
        "Expert business consulting to optimize operations, increase efficiency, and develop long-term growth strategies.",
      icon: Briefcase,
      color: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800",
      iconColor: "#14b8a6", // teal-500
      iconColorDark: "#2dd4bf", // teal-400
      delay: 0.6,
    },
  ];

  return (
    <section
      ref={activitiesRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 relative"
    >
      {/* Section divider at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-blue-100/20 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-purple-100/20 dark:bg-purple-900/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-64 h-64 rounded-full bg-teal-100/20 dark:bg-teal-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 mb-5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            What We Do
          </motion.span>
          
          <motion.h2
            className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Business Activities
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide comprehensive solutions tailored to your business needs
            and goals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={index}
                className={`${item.color} backdrop-blur-sm rounded-xl p-8 border shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1`}
                initial={{ opacity: 0, y: 30 }}
                animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <div className="mb-6 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur opacity-0  transition-opacity duration-300"></div>
                  <div className="relative">
                    <Icon 
                      size={36} 
                      color={item.iconColor} 
                      className="dark:hidden" 
                      strokeWidth={1.5} 
                    />
                    <Icon 
                      size={36} 
                      color={item.iconColorDark} 
                      className="hidden dark:block" 
                      strokeWidth={1.5} 
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{item.description}</p>

                <Link
                  href="#"
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Section divider at bottom - subtle curved shape */}
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-slate-50 dark:bg-slate-950 rounded-t-[50%] transform translate-y-16"></div>
      </div>
    </section>
  );
}