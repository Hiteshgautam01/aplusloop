import Image from "next/image";
import { blogCategories } from "./BlogTabs";
import { motion, AnimatePresence } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

interface BlogBannerProps {
  activeCategory?: string;
  bannerData?: {
    backgroundImage: any;
    overlayColor: string;
    defaultTitle: string;
    height: number;
  };
}

export const BlogBanner = ({
  activeCategory = "all",
  bannerData,
}: BlogBannerProps) => {
  const categoryLabel =
    blogCategories.find((cat) => cat.id === activeCategory)?.label ||
    bannerData?.defaultTitle ||
    "All Blogs";

  // Default values if bannerData is not provided
  const height = bannerData?.height || 300;
  const overlayColor = bannerData?.overlayColor || "rgba(0, 0, 0, 0.4)";
  const backgroundImageUrl = bannerData?.backgroundImage
    ? urlForImage(bannerData.backgroundImage)
    : "/blogs-banner.png";

  return (
    <div className="relative w-full mt-16" style={{ height: `${height}px` }}>
      <Image
        src={backgroundImageUrl}
        alt="Blog Banner"
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={activeCategory}
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {categoryLabel}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
};
