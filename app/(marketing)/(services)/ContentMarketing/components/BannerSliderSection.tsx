"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  BarChart2,
  Target,
  Briefcase,
  Zap,
  ArrowRight,
} from "lucide-react";

const BannerSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Updated slide variants for smoother transitions without black flashes
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Slides content
  const slides = [
    {
      title: "Transform Your Content Strategy",
      subtitle: "Elevate Your Brand with Expertly Crafted Content",
      content:
        "From ideation to implementation, our holistic content marketing approach delivers measurable results that drive business growth.",
      cta: "See Our Process",
      stats: [
        { label: "Avg. Conversion Increase", value: "38%" },
        { label: "Content Engagement", value: "2.5x" },
        { label: "SEO Visibility Growth", value: "65%" },
      ],
      icons: [<Target key="1" />, <BarChart2 key="2" />, <Briefcase key="3" />],
    },
    {
      title: "Content that Converts",
      subtitle: "Strategic Storytelling for Business Results",
      content:
        "We craft compelling narratives that connect with your audience, establish authority, and turn visitors into loyal customers.",
      cta: "Explore Our Services",
      stats: [
        { label: "Client Retention", value: "92%" },
        { label: "Traffic Growth", value: "3.7x" },
        { label: "Content ROI", value: "215%" },
      ],
      icons: [<Zap key="1" />, <Target key="2" />, <BarChart2 key="3" />],
    },
  ];

  return (
    <section className="relative overflow-hidden w-full h-[65vh]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
            transform: "translate(30%, -50%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
            transform: "translate(-20%, 30%)",
          }}
        ></div>

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${primaryColor.substring(1)}' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="w-full h-full relative z-10">
        {/* Slider container - full width and height */}
        <div className="w-full h-full overflow-hidden">
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>

          {/* Slides - using crossfade transitions */}
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              className="absolute inset-0 flex items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-900 z-0">
                {/* Slide background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414l7.293-7.293.5-.5z' fill='white' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  }}
                ></div>
              </div>

              {/* Slide Content - improved alignment */}
              <div className="w-full h-full flex items-center">
                <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-20 z-20">
                  <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {slides[currentSlide].title}
                  </h2>
                  <div className="h-1 w-24 bg-white mb-4"></div>
                  <h3 className="text-pink-200 text-lg md:text-xl lg:text-2xl mb-4">
                    {slides[currentSlide].subtitle}
                  </h3>
                  <p className="text-white/90 mb-8 max-w-lg text-base md:text-lg">
                    {slides[currentSlide].content}
                  </p>

                  {/* Stats - improved spacing and alignment */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {slides[currentSlide].stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                          {stat.value}
                        </div>
                        <div className="text-pink-200 text-xs md:text-sm whitespace-nowrap">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-medium flex items-center space-x-2 shadow-lg transform transition hover:scale-105 hover:shadow-xl">
                    <span>{slides[currentSlide].cta}</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>

                {/* Slide Decorative Elements - improved positioning */}
                <div className="hidden md:flex w-1/2 h-full items-center justify-center relative">
                  <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                    {slides[currentSlide].icons.map((icon, index) => (
                      <motion.div
                        key={index}
                        className="absolute p-6 bg-white rounded-full shadow-lg text-pink-600"
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{
                          scale: 1,
                          rotate: 0,
                          x: Math.cos((index * (Math.PI * 2)) / 3) * 120,
                          y: Math.sin((index * (Math.PI * 2)) / 3) * 120,
                        }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      >
                        {React.cloneElement(icon, { size: 28 })}
                      </motion.div>
                    ))}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        <ExternalLink size={36} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - improved positioning */}
          <div className="absolute bottom-8 right-8 flex space-x-4 z-30">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition"
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Slide Indicators - improved positioning */}
          <div className="absolute bottom-8 left-8 flex space-x-3 z-30">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-10 bg-white" : "w-2.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSliderSection;
