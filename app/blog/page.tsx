"use client";

import { useState, useEffect } from "react";
import { BlogListing } from "@/components/blog/BlogListing";
import { BlogTabs } from "@/components/blog/BlogTabs";
import { FeaturedBlogs } from "@/components/blog/FeaturedBlogs";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BlogBanner } from "@/components/blog/BlogBanner";
import { Footer } from "@/components/landing/Footer";
import { createClient } from "next-sanity";
import { getBlogPageData } from "@/sanity/queries/blog";



export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeCategoryTitle, setActiveCategoryTitle] = useState("All Blogs");
  const [blogData, setBlogData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        // Using the imported query function
        const result = await getBlogPageData();
        setBlogData(result);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      </div>
    );
  }

  // Create a categories data object compatible with BlogTabs
  const categoriesData = blogData && {
    categories: blogData.categories || [],
    showAllOption: blogData.showAllOption,
    allCategoryLabel: blogData.allCategoryLabel,
  };

  return (
    <main>
      {/* <Navbar /> */}
      <BlogBanner
        activeCategory={activeCategory}
        bannerData={blogData?.blogBanner}
        activeCategoryTitle={activeCategoryTitle}
      />
      <div className="container mx-auto px-4 pt-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <BlogTabs
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              setActiveCategoryTitle={setActiveCategoryTitle}
              categoriesData={categoriesData}
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
            <FeaturedBlogs featuredData={blogData?.featuredBlogs} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
