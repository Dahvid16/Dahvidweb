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

  // const isActive = (path) => location.pathname === path;

  return (
    <nav className='hidden bg-linear-to-r from-emerald-200 to-emerald-100 md:flex text-center px-6 py-8 my-4 ml-4'>
      <div className='flex flex-col gap-5'>
        <picture className='bg-gray-300/60 h-25 w-25 rounded-3xl flex items-center justify-center mx-auto shadow-md'>
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
      </div>
    </nav>
  )
}

export default SideBar