import React from 'react'

const Input = ({ type, value }) => {
  return (
    <>
     <input className='border-2 w-full text-left relative pt-3 pr-4 pl-5 pb-3 m-px leading-7 text-base font-normal h-11 my-2 text-black' type={type} placeholder={value} /> 
    </>
  )
}

export default Input