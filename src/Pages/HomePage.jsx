import React from 'react'
import PageTransition from '../PageTransition'
import SEO from '../SEO'
import HomeHeroSection from '../Components/Home Page/HomeHeroSection'
import HomeFeaturedPage from '../Components/Home Page/HomeFeaturedPage'

const HomePage = () => {
  return (
    <PageTransition>
      <SEO />
      <HomeHeroSection />
      <HomeFeaturedPage />
    </PageTransition>
  )
}

export default HomePage