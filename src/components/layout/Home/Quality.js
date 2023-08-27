import React from 'react';


const Quality = ({ icon, text, desc }) => {
  return (
    <>
      <section className='flex flex-col text-center justify-center py-[20px] px-[80px] w-[450px]'>
        <div className='flex justify-center items-center'>{icon}</div>
        <h2 className='my-[20px] text-[20px] tracking-[0.6px] font-semibold text-primary'>{text}</h2>
        <p className='text-[16px] font-semibold text-offGray'>{desc}</p>
      </section>
    </>
  )
}

export default Quality 