"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface MarketingServiceCategoryProps {
  title: string;
  icon: LucideIcon;
  href: string;
  active: boolean;
  onMouseEnter: () => void;
}

export const ServiceCategoryTab: React.FC<MarketingServiceCategoryProps> = ({
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
          ? "bg-gradient-to-r from-[#FFF5F9] to-[#FFE0F0] text-[#C4008C] border-l-[3px] border-l-[#FF3D9A] shadow-sm"
          : "hover:bg-[#FFF5F9]/50 hover:text-[#C4008C] hover:border-l-[3px] hover:border-l-[#FF3D9A]/50"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center p-1.5 rounded-md transition-colors",
          active
            ? "bg-[#FFE0F0] text-[#C4008C]"
            : "text-slate-500 group-hover:text-[#C4008C]"
        )}
      >
        <Icon
          className={cn(
            "h-[18px] w-[18px] transition-transform",
            active ? "scale-110" : ""
          )}
        />
      </div>

      <span
        className={cn(
          "font-medium tracking-wide transition-all",
          active ? "text-[#C4008C]" : "text-slate-700"
        )}
      >
        {title}
      </span>

      <div className="ml-auto flex items-center">
        {active && (
          <div className="flex items-center space-x-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-[#FF3D9A]" />
          </div>
        )}
      </div>
    </Link>
  );
};
