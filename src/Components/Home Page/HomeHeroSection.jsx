import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const HomeHeroSection = () => {
    return (
  <section 
      className="min-h-[80svh] flex items-center justify-center relative overflow-hidden"
    > 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-5xl sm:text-6xl">👋</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="bg-emerald-300 bg-clip-text text-transparent">
                David Akpom
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
              Frontend Developer
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              I craft websites that blend aesthetics, performance, and conversion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center sm:items-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 gradient-primary primary-foreground rounded-2xl font-semibold shadow-emerald-lg hover:shadow-emerald transition-all duration-300 glow-hover"
              >
                View My Work
                <FaArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-semibold border border-border hover:bg-sidebar-accent transition-all duration-300"
              >
                Let's Collaborate
                <FaArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default HomeHeroSection