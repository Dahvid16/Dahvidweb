import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaEnvelope, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import Logo from '../assets/Images/Logo.png'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const open = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ];

  return (
    <nav className='lg:hidden flex flex-row bg-linear-to-r from-emerald-200 to-emerald-100 justify-between px-6 py-3 shadow-md items-center'>
        <h1 className='text-[1.8rem] font-bold'>Dahvidweb</h1>
        <div className="text-xl font-bold cursor-pointer" onClick={open}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <AnimatePresence>
        {isMenuOpen && (
        <>
        <motion.ul className='absolute top-17 flex flex-col bg-linear-to-l from-emerald-200 to-emerald-100 left-0 space-y-2 w-[50%] items-center py-3 px-8 shadow-md'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2, delay: 0 }}
        >
            <div className='flex flex-col gap-5 w-full'>
                <picture className='bg-gray-300/60 h-25 w-25 rounded-3xl flex items-center justify-center mx-auto shadow-md'>
                    <img src={Logo} alt="Dahvidweb Logo" />
                </picture>
                <div className='text-center'>
                  <h1 className="text-gray-800 font-bold text-xl">AKPOM David Ikenna</h1>
                  <h4 className='font-medium mt-3'>Frontend Developer</h4>
                  <p></p>
                </div>
                <div>
                </div>    
            </div>
            {navItems.map((item) => (
                <NavLink
                key={item.name}
                to={item.path}
                className={({isActive}) => `flex items-center justify-center gap-3 px-3 py-2 w-full text-lg rounded font-medium ${isActive ? 'bg-emerald-700/25 text-white' : 'text-gray-800'}`}
                onClick={open}>
                    {item.name}
                </NavLink>
            ))}
            <div className="w-full h-1 bg-gray-400"></div>
                <div className="flex flex-row justify-start items-center text-center gap-4">
                  <div className='bg-gray-300/60 p-[0.4rem] rounded-lg cursor-pointer shadow-md'>
                    <a href="mailto:dahvidweb@gmail.com" target="_blank" rel="noreferrer">
                      <FaEnvelope className='text-xl text-gray-800' />
                    </a>
                  </div>
                  <div className='bg-gray-300/60 p-[0.4rem] rounded-lg cursor-pointer shadow-md'>
                    <a href="www.instagram.com/dahvidweb" target="_blank" rel="noreferrer">
                      <FaInstagram className='text-xl text-gray-800' />
                    </a>
                  </div>
                  <div className='bg-gray-300/60 p-[0.4rem] rounded-lg cursor-pointer shadow-md'>
                    <a href="https://www.linkedin.com/in/davidakpom" target="_blank" rel="noreferrer">
                      <FaLinkedin className='text-xl text-gray-800' />
                    </a>
                  </div>
                  <div className='bg-gray-300/60 p-[0.4rem] rounded-lg cursor-pointer shadow-md'>
                    <a href="https://github.com/Dahvid16" target="_blank" rel="noreferrer">
                      <FaGithub className='text-xl text-gray-800' />
                    </a>
                  </div>
                  <div className='bg-gray-300/60 p-[0.4rem] rounded-lg cursor-pointer shadow-md'>
                    <a href="https://x.com/dahv_id16.com" target="_blank" rel="noreferrer">
                      <FaXTwitter className='text-xl text-gray-800' />
                    </a>
                  </div>
                </div>
        </motion.ul>
        </>
        )}
        </AnimatePresence>
    </nav>
  )
}

export default NavBar