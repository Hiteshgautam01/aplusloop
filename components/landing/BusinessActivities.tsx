"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      icon: "/placeholder-tech.svg",
      color: "from-blue-500 to-blue-700",
      delay: 0.2,
    },
    {
      title: "Marketing Excellence",
      description:
        "Strategic marketing services, brand development, and digital marketing campaigns to increase your market presence.",
      icon: "/placeholder-marketing.svg",
      color: "from-purple-500 to-purple-700",
      delay: 0.4,
    },
    {
      title: "Business Consulting",
      description:
        "Expert business consulting to optimize operations, increase efficiency, and develop long-term growth strategies.",
      icon: "/placeholder-consulting.svg",
      color: "from-teal-500 to-teal-700",
      delay: 0.6,
    },
  ];

  return (
    <section
      ref={activitiesRef}
      className="py-24 bg-gradient-to-b from-background to-background/80 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Business Activities
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide comprehensive solutions tailored to your business needs
            and goals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <div
                className={`h-14 w-14 rounded-lg mb-6 bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
              >
                <div className="h-8 w-8 bg-white/10 rounded-md backdrop-blur-sm" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.description}</p>

              <Link
                href="#"
                className="inline-flex items-center font-medium group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
