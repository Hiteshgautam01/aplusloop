"use client";
import React, { useRef, useState } from "react";
import { useScroll } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

// Collapsible Section Component for StickyScroll
const ScrollCollapsibleSection = ({
  title,
  children,
  titleColor = "text-pink-800",
  contentBgColor = "bg-white/50",
  iconColor = "text-pink-600",
  borderColor = "border-pink-200",
  isActive,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  titleColor?: string;
  contentBgColor?: string;
  iconColor?: string;
  borderColor?: string;
  isActive?: boolean;
  onToggle?: () => void;
}) => {
  return (
    <div
      className={`mb-6 border-b ${borderColor} pb-4 last:border-0 last:pb-0`}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-3 text-left transition-all duration-300"
        aria-expanded={isActive}
      >
        <h3
          className={`text-xl font-semibold ${titleColor} transition-colors duration-300`}
        >
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className={`flex items-center justify-center w-8 h-8 rounded-full border ${borderColor} ${iconColor}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M4 12H20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className={`overflow-hidden pt-4 ${contentBgColor}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const StickyScroll = ({
  content,
  contentClassName,
  title,
  subtitle,
  introText,
}: {
  content: {
    title: string;
    content: React.ReactNode;
  }[];
  contentClassName?: string;
  title: string;
  subtitle?: string;
  introText?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });

  // Toggle section open/closed
  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Create a brand image that will be sticky on the left
  const BrandImage = () => (
    <div className="relative w-full h-full aspect-square rounded-xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-700 opacity-90"></div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="mx-auto w-32 h-32 mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Branding Excellence
          </h3>
          <p className="text-white/80">
            Crafting memorable brand experiences that resonate and inspire
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="relative h-[35rem] overflow-y-auto rounded-md p-6"
      ref={ref}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Sticky image on the left */}
        <div className="hidden lg:block">
          <div className="sticky top-10">
            <div
              className={cn(
                "h-96 w-full overflow-hidden rounded-xl shadow-lg",
                contentClassName
              )}
            >
              <BrandImage />
            </div>
          </div>
        </div>

        {/* Content with header and accordion on the right */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{title}</h2>
            {subtitle && (
              <p className="text-xl mb-6 text-gray-600">{subtitle}</p>
            )}

            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full mb-8"></div>

            {introText && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg mb-10 text-gray-700"
              >
                {introText}
              </motion.p>
            )}

            {/* Accordion sections */}
            <div className="space-y-2 bg-pink-50/40 p-6 rounded-xl">
              {content.map((item, index) => (
                <ScrollCollapsibleSection
                  key={index}
                  title={item.title}
                  titleColor="text-pink-800"
                  contentBgColor="bg-white/50"
                  iconColor="text-pink-600"
                  borderColor="border-pink-200"
                  isActive={activeIndex === index}
                  onToggle={() => toggleSection(index)}
                >
                  {item.content}
                </ScrollCollapsibleSection>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
