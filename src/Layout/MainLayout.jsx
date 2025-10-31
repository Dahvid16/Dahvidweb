import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col md:flex-row w-full relative md:space-x-4'>
      <NavBar />
      <SideBar />
      <main className="flex-1 overflow-y-auto p-5 bg-gray-200/50">
        <Outlet />
      </main>
    <Footer />
    </div>
  )
}

export default MainLayout