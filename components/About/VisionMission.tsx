import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const VisionMission: React.FC = () => {
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
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      id="vision-mission"
      className="w-full"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 text-center">
        Vision & Mission
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
          <Card className="h-full border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card dark:bg-card/30">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-4 mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the catalyst for digital transformation that empowers businesses to thrive in an ever-evolving technological landscape.
              </p>
              <div className="mt-8 pt-6 border-t border-border/30 w-full">
                <p className="italic text-muted-foreground">
                  "We envision a world where technology enhances human potential rather than replacing it."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="h-full border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card dark:bg-card/30">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="rounded-full bg-green-50 dark:bg-green-900/20 p-4 mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 dark:text-green-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver innovative solutions that solve complex business challenges through a perfect blend of cutting-edge technology, creative thinking, and user-centered design.
              </p>
              <div className="mt-8 pt-6 border-t border-border/30 w-full">
                <p className="italic text-muted-foreground">
                  "We're committed to creating technology that works for people, not the other way around."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionMission;