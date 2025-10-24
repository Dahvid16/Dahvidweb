import React from 'react'
import { FaClock, FaClockRotateLeft } from 'react-icons/fa6'
import { IoIosClock, IoMdClock } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
  return (
    <section className='flex-3 flex items-center justify-center bg-gray-50'>
      <div className='max-w-md flex flex-col items-center justify-center text-center p-8'>
        <IoMdClock className='text-[7rem] text-emerald-600 mb-5' />
        <h1 className='text-4xl font-extrabold text-gray-900 mb-4'>Coming Soon</h1>
        <p className='text-gray-900'>This page is under construction, kindly check back for update.</p>
        <Link to='/contact' className='bg-gray-500 px-5 py-2 rounded-2xl text-white/90 font-semibold mt-5 cursor-pointer'>
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default ComingSoon