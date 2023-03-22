import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='not-found w-full h-screen flex flex-col justify-center items-center'>
      <div className='absolute w-full h-full top-0 bg-black/70 ' ></div>
      <div className='max-500px text-center bg-white z-10 py-5 px-7 md:py-10 md:px-14 mb-4'>
        <h2 className='text-8xl font-bold animate-bounce'>404 Error</h2>
        <p className='text-xl font-semibold'>Page not found</p>
      </div>
        <p className='text-white font-semibold mb-4 z-10'>¡What are you looking for go back!</p>
        <Link to='/' className='text-white border border-white py-2 px-7 btn relative z-10'>
          <button>HOME</button>
        </Link>
    </div>
  )
}

export default NoPage