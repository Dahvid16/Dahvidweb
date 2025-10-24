import React from 'react'
import { FaBriefcase, FaHouse, FaPhone, FaUser } from 'react-icons/fa6'
import { IoNewspaper, IoPerson } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

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
    <nav className='hidden bg-linear-to-r from-emerald-200 to-emerald-100 lg:flex text-center px-6 py-8 my-4 ml-4'>
      <div className='flex flex-col gap-5'>
        <picture>
          <img src="#" alt="" />
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
                className={({isActive}) => `flex items-center gap-3 w-full px-3 py-2 text-lg rounded font-medium ${isActive ? 'bg-emerald-700/25 text-white' : 'text-gray-800'}`}>
                  <span className='text-lg'>{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
          </ul>
        </div>
        <div className="w-full h-1 bg-gray-400"></div>
      </div>
    </nav>
  )
}

export default SideBar