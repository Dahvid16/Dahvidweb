import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin,FaRegPaperPlane, FaXTwitter } from 'react-icons/fa6';
// import { toast } from 'sonner';
import PageTransition from '../PageTransition';
import { FaCheckCircle } from 'react-icons/fa';
import SEO from '../SEO';

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { href: 'https://github.com/Dahvid16', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/davidakpom', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/dahvidweb', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://x.com/dahv_id16', icon: FaXTwitter, label: 'X' },
  ];

  return (
    <PageTransition>
      <SEO 
        title="Contact David Akpom – Let's Build Something Great | Dahvidweb"
        description="Reach out to Dahvidweb to discuss your website or frontend project. Let's create fast, modern, and conversion-ready web experiences."
        keywords="contact frontend developer, hire React developer, web developer for business, website design collaboration"
      />
      
      <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gap-4">
              Let's{' '}
              <span className="bg-emerald-300 bg-clip-text text-transparent">
                Connect
              </span>
              {' '}
              <span className='text-3xl'>👋</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have a project or idea in mind? I'm open to freelance work, collaborations, 
              and full-time opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                <div className="text-center bg-green-50 border-green-200">
                  <FaCheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="mb-8">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600/55 text-white rounded-xl font-semibold shadow-emerald-lg hover:shadow-emerald transition-all duration-300 glow-hover text-[1.1rem] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 placeholder:text-gray-800/60 placeholder:italic"
                      placeholder="Phil Moore"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 placeholder:text-gray-800/60 placeholder:italic"
                      placeholder="phil@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none placeholder:text-gray-800/60 placeholder:italic"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600/55 text-white rounded-xl font-semibold shadow-emerald-lg hover:shadow-emerald transition-all duration-300 glow-hover text-[1.1rem] cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaRegPaperPlane className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="border border-border rounded-2xl p-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Send us an email</h3>
                <a
                  href="mailto:dahvidweb@gmail.com"
                  className="hover:text-accent transition-colors duration-300 text-lg"
                >
                  dahvidweb@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Connect on Social</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-gradient-glow transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-medium text-sm">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-glow border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Current Availability</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-muted-foreground">Available for projects</span>
                </div>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours. Looking forward to hearing about 
                  your project!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact