import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 font-bold'>
      <p className='text-gray-700 philosopher-regular'>{text1} <span className='text-gray-900 philosopher-regular font-bold'>{text2}</span></p>
    </div>
  )
}

export default Title
