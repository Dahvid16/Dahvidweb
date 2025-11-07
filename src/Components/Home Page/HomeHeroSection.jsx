import React from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import Typewriter from '../TypeWriterEffect'

const HomeHeroSection = () => {
    return (
  <section 
      className="lg:min-h-[90svh] min-h-[70svh] flex items-center justify-center relative overflow-hidden"
    > 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
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
              <span className="text-5xl font-bold sm:text-6xl">Hi there 👋</span>
            </motion.div>
            
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              I'm{' '}
              <span className="bg-emerald-400/60 bg-clip-text text-transparent">
                <Typewriter text="AKPOM David" typingSpeed={150} deletingSpeed={75} pause={900} />
              </span>
            </p>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
              Frontend Developer
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Building modern web applications that drive growth. Specializing in fast, 
              accessible, and conversion-focused web experiences.
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
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-xl rounded-2xl font-semibold border border-border hover:bg-sidebar-accent transition-all duration-300"
              >
                Hire me
                <FaArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default HomeHeroSection