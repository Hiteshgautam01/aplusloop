"use client";

import { useState } from "react";
import { BlogListing } from "@/components/blog/BlogListing";
import { BlogTabs } from "@/components/blog/BlogTabs";
import { FeaturedBlogs } from "@/components/blog/FeaturedBlogs";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BlogBanner } from "@/components/blog/BlogBanner";
import { Footer } from "@/components/landing/Footer";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main>
      <Navbar />
      <BlogBanner activeCategory={activeCategory} />
      <div className="container mx-auto px-4 pt-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <BlogTabs
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <BlogListing activeCategory={activeCategory} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-full lg:w-88">
            <FeaturedBlogs />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
