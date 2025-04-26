import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

// Get blog page data
export async function getBlogPageData() {
  const query = groq`
    *[_type == "blogPage"][0] {
      title,
      metaDescription,
      blogBanner,
      blogCategories,
      featuredBlogs
    }
  `;

  return client.fetch(query);
}

// Get all posts or filtered by category
export async function getPosts(category?: string) {
  const query =
    category && category !== "all"
      ? groq`
        *[_type == "post" && category == $category] | order(publishedAt desc) {
          _id,
          title,
          excerpt,
          "slug": slug.current,
          category,
          mainImage
        }
      `
      : groq`
        *[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          excerpt,
          "slug": slug.current,
          category,
          mainImage
        }
      `;

  return client.fetch(query, { category });
}

// Get featured posts
export async function getFeaturedPosts(postIds?: string[]) {
  if (postIds && postIds.length > 0) {
    const query = groq`
      *[_type == "post" && _id in $postIds] {
        _id,
        title,
        excerpt,
        "slug": slug.current,
        mainImage
      }
    `;

    return client.fetch(query, { postIds });
  }

  // Fallback: fetch posts marked as featured
  const query = groq`
    *[_type == "post" && featured == true][0...3] {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      mainImage
    }
  `;

  return client.fetch(query);
}

// Get a single post by slug
export async function getPost(slug: string) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      body,
      mainImage,
      publishedAt,
      category,
      "author": author->{name, image, bio},
    }
  `;

  return client.fetch(query, { slug });
}

// Get related posts
export async function getRelatedPosts(category: string, currentPostId: string) {
  const query = groq`
    *[_type == "post" && category == $category && _id != $currentPostId][0...3] {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      mainImage,
      publishedAt,
    }
  `;

  return client.fetch(query, { category, currentPostId });
}

// Get blog post page config
export async function getBlogPostPageConfig() {
  const query = groq`*[_type == "blogPostPage"][0]`;
  return client.fetch(query);
}

// Get all post slugs for static generation
export async function getAllPostSlugs() {
  const query = groq`*[_type == "post"] { "slug": slug.current }`;
  return client.fetch(query);
}
