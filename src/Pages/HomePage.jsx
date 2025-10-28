import React from 'react'
import PageTransition from '../PageTransition'
import SEO from '../SEO'
import HomeHeroSection from '../Components/Home Page/HomeHeroSection'

const HomePage = () => {
  return (
    <PageTransition>
      <SEO />

      <HomeHeroSection />
    </PageTransition>
  )
}

export default HomePage