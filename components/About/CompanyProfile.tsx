import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { CompanyInfo } from './types';

const CompanyProfile: React.FC = () => {
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

  // Company information
  const companyInfo: CompanyInfo = {
    founded: "2020",
    headquarters: "San Francisco, CA",
    teamSize: "50+ Employees",
    projectsCompleted: "120+"
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      id="company-profile"
      className="w-full"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center md:text-left">
        Company Profile
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div variants={itemVariants}>
          <Card className="border border-border/40 shadow-sm dark:shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/10 dark:bg-primary/20 h-64 flex items-center justify-center">
                <div className="text-7xl font-bold text-primary/80">P2</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-2xl font-semibold">Who We Are</h3>
          <p className="text-muted-foreground">
            Founded in 2020, P2 is a forward-thinking technology company dedicated to bridging the gap between traditional business practices and innovative digital solutions.
          </p>
          <p className="text-muted-foreground">
            With a team of passionate experts across various domains, we combine cutting-edge technology with human-centered design to create solutions that truly make a difference.
          </p>
          <div className="pt-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <p className="font-semibold">Founded</p>
                <p className="text-muted-foreground">{companyInfo.founded}</p>
              </div>
              <div className="w-1/2">
                <p className="font-semibold">Headquarters</p>
                <p className="text-muted-foreground">{companyInfo.headquarters}</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="w-1/2">
                <p className="font-semibold">Team Size</p>
                <p className="text-muted-foreground">{companyInfo.teamSize}</p>
              </div>
              <div className="w-1/2">
                <p className="font-semibold">Projects Completed</p>
                <p className="text-muted-foreground">{companyInfo.projectsCompleted}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompanyProfile;