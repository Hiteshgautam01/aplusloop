import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      description: "A short summary of the blog post that appears in listings",
      validation: (Rule) =>
        Rule.required().max(300).warning("Excerpts should be concise"),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      description:
        "Blog category ID (should match the IDs defined in Blog Categories)",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Case Studies", value: "case-studies" },
          { title: "Event Reviews", value: "event-reviews" },
          { title: "Awards", value: "awards" },
          { title: "Product News", value: "product-news" },
        ],
      },
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description:
        "Mark this post to be eligible for featuring on the blog page",
      initialValue: false,
    }),
    defineField({
      name: "body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      category: "category",
    },
    prepare(selection) {
      const { author, category } = selection;
      return {
        ...selection,
        subtitle: `${category ? `${category} • ` : ""}${author ? `by ${author}` : ""}`,
      };
    },
  },
});
