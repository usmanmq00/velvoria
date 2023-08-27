import React from 'react'
// import { RiDeleteBinLine } from 'react-icons/ri'
import Searchfield from './Searchfield'
import { ReactComponent as Remove } from '../../../assets/remove.svg'

const Searchbar = ({ handleShowSearchbar }) => {
  return (
    <>
      <nav className='flex border-b-2 justify-center md:h-20 h-12 w-full items-center px-9 gap-x-2 z-10 absolute top-0 bg-white'>
        <Searchfield />
        <div className='md:w-4 w-3 h-4 text-lg cursor-pointer font-light md:pt-0 pt-1' onClick={handleShowSearchbar}><Remove /></div>
      </nav>
    </>
  )
}

export default Searchbar 