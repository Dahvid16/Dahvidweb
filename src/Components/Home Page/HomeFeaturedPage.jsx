import React from 'react'
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeFeaturedPage = () => {
      const featuredProjects = [
        {
          id: 1,
          title: "SmartEd Africa",
          description: "E-learning platform with interactive dashboard, user authentication, and responsive design",
          tech: ["React", "Firebase", "TailwindCSS"],
          liveUrl: "#",
          codeUrl: "#"
        },
        {
          id: 2,
          title: "FinTech Dashboard",
          description: "Real-time financial analytics dashboard with charts and data visualization",
          tech: ["React", "Framer Motion"],
          liveUrl: "#",
          codeUrl: "#"
        },
        {
          id: 3,
          title: "E-Commerce Store",
          description: "Modern online store with cart functionality and payment integration",
          tech: ["React", "Stripe", "TailwindCSS"],
          liveUrl: "#",
          codeUrl: "#"
        }
    ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured{' '}
              <span className="bg-emerald-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcasing my most recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 glow-hover"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-emerald transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-sidebar-accent transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-semibold"
            >
              View All Projects
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
  )
}

export default HomeFeaturedPage