import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Searchfield = () => {
  return (
    <>
        <div className='flex search cursor-pointer relative'>
            <input
            className='p-3.5 md:h-11 h-4 m-1 font-normal w-80 md:searchfield md:text-base text-sm tracking-wider outline-0'
            type="search"
            placeholder='Search'
            />
            <div className='md:w-12 w-8 md:h-10 h-5 md:text-4xl text-2xl pt-2'><BiSearch /></div>
        </div>
       
    </>
  )
}

export default Searchfield