import React from 'react'

const SingleCategory = ({ text, image }) => {
  return (
    <>
      <section className='single-category md:w-[400px] w-[100px] text-center leading-7 relative font-normal text-lg bg-white mr-4 cursor-pointer'>
        <img className='w-full h-full single-category' src={image} alt="Category" />
        <div className='absolute w-full h-full z-10 top-0 left-0 flex justify-center items-center category-text'>
          <p className='text-white font-bold'>{text}</p>
        </div>
      </section>
    </>
  )
}

export default SingleCategory 