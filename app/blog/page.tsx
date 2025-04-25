"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BlogBanner } from "@/components/blog/BlogBanner";
import { BlogTabs } from "@/components/blog/BlogTabs";
import { BlogListing } from "@/components/blog/BlogListing";
import { FeaturedBlogs } from "@/components/blog/FeaturedBlogs";
import { Footer } from "@/components/landing/Footer";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <BlogBanner activeCategory={activeCategory} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <BlogTabs
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <BlogListing activeCategory={activeCategory} />
          </div>
          <div className="w-full lg:w-1/4">
            <FeaturedBlogs />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
