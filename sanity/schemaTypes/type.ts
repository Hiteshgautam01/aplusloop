// types/sanity.ts
import { Image, PortableTextBlock } from 'sanity'

// Banner Slider types
export interface BannerSlide {
  _type: 'bannerSlide'
  _key: string
  title: string
  subtitle?: string
  description?: string
  image?: Image
  cta?: string
  ctaLink?: string
  secondaryCta?: string
  secondaryCtaLink?: string
}

export interface BannerSlider {
  _type: 'bannerSlider'
  slides: BannerSlide[]
  autoplaySpeed?: number
}

// Landing Page type
export interface LandingPage {
  _id: string
  _type: 'landingPage'
  title: string
  slug: {
    current: string
  }
  metaDescription?: string
  bannerSlider: BannerSlider
  // We'll add other sections later
}