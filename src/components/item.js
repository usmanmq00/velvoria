import React from 'react'


const item = ({ Img }) => {
  return (
    <>
      {/* <section className='cursor-pointer relative mr-10'>
        <img className='md:h-48 h-10 md:min-w-[300px] min-w-[100px]' src={Img} alt="My Shoe" />
      </section> */}
      <section className='min-h-[300px] min-w-[300px]'>
        <img src={Img} alt="My Shoe" />
      </section>
    </>
  )
}

export default item 