import React from 'react'
import logo from '../assets/logo.png'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <div>
      <img src={logo} alt="everwear" className='w-36'/>
      <span className='text-[#FF5757] text-sm ml-1 block -mt-1.5'>ADMIN PANEL</span>
      </div>
      <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
