import { RiStarFill, RiVerifiedBadgeFill } from '@remixicon/react'
import React from 'react'
import { assets } from '../assets/assets'

const Review = ({name, description}) => {
  return (
    <div className='p-5 border border-gray-500 h-48 sm:h-56'>
        <div className='flex gap-1'>
            {
                new Array(5).fill(0).map((star, idx) => (
                    // <RiStarFill className='size-5' />
                    <img key={idx} className='size-4 sm:size-5' src={assets.star} alt="star" />
                ))
            }
        </div>
      <h3 className='font-semibold text-base sm:text-xl my-3 text-gray-900 flex items-center gap-2'>{name} <RiVerifiedBadgeFill className='size-4' /> </h3>
      <p className='text-gray-600 text-xs sm:text-base'>{description}</p>
    </div>
  )
}

export default Review
