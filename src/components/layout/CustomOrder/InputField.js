import React from 'react'

const InputField = ({ title, type, text }) => {
  return (
    <>
      <section className='mb-[20px]'>
        <div>
          <label className='text-[17px] leading-[20.4px] font-semibold block mb-[14px]'>{title}</label>
          <input className='h-[52px] w-[615px] pl-[12px] outline-none text-[#707070] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px]' type={type} placeholder={text} />
        </div>
      </section>
    </>
  )
}

export default InputField   