"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  tagText?: string;
  tagBgColor?: string;
  tagTextColor?: string;
  heading: string;
  subheading: string;
  description: string;
  dividerColor?: string;
  bgGradient?: string;
  textColor?: string;
  subheadingColor?: string;
  descriptionColor?: string;
}

const HeroSection = ({
  tagText = "Featured",
  tagBgColor = "bg-blue-500/20",
  tagTextColor = "text-blue-200",
  heading,
  subheading,
  description,
  dividerColor = "bg-blue-500",
  bgGradient = "bg-gradient-to-br from-slate-900 to-blue-900",
  textColor = "text-white",
  subheadingColor = "text-blue-100",
  descriptionColor = "text-blue-200",
}: HeroSectionProps) => {
  return (
    <section className={cn(bgGradient, textColor, "pt-24 pb-16 mb-10 px-4")}>
      <div className="max-w-6xl mx-auto">
        {tagText && (
          <span
            className={cn(
              "inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3",
              tagBgColor,
              tagTextColor
            )}
          >
            {tagText}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{heading}</h1>
        <p className={cn("text-xl max-w-3xl mb-8", subheadingColor)}>
          {subheading}
        </p>
        <div className={cn("h-1 w-20 rounded-full mb-8", dividerColor)}></div>
        <p className={cn("max-w-3xl", descriptionColor)}>{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
