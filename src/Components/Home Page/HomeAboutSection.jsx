import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaArrowRight } from 'react-icons/fa';

const HomeAboutSection = () => {  
  return (
    <>
      <section className="backdrop-blur-sm border-1 rounded-2xl flex px-4 sm:px-6 lg:px-6">
        <div className="container py-10 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Passionate About{' '}
              <span className="bg-emerald-400/60 bg-clip-text text-transparent">
                Digital Experiences?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a Frontend developer, with a passion for React and modern web technologies. 
              I blend clean code principles with creative UI/UX to transform ideas into exceptional digital experiences. 
              From smooth animations to pixel-perfect interfaces, every project is an opportunity to push the boundaries 
              of what's possible on the web. Let's build something remarkable together.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-border font-semibold shadow-emerald hover:shadow-emerald-lg transition-all duration-300 glow-hover"
            >
              Learn More About Me
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <div className="">
          <p>David</p>
        </div>
      </section>
    </>
  );
};

export default HomeAboutSection;