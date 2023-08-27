import React from 'react'
import BannerImg from '../../../assets/1920_x_720_opia.jpg'

const Banner = () => {
  return (
    <>
      <section className='md:banner md:h-[700px] h-[400px] w-full bg-white overflow-hidden'>
        <section className='flex items-center md:h-full h-[400px] justify-center overflow-hidden'>
          <img className='w-full' src={BannerImg} alt="Banner" />
        </section>
      </section>
    </>
  )
}

export default Banner 