import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <>
      <section className='flex justify-center w-full leading-7 reset font-normal text-base' >
        <section className='text-center login-1 px-4 md:py-9 leading-7 text-base font-normal block'>
          <h1 className='login-title text-center font-normal md:text-8xl text-2xl block'>Reset your password</h1>
          <p className='text-gray-500 md:mt-8 font-normal text-center md:text-base text-xs block'>We will send you an email to reset your password</p>
          <form className='login-body text-center mt-8 leading-7 h-72 font-normal block'>
            <input className='login-field text-left relative pt-3 pr-4 pl-5 pb-3 m-px leading-7 text-base block font-normal h-11 mb-5 text-black' type="email" placeholder='Email'/>
            <Button text='Submit' />
            <div className='flex justify-center w-full'>
              <Link to='/account/login'><h4 className='form-reset2 text-center mt-5 leaing-7 text-sm font-normal block cursor-pointer'>Cancle</h4></Link>
            </div>
          </form>
        </section>
      </section>
    </>
  )
}

export default Reset 