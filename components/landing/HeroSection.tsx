"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BannerSlider as BannerSliderType, BannerSlide } from "@/sanity/schemaTypes/type";
import { urlForImage } from "@/sanity/queries/landing";

interface BannerSliderProps {
  data: BannerSliderType;
}

export function BannerSlider({ data }: BannerSliderProps) {
  const slides = data.slides;
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
      }, data.autoplaySpeed || 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, autoplay, data.autoplaySpeed]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section 
      className="relative h-[600px] md:h-[70vh] overflow-hidden py-24 bg-gradient-to-b from-background to-muted/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
      
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
          {/* Background image (if available) */}
          {slides[current].image && (
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={urlForImage(slides[current].image)
                  .width(1920)
                  .height(1080)
                  .format('webp')
                  .url()} 
                alt={slides[current].title} 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          )}
          
          {/* Content - positioned lower to account for navbar */}
          <div className="relative h-full flex items-center pt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-3">
                    {slides[current].title}
                  </h2>
                  {slides[current].subtitle && (
                    <p className="text-2xl text-foreground font-medium mb-4">
                      {slides[current].subtitle}
                    </p>
                  )}
                  {slides[current].description && (
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                      {slides[current].description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-4">
                    {slides[current].cta && (
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded"
                        {...(slides[current].ctaLink ? { href: slides[current].ctaLink } : {})}
                      >
                        {slides[current].cta}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                    
                    {slides[current].secondaryCta && (
                      <Button 
                        variant="outline"
                        className="border-border text-muted-foreground hover:bg-muted"
                        {...(slides[current].secondaryCtaLink ? { href: slides[current].secondaryCtaLink } : {})}
                      >
                        {slides[current].secondaryCta}
                      </Button>
                    )}
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/50 hover:bg-card/80 border border-border/50 p-2 rounded-full z-10 text-foreground transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/50 hover:bg-card/80 border border-border/50 p-2 rounded-full z-10 text-foreground transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}







// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight, ChevronLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const slides = [
//   {
//     id: 1,
//     title: "Transform Your Digital Presence",
//     subtitle: "Strategic Solutions for Modern Business",
//     description: "Elevate your brand with our comprehensive technology and marketing services designed to drive engagement and growth.",
//     cta: "Get Started",
//     secondaryCta: "Learn More"
//   },
//   {
//     id: 2,
//     title: "Data-Driven Strategies",
//     subtitle: "Unlock Your Business Potential",
//     description: "Our analytics-powered approach delivers measurable results and actionable insights for sustainable business growth.",
//     cta: "Explore Services",
//     secondaryCta: "Contact Us"
//   },
//   {
//     id: 3,
//     title: "Innovative Technology Solutions",
//     subtitle: "Designed for Your Success",
//     description: "Cutting-edge development and seamless integration to help you stay ahead in today's competitive marketplace.",
//     cta: "See Our Work",
//     secondaryCta: "Schedule Demo"
//   }
// ];

// export function BannerSlider() {
//   const [current, setCurrent] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
//   const nextSlide = () => {
//     setCurrent(current === slides.length - 1 ? 0 : current + 1);
//   };
  
//   const prevSlide = () => {
//     setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   };
  
//   const goToSlide = (index: number) => {
//     setCurrent(index);
//   };

//   // Autoplay functionality
//   useEffect(() => {
//     if (autoplay) {
//       timeoutRef.current = setTimeout(() => {
//         nextSlide();
//       }, 5000);
//     }
    
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [current, autoplay]);
  
//   // Pause autoplay on hover
//   const handleMouseEnter = () => setAutoplay(false);
//   const handleMouseLeave = () => setAutoplay(true);

//   return (
//     <section 
//       className="relative h-[600px] md:h-[70vh] overflow-hidden py-24 bg-gradient-to-b from-background to-muted/10"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Subtle background elements matching testimonial section */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
      
//       {/* Slides */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >          
//           {/* Content - positioned lower to account for navbar */}
//           <div className="relative h-full flex items-center pt-24">
//             <div className="container mx-auto px-6">
//               <div className="max-w-2xl">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                 >
//                   <h2 className="text-4xl md:text-5xl font-bold mb-3">
//                     {slides[current].title}
//                   </h2>
//                   <p className="text-2xl text-foreground font-medium mb-4">
//                     {slides[current].subtitle}
//                   </p>
//                   <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
//                     {slides[current].description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-4">
//                     <Button 
//                       className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded"
//                     >
//                       {slides[current].cta}
//                       <ChevronRight className="ml-2 h-4 w-4" />
//                     </Button>
                    
//                     <Button 
//                       variant="outline"
//                       className="border-border text-muted-foreground hover:bg-muted"
//                     >
//                       {slides[current].secondaryCta}
//                     </Button>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
      
//       {/* Navigation arrows */}
//       <button 
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/50 hover:bg-card/80 border border-border/50 p-2 rounded-full z-10 text-foreground transition-all duration-200"
//       >
//         <ChevronLeft size={20} />
//       </button>
      
//       <button 
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/50 hover:bg-card/80 border border-border/50 p-2 rounded-full z-10 text-foreground transition-all duration-200"
//       >
//         <ChevronRight size={20} />
//       </button>
      
//       {/* Slide indicators - matching style from testimonials */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goToSlide(i)}
//             className={`h-2.5 rounded-full transition-all ${
//               i === current ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }