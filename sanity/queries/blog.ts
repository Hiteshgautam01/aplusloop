import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

// Get blog page data
export async function getBlogPageData() {
  const query = groq`
    *[_type == "blogPage"][0] {
      title,
      metaDescription,
      blogBanner,
      showAllOption,
      allCategoryLabel,
      "categories": categories[]->{ 
        "id": slug.current,
        title
      },
      featuredBlogs
    }
  `;

  return client.fetch(query);
}

// Get all posts or filtered by category
export async function getPosts(
  categoryId: string | undefined,
  page: number = 1,
  pageSize: number = 10
) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  // If categoryId is undefined or "all", fetch all posts
  if (!categoryId || categoryId === "all") {
    const query = groq`
      {
        "posts": *[_type == "post"] | order(publishedAt desc) [$start...$end] {
          _id,
          title,
          excerpt,
          "slug": slug.current,
          "categories": categories[]->{ "id": slug.current, title },
          mainImage
        },
        "total": count(*[_type == "post"])
      }
    `;
    return client.fetch(query, { start, end });
  }

  // Otherwise fetch posts with the specified category
  const query = groq`
    {
      "posts": *[_type == "post" && references(*[_type == "category" && slug.current == $categoryId]._id)] | order(publishedAt desc) [$start...$end] {
        _id,
        title,
        excerpt,
        "slug": slug.current,
        "categories": categories[]->{ "id": slug.current, title },
        mainImage
      },
      "total": count(*[_type == "post" && references(*[_type == "category" && slug.current == $categoryId]._id)])
    }
  `;

  return client.fetch(query, { categoryId, start, end });
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
        "categories": categories[]->{ "id": slug.current, title },
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
      "categories": categories[]->{ "id": slug.current, title },
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
      "categories": categories[]->{ "id": slug.current, title },
      "author": author->{ name, image, bio },
    }
  `;

  return client.fetch(query, { slug });
}

// Get related posts
export async function getRelatedPosts(slug: string, currentPostId: string) {
  // First check if the post exists to prevent "Cannot read properties of null" errors
  const postCheck = groq`*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(postCheck, { slug });

  if (!post) {
    return []; // Return empty array if post doesn't exist
  }

  // Get posts that share at least one category with the current post
  const query = groq`
    *[_type == "post" && _id != $currentPostId && count(
      categories[]->[slug.current in *[_type == "post" && slug.current == $slug][0].categories[]->slug.current]
    ) > 0][0...3] {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      "categories": categories[]->{ "id": slug.current, title },
      mainImage,
      publishedAt,
    }
  `;

  return client.fetch(query, { slug, currentPostId });
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

// Get all categories
export async function getAllCategories() {
  const query = groq`
    *[_type == "category"] | order(title asc) {
      "id": slug.current,
      title,
      description,
    }
  `;
  return client.fetch(query);
}
