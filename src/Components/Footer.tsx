import React from 'react';
import { Link } from 'react-router-dom';
import {} from 'react-icons'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarker, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
      { href: 'https://github.com/Dahvid16', icon: FaGithub, label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/davidakpom', icon: FaLinkedin, label: 'LinkedIn' },
      { href: 'https://instagram.com/dahvidweb', icon: FaInstagram, label: 'Instagram' },
      { href: 'https://x.com/dahv_id16', icon: FaXTwitter, label: 'X' },
      { href: 'https://wa.me/2348162016410?text=Good%20Day%20Sir.%20I%20got%20your%20number%20from%20your%20website.%20I..', icon: FaWhatsapp, label: 'WhatsApp' },
    ];

  return (
    <footer className="block glassy text-primary-foreground px-5 pt-16 pb-10 md:hidden text-gray-800" style={{borderRadius: "50px 50px 0 0"}}>
      <div className="container-custom">
          <div className="space-y-8">
          
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="flex flex-col leading-tight">
                  <h2 className="text-heading text-3xl font-bold tracking-wide">
                    DAVID AKPOM
                  </h2>
                  <p className='flex-nowrap text-lg tracking-widerr font-medium italic'>Frontend Developer</p>
                </div>
              </Link>
              <p className="text-body">
                Professional website creation with integrity, expertise, and dedication 
                to serving our clients' best interests.
              </p>
            </div>
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>
                  <a href="mailto:dahvidweb@gmail.com" target="_blank" rel="noopener noreferrer">
                    dahvidweb@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarker className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold mb-4">Connect on Social</h3>
                <div className="grid grid-cols-2 px-3 gap-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 bg-white/20 border border-border rounded-xl hover:border-primary/50 hover:bg-gradient-glow transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-medium text-sm">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-grey/20 mt-12 pt-6 text-center">
          <p className="text-grey/70">
            © 2025 Dahvidweb. All rights reserved. Privacy Policy | Terms of Service
          </p>
          <p className='hidden font-bold italic text-lg'>Dahvidweb</p>
        </div>
    </footer>
  );
};

export default Footer