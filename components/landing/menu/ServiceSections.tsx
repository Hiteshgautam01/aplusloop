"use client";

import * as React from "react";
import { ServiceSectionProps } from "./data";
import { ServiceCard } from "./ServiceCard";
import { cn } from "@/lib/utils";

// Service Sections component with sections list on left and card display on right
export const ServiceSections: React.FC<ServiceSectionProps> = ({
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
              <li
                key={index}
                className={cn(
                  "py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 border",
                  hoveredSection === index
                    ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                    : "hover:bg-blue-50/30 border-transparent hover:border-gray-100"
                )}
                onMouseEnter={() => setHoveredSection(index)}
              >
                <h4 className="font-medium text-sm">{section.title}</h4>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - card display */}
        <div className="transition-all duration-300 ease-in-out">
          {sections[hoveredSection] && (
            <div className="p-1 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <ServiceCard
                title={sections[hoveredSection].title}
                description={sections[hoveredSection].description}
                href={`${sections[hoveredSection].href}`}
                section={sections[hoveredSection].title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}
                imageSrc={sections[hoveredSection].imageSrc}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};