"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageDetailSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom" | "background" | "split";
  title: string;
  subtitle?: string;
  badge?: string;
  content: ReactNode;
  customImage?: ReactNode;
  decorative?: boolean;
  className?: string;
  theme?: "blue" | "indigo" | "purple" | "teal" | "cyan" | "sky" | "dark";
  layout?: "default" | "centered" | "hero" | "card" | "minimal";
  imageHeight?: string;
  overlayOpacity?: number;
  contentMaxWidth?: string;
}

export default function ImageDetailSection({
  imageSrc,
  imageAlt = "",
  imagePosition = "top",
  title,
  subtitle,
  badge,
  content,
  customImage,
  decorative = true,
  className = "",
  theme = "blue",
  layout = "default",
  imageHeight = "400px",
  overlayOpacity = 0.3,
  contentMaxWidth = "4xl",
}: ImageDetailSectionProps) {
  // Theme colors configuration
  const themeColors = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      badge: "bg-blue-100 text-blue-800",
      title: "text-blue-900",
      accent: "bg-blue-600",
      overlay: "from-blue-900",
      decorator: "bg-blue-100/30",
    },
    indigo: {
      bg: "from-indigo-50 to-indigo-100",
      badge: "bg-indigo-100 text-indigo-800",
      title: "text-indigo-900",
      accent: "bg-indigo-600",
      overlay: "from-indigo-900",
      decorator: "bg-indigo-100/30",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      badge: "bg-purple-100 text-purple-800",
      title: "text-purple-900",
      accent: "bg-purple-600",
      overlay: "from-purple-900",
      decorator: "bg-purple-100/30",
    },
    teal: {
      bg: "from-teal-50 to-teal-100",
      badge: "bg-teal-100 text-teal-800",
      title: "text-teal-900",
      accent: "bg-teal-600",
      overlay: "from-teal-900",
      decorator: "bg-teal-100/30",
    },
    cyan: {
      bg: "from-cyan-50 to-cyan-100",
      badge: "bg-cyan-100 text-cyan-800",
      title: "text-cyan-900",
      accent: "bg-cyan-600",
      overlay: "from-cyan-900",
      decorator: "bg-cyan-100/30",
    },
    sky: {
      bg: "from-sky-50 to-sky-100",
      badge: "bg-sky-100 text-sky-800",
      title: "text-sky-900",
      accent: "bg-sky-600",
      overlay: "from-sky-900",
      decorator: "bg-sky-100/30",
    },
    dark: {
      bg: "from-slate-900 to-slate-800",
      badge: "bg-slate-700 text-slate-100",
      title: "text-white",
      accent: "bg-blue-500",
      overlay: "from-black",
      decorator: "bg-slate-700/30",
    },
  };

  const colors = themeColors[theme];

  // Layout configurations
  const layoutStyles = {
    default: "py-20",
    centered: "py-24 text-center",
    hero: "py-32",
    card: "py-16",
    minimal: "py-12",
  };

  const renderImage = () => {
    const imageWrapper = (children: ReactNode) => (
      <motion.div
        className={`relative ${imagePosition === 'background' ? 'absolute inset-0' : ''}`}
        style={{ height: imagePosition === 'background' ? '100%' : imageHeight }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );

    if (customImage) {
      return imageWrapper(customImage);
    }

    if (imageSrc) {
      return imageWrapper(
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          <div 
            className={`absolute inset-0 bg-gradient-to-r ${colors.overlay}/40 to-transparent`}
            style={{ opacity: overlayOpacity }}
          />
        </>
      );
    }

    return null;
  };

  if (imagePosition === 'split') {
    return (
      <section className={`relative overflow-hidden ${className}`}>
        <div className="flex flex-col md:flex-row">
          {/* Image Half */}
          <div className="w-full md:w-1/2 relative" style={{ height: imageHeight }}>
            {renderImage()}
          </div>
          
          {/* Content Half */}
          <div className={`w-full md:w-1/2 bg-gradient-to-br ${colors.bg} ${layoutStyles[layout]}`}>
            <div className="max-w-2xl mx-auto px-6 md:px-12">
              {badge && (
                <motion.span
                  className={`inline-block px-4 py-1 text-sm font-medium rounded-full mb-6 ${colors.badge}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {badge}
                </motion.span>
              )}
              
              <motion.h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${colors.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
              
              {subtitle && (
                <motion.p
                  className="text-xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {subtitle}
                </motion.p>
              )}
              
              <motion.div
                className={`h-1 w-16 ${colors.accent} mb-8 rounded-full ${layout === 'centered' ? 'mx-auto' : ''}`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {content}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      {decorative && imagePosition !== 'background' && (
        <>
          <div className={`absolute top-0 right-0 w-96 h-96 ${colors.decorator} rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-0 left-0 w-64 h-64 ${colors.decorator} rounded-full blur-3xl`}></div>
        </>
      )}

      {/* Background image */}
      {imagePosition === 'background' && renderImage()}

      {/* Top image */}
      {imagePosition === 'top' && (
        <div className="relative w-full" style={{ height: imageHeight }}>
          {renderImage()}
        </div>
      )}

      {/* Content Section */}
      <div className={`relative ${imagePosition === 'background' ? 'z-10' : ''} bg-gradient-to-br ${colors.bg} ${layoutStyles[layout]}`}>
        <div className={`max-w-${contentMaxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
          {/* Header Section */}
          {badge && (
            <motion.span
              className={`inline-block px-4 py-1 text-sm font-medium rounded-full mb-6 ${colors.badge}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {badge}
            </motion.span>
          )}
          
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${colors.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div
            className={`h-1 w-16 ${colors.accent} mb-12 rounded-full ${layout === 'centered' ? 'mx-auto' : ''}`}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          {/* Content Area */}
          <motion.div
            className={layout === 'centered' ? 'text-center' : ''}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {content}
          </motion.div>
        </div>
      </div>

      {/* Bottom image */}
      {imagePosition === 'bottom' && (
        <div className="relative w-full" style={{ height: imageHeight }}>
          {renderImage()}
        </div>
      )}
    </section>
  );
}