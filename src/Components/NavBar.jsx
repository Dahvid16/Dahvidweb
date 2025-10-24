import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

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
        <motion.ul className='absolute top-20 flex flex-col bg-linear-to-r from-emerald-200 to-emerald-100 right-0 space-y-2 w-full justify-center items-center py-2 shadow-md rounded-t-3xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2, delay: 0 }}
        >
            {navItems.map((item) => (
                <NavLink
                key={item.name}
                to={item.path}
                className={({isActive}) => `flex items-center justify-center gap-3 px-3 py-2 w-[40%] text-lg rounded font-medium ${isActive ? 'bg-emerald-700/25 text-white' : 'text-gray-800'}`}
                onClick={open}>
                    {item.name}
                </NavLink>
            ))}
        </motion.ul>
        )}
        </AnimatePresence>
    </nav>
  )
}

export default NavBar