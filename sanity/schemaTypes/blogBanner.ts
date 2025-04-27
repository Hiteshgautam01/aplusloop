import { defineField, defineType } from "sanity";

export const blogBanner = defineType({
  name: "blogBanner",
  title: "Blog Banner",
  type: "object",
  fields: [
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The main background image for the blog banner",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "overlayColor",
      title: "Overlay Color",
      type: "string",
      description: "Color for the overlay (e.g., rgba(0,0,0,0.4))",
      initialValue: "rgba(0,0,0,0.4)",
    }),
    defineField({
      name: "defaultTitle",
      title: "Default Title",
      type: "string",
      description: "Default title displayed when no category is selected",
      initialValue: "All Blogs",
    }),
    defineField({
      name: "height",
      title: "Banner Height",
      type: "number",
      description: "Height of the banner in pixels",
      initialValue: 300,
      validation: (Rule) => Rule.min(100).max(800),
    }),
  ],
  preview: {
    select: {
      title: "defaultTitle",
      media: "backgroundImage",
    },
    prepare({ title, media }) {
      return {
        title: title || "Blog Banner",
        media,
      };
    },
  },
});
