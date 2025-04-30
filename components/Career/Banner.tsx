// components/careers/Banner.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Banner() {
  const benefits = [
    "Flexible remote work policy",
    "Competitive compensation",
    "Continuous learning opportunities",
    "Inclusive and diverse culture"
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden mt-16">
      <div className="flex flex-col md:flex-row mx-auto">
        {/* Text Content - Left Side */}
        <motion.div 
          className="w-full h-auto min-h-[550px] md:w-1/2 bg-gradient-to-br from-blue-950 to-blue-900 text-white p-10 md:p-16 flex items-center relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-blue-300 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-blue-300 rounded-br-3xl"></div>
          </div>
          
          <div className="max-w-lg z-10">
            <motion.span 
              className="text-blue-300 text-sm uppercase tracking-widest font-medium mb-2 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Build Your Future With Us
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join Our Team of Innovators
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-6 text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              At Aplus Loop, we're on a mission to transform the industry through 
              cutting-edge solutions and forward-thinking innovation. We're looking for 
              passionate individuals who are ready to make an impact and grow with us.
            </motion.p>
            
            <motion.div
              className="space-y-5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="font-medium text-blue-200">What we offer:</p>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-2 text-blue-100"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  >
                    <CheckCircle className="h-4 w-4 text-blue-300 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8"
            >
              <Button className="group bg-white text-blue-900 hover:bg-blue-50 px-6 py-2.5 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Image - Right Side */}
        <motion.div 
          className="w-full md:w-1/2 relative h-80 md:h-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          <Image 
            src="/Career.jpg" 
            alt="Career at Aplus Loop" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 z-20 md:hidden lg:block">
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-blue-900 font-medium">
                "Joining Aplus Loop was the best career decision I've made. The collaborative culture and growth opportunities are unmatched."
              </p>
              <div className="mt-2 flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm mr-2">
                  JD
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Jane Doe</p>
                  <p className="text-xs text-blue-700">Senior Developer, 3 years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}