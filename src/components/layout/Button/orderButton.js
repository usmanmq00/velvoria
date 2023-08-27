import React from 'react'

const OrderButton = ({ text }) => {
  return (
    <>
      <button className='bg-black text-white px-[25px] text-center leading-5 h-[65px] font-normal text-lg mt-8 rounded-[5px]'>{text}</button>
    </>
  )
}

export default OrderButton 