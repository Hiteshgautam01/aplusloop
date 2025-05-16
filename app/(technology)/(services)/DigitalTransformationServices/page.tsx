import React from 'react'
import Development from './Development'
import Banner from '../InfoSecurityServices/components/Banner'

const DigitalTransformationServices = () => {
  return (
    <div>
      <Banner 
        title="Digital Transformation Services" 
        subtitle="Modernizing enterprise platforms and developing custom applications that align with your workflows for seamless, successful integration." 
        height="500px"
        overlayType="gradient"
        overlayOpacity={0.7}
        animationDuration={0.8}
        layout="center"
        badge="Innovation"
        ctaButtons={[
          {
            text: "Get Started",
            variant: "primary",
            href: "#contact"
          },
          {
            text: "Learn More",
            variant: "outline",
            href: "#services"
          }
        ]}
        
        titleClassName="text-4xl md:text-5xl font-light mb-4"
        subtitleClassName="text-xl md:text-2xl font-light max-w-3xl mx-auto"
      />
      <Development />
    </div>
  )
}

export default DigitalTransformationServices