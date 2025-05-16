"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ServiceCardProps } from "./data";
import { cn } from "@/lib/utils";

// Enhanced Service Card component
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  section,
  imageSrc,
}) => {
  return (
    <Link href={`${href}?section=${section}`}>
      <div className="w-[280px] rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col bg-white">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10" />
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
              <ArrowUpRight className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h4>

          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {description}
          </p>

          <div className="mt-auto pt-2 border-t border-slate-100">
            <div className="flex items-center">
              <span
                className={cn(
                  "text-sm font-medium text-blue-600 transition-all duration-300",
                  "group-hover:translate-x-1"
                )}
              >
                Explore service
              </span>
              <div className="ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="h-3.5 w-3.5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
