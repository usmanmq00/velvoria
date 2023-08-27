import React, { useState } from 'react'
import Logo from '../../../assets/logo_shoes_black.webp'
import { BiSearch } from 'react-icons/bi'
import { ReactComponent as Grid } from '../../../assets/Menu_Grid.svg'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'
import { ReactComponent as Cart } from '../../../assets/navCart.svg'
import { ReactComponent as User } from '../../../assets/navUser.svg'

const Navbar = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);

  const handleShowSearchbar =() => {
    setShowSearchbar(!showSearchbar);
  }

  return (
    <>
      <nav className='flex md:border-b-2 justify-between md:h-20 h-12 w-full items-center md:px-9 px-5 z-0'>
          <Link to='.'><img className='md:w-36 w-20 md:h-6 h-4 leading-6 max-w-full font-normal cursor-pointer text-purple-900' src={Logo} alt="My Logo" /></Link>
          <ul className='flex md:text-lg text-sm h-11 md:gap-8 gap-2 leading-7 font-normal items-center'>  
            <li className='cursor-pointer w-7 h-8 md:mt-2 mt-3' onClick={handleShowSearchbar}><BiSearch className='mt-1 text-lg'/></li>
            <Link to='/custom-order'><li className='cursor-pointer w-32 md:block hidden'>Custom Order</li></Link>
            <Link to='/cart'><li className='cursor-pointer w-12 md:block hidden'>Cart</li></Link>
            <li className='cursor-pointer md:w-12 w-5 md:hidden block'><Cart /></li>
            <Link to='/account/login'><li className='cursor-pointer w-12 md:block hidden'>Account</li></Link>
            <Link to='/account/login'><li className='cursor-pointer md:w-12 w-4 md:hidden block'><User /></li></Link>
            <li className='cursor-pointer w-12'><Grid className='h-6'/></li>
          </ul>
      </nav> 
      {
        showSearchbar && <Searchbar handleShowSearchbar={handleShowSearchbar} />
      }
    </>
  )
}

export default Navbar 