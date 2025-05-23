"use client";

import * as React from "react";
import {
  marketingServiceCategories,
  getMarketingServiceSections,
} from "../menu/data/marketing";
import { ServiceCategoryTab } from "./ServiceCategoryTab";
import { ServiceSections } from "./ServiceSections";

export const ServicesContent: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState("Design Services");

  // Get active sections based on the selected category
  const activeSections = React.useMemo(() => {
    const sections = getMarketingServiceSections(activeCategory);

    // Find the active category to get its href
    const activeCategoryData = marketingServiceCategories.find(
      (category) => category.title === activeCategory
    );

    const categoryHref = activeCategoryData?.href;

    // Add the required href and section properties to each item
    return sections.map((item) => ({
      ...item,
      href: categoryHref,
      section: item.title.toLowerCase().replace(/\s+/g, "-"),
    }));
  }, [activeCategory]);

  return (
    <div className="grid grid-cols-[250px_1fr] gap-6 p-4">
      {/* Left side - Service categories */}
      <div className="space-y-1">
        {marketingServiceCategories.map((category) => (
          <ServiceCategoryTab
            key={category.title}
            title={category.title}
            icon={category.icon}
            href={category.href}
            active={activeCategory === category.title}
            onMouseEnter={() => setActiveCategory(category.title)}
          />
        ))}
      </div>

      {/* Right side - Service sections */}
      <div className="pl-4 border-l border-pink-100">
        <ServiceSections
          title={activeCategory}
          sections={activeSections}
          activeCategory={activeCategory}
        />
      </div>
    </div>
  );
};
