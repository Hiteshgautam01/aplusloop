"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ServiceCategoryProps } from "./data";

// Service Category Tab component
export const ServiceCategoryTab: React.FC<ServiceCategoryProps> = ({
  title,
  icon: Icon,
  href,
  active,
  onMouseEnter,
}) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-2 px-4 py-3 cursor-pointer rounded-md transition-colors",
        active
          ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
          : "hover:bg-blue-50/50 hover:text-blue-600"
      )}
      onMouseEnter={onMouseEnter}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{title}</span>
      {active && <ChevronRight className="h-4 w-4 ml-auto" />}
    </div>
  );
};
