import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { getFeaturedPosts } from "@/sanity/queries/blog";

// Client-side Sanity client with fixed API version
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-05-03", // Using a fixed valid date format
  useCdn: true,
});

interface FeaturedBlog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  mainImage: any;
}

interface FeaturedBlogsProps {
  featuredData?: {
    title: string;
    featuredPosts: any[];
  };
}

export const FeaturedBlogs = ({ featuredData }: FeaturedBlogsProps) => {
  const [expandedBlog, setExpandedBlog] = useState(0);
  const [featuredBlogs, setFeaturedBlogs] = useState<FeaturedBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedBlogs() {
      try {
        setLoading(true);

        if (featuredData?.featuredPosts) {
          // Get the references to posts from featuredData
          const postIds = featuredData.featuredPosts.map((ref) => ref._ref);

          if (postIds.length === 0) {
            setFeaturedBlogs([]);
            return;
          }

          // Using the imported query function
          const posts = await getFeaturedPosts(postIds);
          setFeaturedBlogs(posts);
        } else {
          // Using the imported query function without params to get default featured posts
          const posts = await getFeaturedPosts();
          setFeaturedBlogs(posts);
        }
      } catch (error) {
        console.error("Error fetching featured blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedBlogs();
  }, [featuredData]);

  if (loading) {
    return (
      <div className="border border-border rounded-lg p-6 w-full md:max-w-md">
        <h2 className="text-xl font-bold mb-6 border-b pb-2">
          {featuredData?.title || "Featured Blogs"}
        </h2>
        <div className="flex justify-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
      </div>
    );
  }

  if (featuredBlogs.length === 0) {
    return (
      <div className="border border-border rounded-lg p-6 w-full md:max-w-md">
        <h2 className="text-xl font-bold mb-6 border-b pb-2">
          {featuredData?.title || "Featured Blogs"}
        </h2>
        <p className="text-center text-muted-foreground py-4">
          No featured blogs available.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-lg p-6 w-full md:max-w-md">
      <h2 className="text-xl font-bold mb-6 border-b pb-2">
        {featuredData?.title || "Featured Blogs"}
      </h2>
      <div className="space-y-0">
        {featuredBlogs.map((blog, index) => (
          <div
            key={blog._id}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              height: expandedBlog === index ? "320px" : "110px",
            }}
            onMouseEnter={() => setExpandedBlog(index)}
          >
            <Link href={`/blog/${blog.slug}`} className="block h-full">
              <div className="h-full flex flex-col border border-transparent hover:border-purple-700 rounded-lg p-3 pb-0 transition-colors">
                <div
                  className="relative w-full transition-all duration-500"
                  style={{
                    height: expandedBlog === index ? "180px" : "0",
                    opacity: expandedBlog === index ? 1 : 0,
                    marginBottom: expandedBlog === index ? "0.75rem" : "0",
                  }}
                >
                  {expandedBlog === index && blog.mainImage && (
                    <Image
                      src={urlForImage(blog.mainImage)}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  )}
                </div>
                <h3 className="text-md font-medium line-clamp-2 mb-2">
                  {blog.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: expandedBlog === index ? 3 : 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
