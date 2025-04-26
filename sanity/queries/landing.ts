import { groq } from 'next-sanity'
import { client } from '../lib/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client)
export const urlForImage = (source: SanityImageSource) => {
  return builder.image(source)
}

// Query for fetching the landing page
export async function getLandingPage() {
  return client.fetch(
    `*[_type == "landingPage"][0]{
      _id,
      title,
      slug,
      metaDescription,
      bannerSlider{
        autoplaySpeed,
        slides[]{
          _key,
          title,
          subtitle,
          description,
          image,
          cta,
          ctaLink,
          secondaryCta,
          secondaryCtaLink
        }
      }
    }`
  )
}