"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ServiceCategoryProps } from "./data";

export const ServiceCategoryTab: React.FC<ServiceCategoryProps> = ({
  title,
  icon: Icon,
  href,
  active,
  onMouseEnter,
}) => {
  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      className={cn(
        "flex items-center space-x-3 px-5 py-3.5 cursor-pointer rounded-lg transition-all duration-200",
        "border border-transparent",
        active
          ? "bg-gradient-to-r from-blue-50 to-blue-50/50 text-blue-700 border-l-[3px] border-l-blue-600 shadow-sm"
          : "hover:bg-blue-50/30 hover:text-blue-600 hover:border-l-[3px] hover:border-l-blue-400/50"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center p-1.5 rounded-md transition-colors",
          active ? "bg-blue-100/80 text-blue-700" : "text-slate-500 group-hover:text-blue-600"
        )}
      >
        <Icon
          className={cn("h-[18px] w-[18px] transition-transform", active ? "scale-110" : "")}
        />
      </div>

      <span
        className={cn("font-medium tracking-wide transition-all", active ? "text-blue-700" : "text-slate-700")}
      >
        {title}
      </span>

      <div className="ml-auto flex items-center">
        {active && (
          <div className="flex items-center space-x-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-blue-600" />
          </div>
        )}
      </div>
    </Link>
  );
};
