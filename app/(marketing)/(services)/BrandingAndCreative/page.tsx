import HeroSection from '@/components/reusable/HeroSection'
import StartingSection from './components/StartingSection'
import React from 'react'
import BrandingServices from './components/BrandingServices'

const BrandingAndCreative = () => {
  return (
    <div>
          <HeroSection heading="Branding & Creative" subheading="Branding & Creative" description="We create brand identities that stand out and connect with your audience." />
          <StartingSection />
          <BrandingServices />
    </div>
  )
}

export default BrandingAndCreative