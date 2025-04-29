"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServiceCardProps } from "./data";

// Service Card component
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  section,
  imageSrc,
}) => {
  return (
    <Link
      href={`${href}?section=${section}`}
      className="min-w-[280px] max-w-[280px] rounded-lg border border-muted overflow-hidden group hover:shadow-md transition-all flex flex-col"
    >
      <div className="relative w-full h-32 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-medium text-sm mb-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-end">
          <span className="text-xs text-blue-600 font-medium mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
        </div>
      </div>
    </Link>
  );
};
