// components/Career/TeamSection.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Linkedin,
  User
} from "lucide-react";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image: string;
  linkedin?: string;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "Product Lead",
      quote: "Working at Aplus Loop has been an incredible journey of growth. The collaborative environment allows us to innovate freely while maintaining focus on what matters most - making impactful products.",
      image: "/api/placeholder/400/400",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Michael Chang",
      role: "Senior Developer",
      quote: "I joined Aplus Loop because I wanted to work on challenging problems with talented people. The technical freedom and emphasis on continuous learning keeps me engaged every day.",
      image: "/api/placeholder/400/400",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Aisha Patel",
      role: "UX Designer",
      quote: "Aplus Loop truly puts users first. I'm empowered to advocate for meaningful experiences and work alongside brilliant engineers who respect design thinking.",
      image: "/api/placeholder/400/400",
      linkedin: "https://linkedin.com",
    },
    {
      name: "David Wilson",
      role: "Engineering Manager",
      quote: "The culture of trust and autonomy at Aplus Loop makes it possible to do your best work. We move quickly but thoughtfully, always with an eye toward quality.",
      image: "/api/placeholder/400/400",
      linkedin: "https://linkedin.com",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  // Enhanced animation variants
  const cardVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 40 : -40,
      transition: {
        duration: 0.3,
      }
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 40 : -40,
      transition: {
        duration: 0.3,
      }
    })
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
        duration: 0.5,
        ease: "easeOut"
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

  // Fade in animation for the image
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear From Our Core Team Members</h2>
          <div className="h-1 w-24 bg-blue-700 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our team is our greatest asset. Discover what it's like to work at Aplus Loop
            directly from the people who shape our culture every day.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden bg-white shadow-md border border-gray-100 rounded-xl">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 relative h-72 md:h-96">
                      <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="h-full w-full"
                      >
                        {imageError[currentIndex] ? (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                            <div className="flex flex-col items-center justify-center p-6 text-center">
                              <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mb-3">
                                <User className="h-10 w-10 text-blue-700" strokeWidth={1.5} />
                              </div>
                              <span className="text-blue-800 font-medium text-sm">
                                {teamMembers[currentIndex].name}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={teamMembers[currentIndex].image}
                            alt={teamMembers[currentIndex].name}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(currentIndex)}
                          />
                        )}
                      </motion.div>
                    </div>
                    <motion.div 
                      className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div variants={itemVariants}>
                        <svg className="h-8 w-8 text-blue-300 mb-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </motion.div>
                      <motion.p 
                        className="text-gray-700 text-lg leading-relaxed mb-8"
                        variants={itemVariants}
                      >
                        {teamMembers[currentIndex].quote}
                      </motion.p>
                      <motion.div 
                        className="flex items-center border-t pt-6 border-gray-100"
                        variants={itemVariants}
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900">{teamMembers[currentIndex].name}</h4>
                          <p className="text-blue-600">{teamMembers[currentIndex].role}</p>
                        </div>
                        {teamMembers[currentIndex].linkedin && (
                          <a 
                            href={teamMembers[currentIndex].linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-4 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced navigation buttons */}
          <motion.button 
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white border border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-10 transition-all duration-200"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-5 w-5 text-blue-700" />
          </motion.button>
          <motion.button 
            onClick={nextTestimonial}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white border border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-10 transition-all duration-200"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-5 w-5 text-blue-700" />
          </motion.button>
        </div>

        {/* Improved indicator dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {teamMembers.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-blue-700 scale-125" 
                  : "bg-gray-300 opacity-60 hover:opacity-80"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}