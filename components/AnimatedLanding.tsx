"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ContactButtonModal } from "@/components/landing/ContactButtonModal";
import WhyChooseSection from "./landing/WhyChooseSection";
import SuccessStoriesSection from "./landing/SuccessStoriesSection";
import TechnologyStackSection from "./landing/TechnologyStackSection";
import InnovationHubSection from "./landing/InnovationHubSection";
import SolutionsSection from "./landing/SolutionsSection";
import { useRef, useState, useEffect } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AnimatedLanding() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [currentImage, setCurrentImage] = useState(0);

  const gradientX = useTransform(mouseX, [0, 1000], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 1000], [0, 100]);
  const gradientScale = useTransform(mouseY, [0, 1000], [1, 2]);
  const gradientOpacity = useTransform(mouseY, [0, 1000], [0.2, 0.5]);
  const gradientBlur = useTransform(mouseY, [0, 1000], [0, 20]);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      alt: "Digital Transformation",
      title: "Digital Transformation",
      description: "Revolutionizing businesses through innovative technology solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
      alt: "Cybersecurity",
      title: "Cybersecurity",
      description: "Protecting your digital assets with advanced security solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      alt: "Cloud Services",
      title: "Cloud Services",
      description: "Scalable and secure cloud infrastructure for your business"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      alt: "Smart Solutions",
      title: "Smart Solutions",
      description: "Intelligent technology solutions for modern businesses"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      {/* Hero Section - Full Screen */}
      <motion.section 
        ref={bannerRef}
        onMouseMove={handleMouseMove}
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="min-h-screen flex relative z-10 overflow-hidden"
      >
        {/* Dynamic Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Water-like Gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, 
                rgba(0, 102, 204, 0.3) 0%, 
                rgba(0, 102, 204, 0.2) 20%, 
                rgba(255, 105, 180, 0.2) 40%, 
                rgba(255, 105, 180, 0.3) 60%, 
                transparent 100%)`,
              scale: gradientScale,
              opacity: gradientOpacity,
              filter: `blur(${gradientBlur}px)`,
              transition: "all 0.2s ease-out"
            }}
          />

          {/* Secondary Water-like Gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, 
                rgba(0, 102, 204, 0.2) 0%, 
                rgba(255, 105, 180, 0.2) 50%, 
                transparent 100%)`,
              scale: useTransform(mouseX, [0, 1000], [1, 1.5]),
              opacity: useTransform(mouseX, [0, 1000], [0.1, 0.3]),
              filter: `blur(${useTransform(mouseX, [0, 1000], [0, 15])}px)`,
              transition: "all 0.2s ease-out"
            }}
          />

          {/* Animated Water-like Elements */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 5, 0],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, -5, 0],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-pink-200 to-blue-200 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-pink-100 rounded-full opacity-15 blur-2xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-pink-100 to-blue-100 rounded-full opacity-15 blur-2xl"
          />
        </div>

        {/* Right Image Carousel - absolutely positioned, full height, right 1/2 */}
        <motion.div 
          variants={fadeInUp}
          className="hidden md:block fixed top-0 right-0 h-screen w-1/2 z-10"
          style={{ pointerEvents: 'none' }}
        >
          <div className="relative h-full w-full">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentImage === index ? 1 : 0,
                  transition: { duration: 0.5 }
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg opacity-90">{image.description}</p>
                </div>
              </motion.div>
            ))}
            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'bg-white w-8' : 'bg-white/50 w-3'
                  }`}
                  style={{ pointerEvents: 'auto' }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Left Content - stays in container, z-20 to be above gradients */}
        <div className="container mx-auto px-4 relative z-20 flex min-h-screen">
          <motion.div 
            variants={fadeInUp}
            className="w-full md:w-1/2 flex flex-col justify-center py-24"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-pink-100 text-blue-800 px-4 py-1 rounded-full mb-8">
              <motion.svg 
                className="w-4 h-4 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { 
                      pathLength: 1, 
                      opacity: 1,
                      transition: {
                        pathLength: { 
                          type: "spring",
                          duration: 1.5,
                          bounce: 0.3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        },
                        opacity: { duration: 0.01 }
                      }
                    }
                  }}
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </motion.svg>
              <span className="text-xs font-semibold">Digital Transformation & Innovation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Transforming Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Smart Technology Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We deliver comprehensive digital transformation, cybersecurity, and smart solutions. Our expertise spans across:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="flex items-center group">
                <div className="bg-blue-100 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Digital Transformation</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-pink-100 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-pink-600 transition-colors">Cybersecurity</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-100 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Cloud Services</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-pink-100 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-pink-600 transition-colors">Smart Solutions</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-8 py-4 rounded-lg flex items-center group shadow-lg hover:shadow-xl transition-all"
              >
                Explore Our Services
                <motion.svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium px-8 py-4 rounded-lg flex items-center group shadow-lg hover:shadow-xl transition-all"
              >
                Request Consultation
                <motion.svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-16 bg-gradient-to-b from-white to-gray-50 relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our ROI-Focused Approach
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Prop 1 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-6">
                <div className="bg-blue-100 rounded-lg p-4 inline-block">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Solutions</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Digital Transformation
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Cybersecurity
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Smart Solutions
                </li>
              </ul>
            </motion.div>

            {/* Value Prop 2 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-6">
                <div className="bg-blue-100 rounded-lg p-4 inline-block">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Consulting</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Strategic Advisory
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Process Optimization
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Innovation Management
                </li>
              </ul>
            </motion.div>

            {/* Value Prop 3 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-6">
                <div className="bg-blue-100 rounded-lg p-4 inline-block">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Brand Strategy
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Performance Marketing
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Analytics & Insights
                </li>
              </ul>
            </motion.div>

            {/* Value Prop 4 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-6">
                <div className="bg-blue-100 rounded-lg p-4 inline-block">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Solutions</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  AI & ML Integration
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  IoT Solutions
                </li>
                <li className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 text-blue-600 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { 
                          pathLength: 1, 
                          opacity: 1,
                          transition: {
                            pathLength: { 
                              type: "spring",
                              duration: 1.5,
                              bounce: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            },
                            opacity: { duration: 0.01 }
                          }
                        }
                      }}
                    />
                  </motion.svg>
                  Smart City Integration
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <SolutionsSection />  

      <WhyChooseSection />
     
      <SuccessStoriesSection />
    
    <TechnologyStackSection />

      <InnovationHubSection />


      {/* Client Testimonials Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-16 bg-gray-50 relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "APLUSLOOP transformed our digital infrastructure with their innovative solutions."
              },
              {
                name: "Michael Chen",
                role: "CEO, InnovateX",
                image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "Their expertise in AI and blockchain helped us stay ahead of the competition."
              },
              {
                name: "Emily Rodriguez",
                role: "Director, GlobalTech",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "The team's dedication to innovation and excellence is truly remarkable."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
       <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-16 bg-blue-600 text-white relative z-10"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free ROI assessment and discover how our solutions can drive measurable business outcomes for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 font-medium px-8 py-3 rounded flex items-center mx-auto group"
              >
                Get ROI Assessment
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded flex items-center mx-auto group"
              >
                View Case Studies
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <ContactButtonModal />
    </main>
  );
} 