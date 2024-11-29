import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiCloseLine, RiSearchLine } from '@remixicon/react'
import { useLocation } from 'react-router-dom'

const Search = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    }, [location])


  return showSearch && (
    <div className='border-t border-b bg-gray-50 text-center flex items-center justify-center lg:hidden'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
        <RiSearchLine className='size-4 inline text-gray-500' />
      </div>
      <RiCloseLine onClick={() => setShowSearch(false)} className='cursor-pointer text-gray-500'/>
    </div>
  )
}

export default Search
