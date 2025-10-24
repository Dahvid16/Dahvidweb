import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='flex-3 flex items-center justify-center bg-gray-50'>
      <div className='max-w-md flex flex-col items-center justify-center text-center p-8'>
        <FaExclamationTriangle className='text-[7rem] text-emerald-600 mb-5' />
        <h1 className='text-4xl font-extrabold text-gray-900 mb-4'>Not Found</h1>
        <p className='text-gray-900'>Sorry, this page is does not exist at this moment.</p>
        <Link to='/' className='bg-gray-500 px-5 py-2 rounded-2xl text-white/90 font-semibold mt-5 cursor-pointer'>
          Go Back
        </Link>
      </div>
    </section>
  )
}

export default NotFound