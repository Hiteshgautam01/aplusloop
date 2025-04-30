// components/careers/OpportunitiesSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, MapPin, Clock } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Contract
  description: string;
}

interface JobOpeningsData {
  [key: string]: JobOpening[];
}

export default function OpportunitiesSection() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Reset animation flag when tab changes
  useEffect(() => {
    setShouldAnimate(true);
    return () => setShouldAnimate(false);
  }, [selectedDepartment]);

  const jobOpenings: JobOpeningsData = {
    engineering: [
      {
        id: "eng-1",
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Join our product team to build responsive and accessible user interfaces that delight our customers.",
      },
      {
        id: "eng-2",
        title: "Backend Engineer",
        department: "Engineering",
        location: "New York, NY",
        type: "Full-time",
        description: "Design and implement scalable APIs and services that power our growing platform.",
      },
      {
        id: "eng-3",
        title: "DevOps Specialist",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
      },
    ],
    design: [
      {
        id: "des-1",
        title: "UX Designer",
        department: "Design",
        location: "San Francisco, CA",
        type: "Full-time",
        description: "Create intuitive and engaging user experiences that solve complex problems.",
      },
      {
        id: "des-2",
        title: "UI Designer",
        department: "Design",
        location: "Remote",
        type: "Contract",
        description: "Craft beautiful interfaces that align with our brand and delight our users.",
      },
    ],
    marketing: [
      {
        id: "mkt-1",
        title: "Content Marketing Manager",
        department: "Marketing",
        location: "Chicago, IL",
        type: "Full-time",
        description: "Develop and execute content strategies that drive growth and engagement.",
      },
      {
        id: "mkt-2",
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Manage and optimize our digital marketing campaigns across multiple channels.",
      },
    ],
    product: [
      {
        id: "prd-1",
        title: "Product Manager",
        department: "Product",
        location: "Boston, MA",
        type: "Full-time",
        description: "Lead the development of products that meet customer needs and business objectives.",
      },
    ],
  };

  // Combine all job openings for the "All" tab
  const allJobs = Object.values(jobOpenings).flat();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const JobCard = ({ job, index }: { job: JobOpening; index: number }) => (
    <motion.div 
      variants={itemVariants}
      custom={index}
      layout
    >
      <Card className="group h-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle className="text-xl font-semibold text-gray-800">{job.title}</CardTitle>
            </div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              {job.department}
            </span>
          </div>
        </CardHeader>
        <CardContent className="pt-2 pb-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-gray-400" />
              {job.type}
            </div>
          </div>
          <p className="text-gray-600">{job.description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button 
            variant="ghost" 
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 h-auto font-medium"
          >
            View position <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-blue-600 tracking-wide mb-2">JOIN OUR TEAM</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our current openings and find the perfect role to match your skills and passion.
            We're always looking for exceptional talent to join our team.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedDepartment}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100/80 p-1 rounded-full">
              <TabsTrigger 
                value="all" 
                className="rounded-full px-5 py-1.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all"
              >
                All Positions
              </TabsTrigger>
              <TabsTrigger 
                value="engineering" 
                className="rounded-full px-5 py-1.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all"
              >
                Engineering
              </TabsTrigger>
              <TabsTrigger 
                value="design" 
                className="rounded-full px-5 py-1.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all"
              >
                Design
              </TabsTrigger>
              <TabsTrigger 
                value="marketing" 
                className="rounded-full px-5 py-1.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger 
                value="product" 
                className="rounded-full px-5 py-1.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all"
              >
                Product
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <motion.div 
              key={`all-${shouldAnimate}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="engineering" className="mt-0">
            <motion.div 
              key={`eng-${shouldAnimate}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {jobOpenings.engineering.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="design" className="mt-0">
            <motion.div 
              key={`design-${shouldAnimate}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {jobOpenings.design.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="marketing" className="mt-0">
            <motion.div 
              key={`marketing-${shouldAnimate}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {jobOpenings.marketing.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="product" className="mt-0">
            <motion.div 
              key={`product-${shouldAnimate}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {jobOpenings.product.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Don't see the right fit?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals to join our team. 
            If you don't see a role that matches your skills, send us your resume anyway!
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Submit Your Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
