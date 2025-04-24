"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Transform Your Digital Presence",
    subtitle: "Strategic Solutions for Modern Business",
    description: "Elevate your brand with our comprehensive technology and marketing services designed to drive engagement and growth.",
    cta: "Get Started",
    secondaryCta: "Learn More"
  },
  {
    id: 2,
    title: "Data-Driven Strategies",
    subtitle: "Unlock Your Business Potential",
    description: "Our analytics-powered approach delivers measurable results and actionable insights for sustainable business growth.",
    cta: "Explore Services",
    secondaryCta: "Contact Us"
  },
  {
    id: 3,
    title: "Innovative Technology Solutions",
    subtitle: "Designed for Your Success",
    description: "Cutting-edge development and seamless integration to help you stay ahead in today's competitive marketplace.",
    cta: "See Our Work",
    secondaryCta: "Schedule Demo"
  }
];

export function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  
  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, autoplay]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section 
      className="relative h-[600px] md:h-[70vh] overflow-hidden bg-white dark:bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Simple subtle background - just a gradient from light gray to white */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"></div>
      
      {/* Very subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
        <svg width="100%" height="100%">
          <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" className="text-gray-900 dark:text-gray-400"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)"></rect>
        </svg>
      </div>
      
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >          
          {/* Content - positioned lower to account for navbar */}
          <div className="relative h-full flex items-center pt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-3">
                    {slides[current].title}
                  </h2>
                  <p className="text-2xl text-gray-700 dark:text-gray-300 font-light mb-4">
                    {slides[current].subtitle}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
                    {slides[current].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="bg-gray-900 hover:bg-black text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black px-6 py-2 rounded"
                    >
                      {slides[current].cta}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
                    >
                      {slides[current].secondaryCta}
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black border border-gray-200 dark:border-gray-800 p-2 rounded-full z-10 text-gray-800 dark:text-gray-200 transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black border border-gray-200 dark:border-gray-800 p-2 rounded-full z-10 text-gray-800 dark:text-gray-200 transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-gray-900 dark:bg-gray-200 w-8" : "bg-gray-300 dark:bg-gray-700 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}