import React from 'react'
import Logo from '../assets/logo_shoes_black.webp'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import  Input  from '../components/common/Input'
import Check from '../components/common/Check'
 
const Checkout = ({text}) => {
  return (
    <>
     <section className='md:flex w-[100vw] h-[850px]'>
        <section className='md:w-[55vw] w-[100vw] bg-white md:pl-52 md:pr-16 pl-20 pr-20' >
            <header className='mb-8'>
              <Link to='/'><img className='w-60 pb-5 pt-14' src={Logo} alt="My Logo" /></Link>
              <ul className='flex text-xs'>
                <Link to='/cart'><li className='pr-2 text-gray-500'>Cart</li></Link>
                <li>{<IoIosArrowForward className='text-sm mr-2 fill-gray-500'/>}</li>
                <li className='pr-2 text-gray-800'>Information</li>
                <li>{<IoIosArrowForward className='text-sm mr-2 fill-gray-500'/>}</li>
                <li className='pr-2 text-gray-500'>Shipping</li>
                <li>{<IoIosArrowForward className='text-sm mr-2 fill-gray-500'/>}</li>  
                <li className='pr-2 text-gray-500'>Payment</li>
              </ul>
            </header>
            <section className='mb-8'> 
              <div className='flex justify-between'>
                <h1 className='text-lg'>Contact</h1>
                <p className='text-gray-500 font-normal'>Already have an account? <Link to='/account/login'><u className='text-gray-500 font-normal'>Log in</u></Link></p>
              </div>
              <Input type='Email' value='Email'/>
              <Check text='Email me news and offers'/>
            </section> 
            <section className='mb-8'> 
              <div className='flex justify-between'>
                <h1 className='text-lg'>Shipping address</h1>
              </div>
              <div className='flex gap-4'>
                <Input type='text' value='First name (optional)' />
                <Input type='text' value='Last name' />
              </div>
              <Input type='text' value='Address' />
              <Input type='text' value='Apartment, suite, etc. (optional)' />
              <Input type='text' value='City' />
              <Input type='text' value='Phone' />
              <Check text='Save this information for next time'/>
              <div className='mt-8 mb-14 flex justify-between'>
                <Link to='/cart'><div className='flex text-gray-500 pt-5 font-normal'>
                  <IoIosArrowBack className='mt-1 mr-5'/>
                  <div>
                  </div>
                    Return to cart
                  </div></Link>
                <button className='bg-black text-white px-5 py-5'>Continue to shipping</button>
              </div>
              <hr />
              <ul className='mt-2 text-xs flex'>
                <li><u className='pr-3 cursor-pointer'>Refund policy</u></li>
                <li><u className='pr-3 cursor-pointer'>Ship1ping policy</u></li>
                <li><u className='pr-3 cursor-pointer'>Privacy policy</u></li>
                <li><u className='pr-3 cursor-pointer'>Terms of service</u></li>
                <li><u className='pr-3 cursor-pointer'>Contact information</u></li>
              </ul>
            </section> 
        </section>
        <section className='w-[45vw] border-l-2 border-gray-200 bg-gray-100'>
            
        </section>
     </section>
    </> 
  )
}

export default Checkout
