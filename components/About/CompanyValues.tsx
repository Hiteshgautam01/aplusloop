import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { CompanyValue } from './types';

const CompanyValues: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Company values dummy data with colored icons
  const values: CompanyValue[] = [
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to push boundaries and create transformative solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 dark:text-purple-400">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical responsibility in all our interactions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in the power of diverse perspectives working together toward common goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 dark:text-teal-400">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from code quality to customer service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 dark:text-amber-400">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      title: "User-Centered",
      description: "We design with empathy, putting the needs and experiences of users at the heart of all our solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500 dark:text-rose-400">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      title: "Adaptability",
      description: "We embrace change and remain agile in an ever-evolving technological landscape.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 dark:text-emerald-400">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="company-values"
      className="w-full"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Company Values</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our core values define who we are and guide every decision we make.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border border-border/40 hover:border-primary/20 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm"
                  style={{
                    backgroundColor: value.title === 'Innovation' ? 'rgba(168, 85, 247, 0.1)' : 
                                    value.title === 'Integrity' ? 'rgba(59, 130, 246, 0.1)' :
                                    value.title === 'Collaboration' ? 'rgba(20, 184, 166, 0.1)' :
                                    value.title === 'Excellence' ? 'rgba(245, 158, 11, 0.1)' :
                                    value.title === 'User-Centered' ? 'rgba(244, 63, 94, 0.1)' : 'rgba(16, 185, 129, 0.1)'
                  }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Quote Section */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 p-8 bg-primary/5 dark:bg-primary/10 rounded-lg text-center"
      >
        <blockquote className="text-xl italic font-medium">
          "Our values aren't just words on a wall – they're the principles that drive our everyday actions and decisions."
        </blockquote>
        <p className="mt-4 text-muted-foreground">— Sarah Johnson, CEO</p>
      </motion.div>
    </motion.section>
  );
};

export default CompanyValues;