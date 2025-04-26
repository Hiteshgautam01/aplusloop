import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { TeamMember } from './types';

const LeadershipTeam: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Team members dummy data
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      bio: "Sarah brings over 15 years of experience in technology leadership and business transformation.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Michael has pioneered several breakthrough technologies in AI and cloud computing.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Amara Okafor",
      position: "Chief Design Officer",
      bio: "Amara leads our design thinking approach and ensures exceptional user experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "James Wilson",
      position: "Chief Operating Officer",
      bio: "James optimizes our operations and ensures we deliver excellence in every project.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
  ];

  // Function to get initials from name
  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('');
  };

  // Function to get a color based on the member's name (consistent color per person)
  const getProfileColor = (name: string): string => {
    const colors = [
      { bg: "rgba(59, 130, 246, 0.1)", text: "rgb(59, 130, 246)" }, // blue
      { bg: "rgba(16, 185, 129, 0.1)", text: "rgb(16, 185, 129)" }, // emerald
      { bg: "rgba(168, 85, 247, 0.1)", text: "rgb(168, 85, 247)" }, // purple
      { bg: "rgba(244, 63, 94, 0.1)", text: "rgb(244, 63, 94)" }, // rose
    ];
    
    // Simple hash function to get a consistent color for each name
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index].bg;
  };

  const getProfileTextColor = (name: string): string => {
    const colors = [
      { bg: "rgba(59, 130, 246, 0.1)", text: "rgb(59, 130, 246)" }, // blue
      { bg: "rgba(16, 185, 129, 0.1)", text: "rgb(16, 185, 129)" }, // emerald
      { bg: "rgba(168, 85, 247, 0.1)", text: "rgb(168, 85, 247)" }, // purple
      { bg: "rgba(244, 63, 94, 0.1)", text: "rgb(244, 63, 94)" }, // rose
    ];
    
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index].text;
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="leadership-team"
      className="w-full"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our leadership team brings together expertise from diverse backgrounds to drive innovation and excellence.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full border border-border/40 overflow-hidden hover:shadow-md transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div 
                    className="text-4xl font-bold w-full h-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: getProfileColor(member.name),
                      color: getProfileTextColor(member.name)
                    }}
                  >
                    {getInitials(member.name)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-sm mb-2" style={{ color: getProfileTextColor(member.name) }}>{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors" 
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors" 
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" 
                      aria-label={`${member.name}'s email`}
                    >
                      <Mail className="h-4 w-4 text-red-500 dark:text-red-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LeadershipTeam;