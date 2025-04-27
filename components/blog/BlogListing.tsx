import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { getPosts } from "@/sanity/queries/blog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Category {
  id: string;
  title: string;
}

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  categories: Category[];
  mainImage: any;
}

interface BlogCardProps {
  blog: Post;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="flex flex-col md:flex-row gap-6 p-6 border border-border rounded-lg mb-3 transition-all duration-300 hover:shadow-md hover:border-purple-700 hover:-translate-y-1">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          {blog.categories && blog.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {blog.categories.map((category) => (
                <span
                  key={category.id}
                  className="px-2 py-1 bg-muted rounded-full text-xs"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
          <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
        </div>
        <div className="w-full md:w-1/3 relative h-40 md:h-auto md:max-h-32">
          {blog.mainImage && (
            <Image
              src={urlForImage(blog.mainImage)}
              alt={blog.title}
              fill
              className="object-cover rounded-md"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

interface BlogListingProps {
  activeCategory: string;
}

export const BlogListing = ({ activeCategory }: BlogListingProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);

        // Pass activeCategory, page and pageSize to getPosts
        const result = await getPosts(activeCategory, page, pageSize);

        // Only update state if component is still mounted
        if (isMounted) {
          setPosts(result.posts || []);
          setTotalPosts(result.total || 0);
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        if (isMounted) {
          setError("Failed to load blog posts. Please try again.");
          setPosts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [activeCategory, page]);

  const totalPages = Math.ceil(totalPosts / pageSize);

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  if (loading) {
    return (
      <div className="my-8 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-8 text-center">
        <p className="text-red-500">{error}</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always include first page
    pageNumbers.push(1);

    // Add current page and surrounding pages
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      if (!pageNumbers.includes(i)) {
        pageNumbers.push(i);
      }
    }

    // Always include last page if there is more than one page
    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
      pageNumbers.push(totalPages);
    }

    // Sort the page numbers
    return pageNumbers.sort((a, b) => a - b);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="space-y-6">
      {posts.length > 0 ? (
        <>
          <div>
            {posts.map((post) => (
              <BlogCard key={post._id} blog={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page > 1) setPage(page - 1);
                    }}
                    className={
                      page === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {pageNumbers.map((pageNum, index) => {
                  // Check if we need to add ellipsis
                  if (index > 0 && pageNum > pageNumbers[index - 1] + 1) {
                    return (
                      <React.Fragment key={`ellipsis-${pageNum}`}>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setPage(pageNum);
                            }}
                            isActive={page === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      </React.Fragment>
                    );
                  }

                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(pageNum);
                        }}
                        isActive={page === pageNum}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page < totalPages) setPage(page + 1);
                    }}
                    className={
                      page === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            No blogs found in this category.
          </p>
        </div>
      )}
    </div>
  );
};
