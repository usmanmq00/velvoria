import React from 'react'

const Check = ({ text }) => {
  return (
    <>
      <input type="checkbox" className='inline h-4 w-4' /><label className='h-3 inline text-sm text-gray-500 font-normal ml-2'>{text}</label>
    </>
  )
}

export default Check
