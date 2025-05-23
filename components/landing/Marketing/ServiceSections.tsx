"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface MarketingSection {
  title: string;
  description: string;
  href?: string;
  section: string;
  imageSrc?: string;
}

export interface MarketingServiceSectionProps {
  title: string;
  sections: MarketingSection[];
  activeCategory: string;
}

// Service Sections component with sections list on left and card display on right
export const ServiceSections: React.FC<MarketingServiceSectionProps> = ({
  title,
  sections,
  activeCategory,
}) => {
  const [hoveredSection, setHoveredSection] = React.useState(0);

  return (
    <div className="flex flex-col h-full w-full max-w-6xl">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="flex space-x-8">
        {/* Left side - sections list */}
        <div className="w-[300px]">
          <ul className="space-y-1 pr-4">
            {sections.map((section, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 border",
                  hoveredSection === index
                    ? "bg-[#FFF5F9] text-[#C4008C] border-[#FFE0F0] shadow-sm"
                    : "hover:bg-[#FFF5F9]/30 border-transparent hover:border-pink-100"
                )}
                onMouseEnter={() => setHoveredSection(index)}
              >
                <h4 className="font-medium text-sm">{section.title}</h4>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right side - card display */}
        <div className="transition-all duration-300 ease-in-out">
          {sections[hoveredSection] && (
            <motion.div
              key={hoveredSection}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="p-1 rounded-xl bg-gradient-to-br from-[#FFF5F9] to-[#FFE0F0]"
            >
              <Link
                href={`${sections[hoveredSection].href}?section=${sections[hoveredSection].section}`}
              >
                <div className="w-[280px] rounded-xl border border-pink-200 overflow-hidden group hover:shadow-lg hover:border-[#FFE0F0] transition-all duration-300 flex flex-col bg-white">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C4008C]/10 to-transparent z-10" />
                    {sections[hoveredSection].imageSrc ? (
                      <Image
                        src={sections[hoveredSection].imageSrc!}
                        alt={sections[hoveredSection].title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-[#FF3D9A]/10 to-[#C4008C]/10 flex items-center justify-center">
                        <span className="text-[#C4008C] text-sm">
                          Service Preview
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                        <ArrowUpRight className="h-4 w-4 text-[#C4008C]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-[#C4008C] transition-colors">
                      {sections[hoveredSection].title}
                    </h4>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {sections[hoveredSection].description}
                    </p>

                    <div className="mt-auto pt-2 border-t border-pink-100">
                      <div className="flex items-center">
                        <span
                          className={cn(
                            "text-sm font-medium text-[#C4008C] transition-all duration-300",
                            "group-hover:translate-x-1"
                          )}
                        >
                          Explore service
                        </span>
                        <div className="ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#C4008C]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
