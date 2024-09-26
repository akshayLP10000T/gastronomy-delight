import React from 'react'
import Navbar from './Navbar'
import CenterHome from './CenterHome'

const Hero = () => {
  return (
    <div className='absolute z-20 top-0 left-0 w-full h-screen text-white'>
        <Navbar />
        <CenterHome />
    </div>
  )
}

export default Hero