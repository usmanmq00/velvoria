import React from 'react'
import Frame from '../../assets/global/Frame.png'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/global/FB.png'
import Instagram from '../../assets/global/INST.png'
import Youtube from '../../assets/global/Youtube.png'
import Easypaisa from '../../assets/global/easypaisa.png'
import Visa from '../../assets/global/visa.png'
import Master from '../../assets/global/master.png'
import Upaisa from '../../assets/global/upaisa.png'
import Jazzcash from '../../assets/global/jazzcash.png'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#1D1D1D] md:px-[36px] px-[18px] md:py-[80px] py-[30px] overflow-hidden'>

        <div className='lg:flex justify-between w-full md:mb-[80px] mb-[15px]'>
          <h1 className='md:h-[93px] h-[60px] w-[394.47px] md:text-[40px] text-[20px] md:leading-[54px] text-white font-semibold tracking-[1px] assistant'>
            SMART STYLING.
            <span className='text-white block font-semibold tracking-[1px]'>
              EXTRA COMFORT.
            </span>
          </h1>
          <div className='flex justify-between items-center border-b-[1px] border-[#707070] md:pb-[34px] pb-[5px]'>
            <input
              className='md:w-[920px] w-full outline-none bg-[#1D1D1D] text-white md:text-[40px] text-[16px] md:leading-[48px] font-normal'
              type='email'
              placeholder='YOUR EMAIL'
            />
            <img className='md:w-[100px] md:h-[100px] w-[40px] h-[40px]' src={Frame} alt='Arrow' />
          </div>
        </div>

        <div className='md:flex justify-between w-full md:mb-[60px] mb-[15px]'>
          <ul className='flex gap-[39.8px]'>
            <Link to='/account/login'><li className='text-white cursor-pointer text-[14px] font-semibold tracking-[0.6px]'>Login</li></Link>
            <Link to='/cart'><li className='text-white cursor-pointer text-[14px] font-semibold tracking-[0.6px]'>Cart</li></Link>
            <li className='text-white cursor-pointer text-[14px] font-semibold tracking-[0.6px] '>Track Your Order</li>
          </ul>
          <ul className='flex md:gap-[39.8px] gap-[20px] md:mt-[0px] mt-[15px]'>
            <li className='cursor-pointer'><img className='md:w-full md:h-full w-[20px] h-[20px]' src={Facebook} alt="Facebook" /></li>
            <li className='cursor-pointer'><img className='md:w-full md:h-full w-[20px] h-[20px]' src={Instagram} alt="Instagram" /></li>
            <li className='cursor-pointer'><img className='md:w-full md:h-full w-[25px] h-[20px]' src={Youtube} alt="Youtube" /></li>
          </ul>
        </div>

        <div className='border-y-[1px] border-[#707070] md:py-[31px] pt-[15px] md:mb-[57px] mb-[15px]'>
          <ul className='flex gap-[39.8px] footer-scroll'>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>AboutUs</li>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>Policies</li>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>ContactUs</li>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>FAQs</li>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>StoreLocator</li>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>Careers</li>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>Lookbook</li>
            <li className='text-white cursor-pointer text-[15px] font-semibold tracking-[0.6px]'>Blog</li>
          </ul>
        </div>

        <div className='md:mb-[64.29px] mb-[20px]'>
          <p className='text-white text-[14px] font-semibold md:pb-[54.8px] tracking-[0.6px]'>customercare@logoofficial.com</p>
          <p className='text-white text-[14px] font-semibold tracking-[0.6px]'>Inquiry call +92 42 3259 6666</p>
        </div>

        <div className='flex md:flex-row flex-col justify-between'>
          <p className='text-[#777777] text-[14px] font-semibold tracking-[0.6px]md:order-first order-last md:mt-[0px] mt-[5px]'>©2023 VELVORIA | All Rights Reserved</p>
          <ul className='flex md:gap-[39.8px] gap-[20px] md:order-last order-first'>
            <li><img src={Visa} alt="Visa" /></li>
            <li><img src={Master} alt="Master" /></li>
            <li><img src={Easypaisa} alt="Easypaisa" /></li>
            <li><img src={Upaisa} alt="Upaisa" /></li>
            <li><img src={Jazzcash} alt="Jazzcash" /></li>
          </ul>
        </div>
      </footer >
    </>
  )
}

export default Footer 