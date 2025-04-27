import { defineField, defineType } from "sanity";

export const blogPostPage = defineType({
  name: "blogPostPage",
  title: "Blog Post Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description:
        "Title for the blog post page template (not individual posts)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relatedPostsTitle",
      title: "Related Posts Section Title",
      type: "string",
      description: "Title for the related posts section",
      initialValue: "Related Posts",
    }),
    defineField({
      name: "showRelatedPosts",
      title: "Show Related Posts",
      type: "boolean",
      description: "Display related posts at the bottom of blog posts",
      initialValue: true,
    }),
    defineField({
      name: "relatedPostsCount",
      title: "Number of Related Posts",
      type: "number",
      description: "How many related posts to display",
      initialValue: 3,
      validation: (Rule) => Rule.min(0).max(6),
      hidden: ({ document }) => !document?.showRelatedPosts,
    }),
    defineField({
      name: "showAuthor",
      title: "Show Author Information",
      type: "boolean",
      description: "Display author details on blog posts",
      initialValue: true,
    }),
    defineField({
      name: "showPublishDate",
      title: "Show Publish Date",
      type: "boolean",
      description: "Display the publication date on blog posts",
      initialValue: true,
    }),
    defineField({
      name: "socialSharingEnabled",
      title: "Enable Social Sharing",
      type: "boolean",
      description: "Add social sharing buttons to blog posts",
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Blog Post Page Template",
      };
    },
  },
});
