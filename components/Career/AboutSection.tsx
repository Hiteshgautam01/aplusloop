// components/careers/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Globe, Lightbulb, Award } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Users, label: "Team Members", value: "120+" },
    { icon: Globe, label: "Countries", value: "18" },
    { icon: Lightbulb, label: "Projects Completed", value: "250+" },
    { icon: Award, label: "Industry Awards", value: "32" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side - Text Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span 
              className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-2 inline-block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.span>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Aplus Loop</h2>
            <div className="h-1 w-16 bg-blue-600 mb-8 rounded-full"></div>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Aplus Loop is a forward-thinking company dedicated to creating innovative solutions 
                that empower businesses and individuals. Founded with a mission to bridge the gap 
                between technology and human potential, we've grown into a diverse team of experts 
                committed to excellence.
              </p>
              
              <p>
                Our approach combines cutting-edge technology with human-centered design, 
                ensuring that our solutions are not only powerful but also intuitive and 
                accessible to everyone.
              </p>
              
              <div className="pl-4 border-l-2 border-blue-200 my-6">
                <blockquote className="italic text-gray-700">
                  "We believe that the best innovations come from collaborative 
                  teams with diverse perspectives. We foster an environment where creativity 
                  thrives and every team member can make a significant impact."
                </blockquote>
                <p className="text-sm font-medium text-blue-700 mt-2">— Michael Chen, Founder & CEO</p>
              </div>
              
              <p>
                At Aplus Loop, we're not just building products – we're creating experiences that
                transform how people interact with technology. Our commitment to quality, innovation,
                and customer satisfaction drives everything we do.
              </p>
            </div>
          </motion.div>
          
          {/* Right Side - Image & Stats */}
          <motion.div 
            className="w-full md:w-1/2 space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-xl relative h-72 md:h-96"
                initial={{ clipPath: "inset(10% 10% 10% 10% round 1rem)", opacity: 0.5 }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1rem)", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/Career.jpg" 
                  alt="About Aplus Loop" 
                  fill 
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
                
                {/* Image caption */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg inline-block">
                    <p className="text-sm text-blue-900 font-medium">Our headquarters in San Francisco, CA</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-200 rounded-tr-2xl z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-blue-200 rounded-bl-2xl z-0"></div>
            </div>
            
            {/* Company stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <stat.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}