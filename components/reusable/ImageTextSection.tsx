"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageTextSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  title: string;
  subtitle?: string;
  badge?: string;
  content: ReactNode;
  customImage?: ReactNode;
  decorative?: boolean;
  className?: string;
}

export default function ImageTextSection({
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  title,
  subtitle,
  badge,
  content,
  customImage,
  decorative = true,
  className = "",
}: ImageTextSectionProps) {
  return (
    <section className={` relative overflow-hidden ${className}`}>
      {/* Background decorative elements - positioned inside the component */}
      {decorative && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className={`flex flex-col-reverse ${
            imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-16`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: imagePosition === "right" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {badge && (
              <motion.span
                className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-2 inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {badge}
              </motion.span>
            )}

            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            {subtitle && (
              <p className="text-xl text-gray-700 mb-4">{subtitle}</p>
            )}
            <div className="h-1 w-16 bg-blue-600 mb-8 rounded-full"></div>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              {content}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: imagePosition === "right" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Main image or custom image */}
              {customImage ? (
                <div className="h-72 md:h-96">{customImage}</div>
              ) : imageSrc ? (
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl relative h-72 md:h-96"
                  initial={{
                    clipPath: "inset(10% 10% 10% 10% round 1rem)",
                    opacity: 0.5,
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0% round 1rem)",
                    opacity: 1,
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
                </motion.div>
              ) : null}

              {/* Decorative elements */}
              {decorative && (
                <>
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-200 rounded-tr-2xl z-0"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-blue-200 rounded-bl-2xl z-0"></div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}