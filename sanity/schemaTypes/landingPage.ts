// schemas/documents/landingPage.ts
import { defineField, defineType } from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for SEO and browser tabs',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly name',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Description for search engines',
      validation: Rule => Rule.max(160).warning('Should be under 160 characters')
    }),
    defineField({
      name: 'bannerSlider',
      title: 'Banner Slider',
      type: 'bannerSlider', // This references the bannerSlider object type
      description: 'Hero section with sliding content'
    }),
    // We'll add the remaining sections later after fixing the current issues
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'Landing Page'
      }
    }
  }
})