import Image from "next/image";
import { blogCategories } from "./BlogTabs";
import { motion, AnimatePresence } from "framer-motion";

interface BlogBannerProps {
  activeCategory?: string;
}

export const BlogBanner = ({ activeCategory = "all" }: BlogBannerProps) => {
  const categoryLabel =
    blogCategories.find((cat) => cat.id === activeCategory)?.label ||
    "All Blogs";

  return (
    <div className="relative w-full h-[300px] mt-16">
      <Image
        src="/blogs-banner.png"
        alt="Blog Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
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
