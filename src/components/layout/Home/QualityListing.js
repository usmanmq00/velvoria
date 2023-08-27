import React from 'react'
import Quality from './Quality'
import { ReactComponent as Q2 } from '../../../assets/Home/quality/quality2.svg'
import { ReactComponent as Q1 } from '../../../assets/Home/quality/quality1.svg'
import { ReactComponent as Q3 } from '../../../assets/Home/quality/quality3.svg'


const QualityListing = () => {
  return (
    <>
      <section className='bg-white overflow-hidden'>
        <div className='my-[80px] mx-auto'>
          <h1 className='pb-[50px] text-center md:text-[34px] text-[24px] uppercase font-semibold text-primary px-[40px]'>DURABLE. FASHIONABLE. WELL MADE.</h1>
          <div className='flex md:flex-row flex-col md:justify-center items-center'>
            <Quality icon={<Q2 className='fill-primary w-[100px]' />} text='Quality' desc='We guarantee that only the finest leather and materials are used. We are committed to manufacturing and importing the best quality product, evident in every finished pair of shoes.' />
            <div className='border-l-[1px] w-[1px] h-[300px] border-offGray md:block hidden'></div>
            <Quality icon={<Q1 className='fill-primary w-[100px] relative md:bottom-[20px] bottom-[0px]' />} text='Style' desc='LOGO is dedicated to creating beautiful and unique shoes with exceptional impeccable style' />
            <div className='border-l-[1px] w-[1px] h-[300px] border-offGray md:block hidden'></div>
            <Quality icon={<Q3 className='fill-primary w-[100px] relative bottom-[10px]' />} text='Comfort' desc='Our footwear collection is crafted with unmatched attention to detail that are ultra-luxurious, super comfortable and a joy to wear.' />
          </div>
        </div>
      </section>
    </>
  )
}

export default QualityListing 