import React from 'react'

const Button = ({ text }) => {
  return (
    <>
      <button className='bg-black text-white w-32 text-center leading-5 h-11 font-normal text-base cursor-pointer   mt-8'>{text}</button>
    </>
  )
}

export default Button 