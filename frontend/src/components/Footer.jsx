import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='section-padding'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>At Everwear, we believe fashion should be timeless, versatile, and accessible. Our collections are crafted with quality and style in mind, blending classic elegance with modern trends to create pieces that are perfect for every occasion. Join us on our journey to redefine everyday fashion and inspire confidence in everyone who wears Everwear.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-454-656-7893</li>
                <li>contact@everwear.com</li>
            </ul>
        </div>
      </div>

      <div className=''>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 &#169; ahsanulhaque.dev - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
