import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'

const MainLayout = () => {
  return (
    <div className='flex flex-col md:flex-row w-full relative md:space-x-4'>
      <NavBar />
      <div className='md:sticky md:top-0 md:flex md:items-center md:max-h-screen min-h-0 md:overflow-hidden'>
      <SideBar />
      </div>
      <main className="md:flex-1 md:rounded-none rounded-t-4xl overflow-y-auto p-5 bg-gray-200/50 md:m-0 mt-3">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout