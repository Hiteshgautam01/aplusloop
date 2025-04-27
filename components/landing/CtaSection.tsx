"use client";

import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <div className="container mx-auto px-4 pt-15 pb-24 relative z-10">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-teal-100/20 dark:bg-teal-900/10 rounded-full blur-3xl" />
        
        <motion.div 
          className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated gradient accent */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-r from-purple-400/30 to-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Zap className="h-4 w-4" />
                <span>Take Action Today</span>
              </motion.div>
              
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Business?
              </motion.h2>

              <motion.p
                className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Partner with us to leverage cutting-edge technology and strategic
                marketing for sustainable business growth
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 w-full sm:w-auto"
                >
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 py-6 text-lg rounded-xl border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 w-full sm:w-auto"
                >
                  <span>Learn More About Our Process</span>
                </Button>
              </motion.div>
              
              <motion.div
                className="mt-10 text-slate-500 dark:text-slate-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                No commitment required. Get a personalized strategy in just 30 minutes.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}