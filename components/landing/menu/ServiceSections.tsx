"use client";

import * as React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ServiceSectionProps } from "./data";
import { ServiceCard } from "./ServiceCard";
import { cn } from "@/lib/utils";

// Service Sections component with carousel and fixed width cards
export const ServiceSections: React.FC<ServiceSectionProps> = ({
  title,
  sections,
  activeCategory,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Check if scrolling is possible
  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  // Scroll left - adjusted to scroll by card width plus gap
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll by one card width (300px) plus gap (16px)
      scrollContainerRef.current.scrollBy({
        left: -316,
        behavior: "smooth",
      });
    }
  };

  // Scroll right - adjusted to scroll by card width plus gap
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll by one card width (300px) plus gap (16px)
      scrollContainerRef.current.scrollBy({
        left: 316,
        behavior: "smooth",
      });
    }
  };

  // Add event listeners
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      // Initial check
      checkScrollability();
      
      window.addEventListener("resize", checkScrollability);

      // Clean up
      return () => {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  // Check scrollability when sections change
  React.useEffect(() => {
    checkScrollability();
  }, [sections]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={cn(
              "p-2 rounded-full transition-colors",
              canScrollLeft
                ? "bg-blue-50 hover:bg-blue-100 text-blue-700"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            )}
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={cn(
              "p-2 rounded-full transition-colors",
              canScrollRight
                ? "bg-blue-50 hover:bg-blue-100 text-blue-700"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            )}
            aria-label="Scroll right"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto pb-4 w-[600px] scrollbar-hide scroll-smooth"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch" 
        }}
      >
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="flex-shrink-0" 
            style={{ width: "300px" }} // Fixed width for each card container
          >
            <ServiceCard
              title={section.title}
              description={section.description}
              href={`/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
              section={section.title.toLowerCase().replace(/\s+/g, "-")}
              imageSrc={section.imageSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};