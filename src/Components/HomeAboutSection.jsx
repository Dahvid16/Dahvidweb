import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';



  return (
    <>
      {/* Hero Section */}
      

      {/* Featured Projects */}
      

      {/* About Snippet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Passionate About{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in frontend development, I specialize in creating 
              beautiful, responsive, and user-friendly websites that help businesses grow 
              and brands stand out in the digital space.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-2xl font-semibold shadow-emerald hover:shadow-emerald-lg transition-all duration-300 glow-hover"
            >
              Learn More About Me
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePageSection;