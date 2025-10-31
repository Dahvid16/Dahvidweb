import React from 'react'
import { FaBriefcase, FaEnvelope, FaHouse, FaInstagram, FaLinkedin, FaPhone, FaXTwitter } from 'react-icons/fa6'
import { IoNewspaper, IoPerson } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Images/Logo.png'
import { FaGithub } from 'react-icons/fa'

const SideBar = () => {
  // const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHouse/> },
    { name: 'About', path: '/about', icon: <IoPerson/> },
    { name: 'Portfolio', path: '/services', icon: <FaBriefcase/> },
    { name: 'Blog', path: '/blog', icon: <IoNewspaper/> },
    { name: 'Contact', path: '/contact', icon: <FaPhone/> }
  ];

  const socialLinks = [
    { href: 'https://github.com/Dahvid16', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/davidakpom', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/dahvidweb', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://x.com/dahv_id16', icon: FaXTwitter, label: 'X' },
    { href: 'mailto:dahvidweb@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];

  // const isActive = (path) => location.pathname === path;

  return (
    <nav className='hidden md:flex flex-col glassy sticky top-0 px-6 py-8 overflow-y-auto text-center m-2 h-screen'>
      <div className='flex flex-col gap-5'>
        <picture className='bg-gray-300/60 h-20 w-20 rounded-3xl flex items-center justify-center mx-auto shadow-md'>
          <img src={Logo} alt="Dahvidweb Logo" />
        </picture>
        <div>
          <h1 className="text-gray-800 font-bold text-xl">AKPOM David Ikenna</h1>
          <h4 className='font-medium mt-3'>Frontend Developer</h4>
          <p></p>
        </div>
        <div>
          <ul className='space-y-2 w-full'>
            {navItems.map((item) => (
                <NavLink
                key={item.name}
                to={item.path}
                className={({isActive}) => `flex items-center gap-3 w-full px-3 py-2 text-lg rounded-2xl font-medium ${isActive ? 'bg-emerald-700/25 text-white' : 'text-gray-800'}`}>
                  <span className='text-lg'>{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
          </ul>
        </div>
        <div className="w-full h-1 bg-gray-400 mt-6"></div>
        <div className="flex flex-row justify-start items-center text-center gap-3">
            {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <div className='bg-gray-300/60 p-[0.4rem] rounded-lg cursor-pointer shadow-md'>
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-sidebar-accent flex items-center justify-center glow-hover"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
          </div>
            );
          })}
        </div>
      </div>
    </nav>
  )
}

export default SideBar