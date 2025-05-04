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
  borderStyle?:
    | "default"
    | "gradient"
    | "double"
    | "dotted"
    | "glow"
    | "shadow"
    | "corner"
    | "floating"
    | "frosted"
    | "cutout"
    | "layered"
    | "neon";
  borderColor?: string;
  usePlaceholder?: boolean;
  placeholderIcon?: string;
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
  borderStyle = "default",
  borderColor = "blue",
  usePlaceholder = false,
  placeholderIcon = "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
}: ImageTextSectionProps) {
  // Define border styles
  const getBorderStyles = () => {
    switch (borderStyle) {
      case "gradient":
        return {
          wrapperClass: `p-1 bg-gradient-to-tr from-${borderColor}-600 to-${borderColor}-300 rounded-2xl`,
          imageClass: "rounded-2xl",
          decorElements: false,
        };
      case "double":
        return {
          wrapperClass: `p-3 border-4 border-${borderColor}-200 rounded-2xl`,
          imageClass: `border-2 border-${borderColor}-400 rounded-2xl`,
          decorElements: false,
        };
      case "dotted":
        return {
          wrapperClass: `p-2 border-2 border-dotted border-${borderColor}-400 rounded-2xl`,
          imageClass: "rounded-2xl",
          decorElements: false,
        };
      case "glow":
        return {
          wrapperClass: `rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.2)]`,
          imageClass: `rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.6)]`,
          decorElements: false,
        };
      case "shadow":
        return {
          wrapperClass: `rounded-2xl shadow-xl`,
          imageClass: "rounded-2xl",
          decorElements: false,
        };
      case "corner":
        return {
          wrapperClass: "rounded-2xl relative",
          imageClass: "rounded-2xl",
          decorElements: true,
        };
      case "floating":
        return {
          wrapperClass: `rounded-2xl shadow-xl transform transition-transform duration-700 hover:-translate-y-2 overflow-hidden`,
          imageClass: "rounded-2xl",
          decorElements: false,
        };
      case "frosted":
        return {
          wrapperClass: `p-2 backdrop-blur-sm bg-white/30 border border-white/50 rounded-2xl shadow-lg`,
          imageClass: "rounded-xl",
          decorElements: false,
        };
      case "cutout":
        return {
          wrapperClass: `relative rounded-2xl overflow-hidden`,
          imageClass: "rounded-2xl",
          decorElements: false,
          extraClass: `after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:mix-blend-multiply after:border-[10px] after:border-white`,
        };
      case "layered":
        return {
          wrapperClass: `relative rounded-2xl shadow-xl`,
          imageClass: "rounded-2xl",
          decorElements: false,
          extraClass: `before:content-[''] before:absolute before:-bottom-4 before:-right-4 before:w-full before:h-full before:rounded-2xl before:border-2 before:border-${borderColor}-300 before:-z-10`,
        };
      case "neon":
        return {
          wrapperClass: `rounded-2xl shadow-[0_0_10px_2px_rgba(59,130,246,0.6)]`,
          imageClass: "rounded-2xl",
          decorElements: false,
        };
      default:
        return {
          wrapperClass: "rounded-2xl overflow-hidden shadow-xl",
          imageClass: "",
          decorElements: decorative,
        };
    }
  };

  const {
    wrapperClass,
    imageClass,
    decorElements,
    extraClass = "",
  } = getBorderStyles();

  return (
    <section className={`relative overflow-hidden  ${className}`}>
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
          } items-center gap-8 md:gap-16`}
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
                className={`text-${borderColor}-600 text-sm uppercase tracking-widest font-medium mb-2 inline-block`}
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
            <div
              className={`h-1 w-16 bg-${borderColor}-600 mb-8 rounded-full`}
            ></div>

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
            <div className={`relative ${extraClass}`}>
              {/* Main image or custom image or placeholder */}
              {customImage ? (
                <div className={`h-72 md:h-96 ${wrapperClass}`}>
                  {customImage}
                </div>
              ) : usePlaceholder ? (
                <div className={`h-72 md:h-96 ${wrapperClass}`}>
                  <div className="h-full w-full bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-16 w-16 mx-auto mb-4 text-${borderColor}-500`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={placeholderIcon}
                        />
                      </svg>
                      <h3
                        className={`text-lg font-semibold text-${borderColor}-700`}
                      >
                        {imageAlt || title}
                      </h3>
                    </div>
                  </div>
                </div>
              ) : imageSrc ? (
                <motion.div
                  className={`relative h-72 md:h-96 ${wrapperClass}`}
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
                    className={`object-cover ${imageClass}`}
                  />
                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-${borderColor}-900/40 to-transparent rounded-2xl`}
                  ></div>
                </motion.div>
              ) : null}

              {/* Decorative elements */}
              {decorElements && (
                <>
                  <div
                    className={`absolute -top-4 -right-4 w-24 h-24 border-2 border-${borderColor}-200 rounded-tr-2xl z-0`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-24 h-24 border-2 border-${borderColor}-200 rounded-bl-2xl z-0`}
                  ></div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
