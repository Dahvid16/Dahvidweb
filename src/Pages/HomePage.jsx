import React from 'react'
import PageTransition from '../PageTransition'
import SEO from '../SEO'
import HomeHeroSection from '../Components/Home Page/HomeHeroSection'
import HomeFeaturedPage from '../Components/Home Page/HomeFeaturedPage'
import HomeAboutSection from '../Components/Home Page/HomeAboutSection'

// Change the button color
const HomePage = () => {
  return (
    <PageTransition>
      <SEO />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeFeaturedPage />
    </PageTransition>
  )
}

export default HomePage