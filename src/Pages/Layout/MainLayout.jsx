import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/SideBar'
import NavBar from '../../Components/NavBar'

const MainLayout = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-svh lg:gap-3 lg:space-x-2'>
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  )
}

export default MainLayout