import React, { useState } from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email: formData.email,
      password: formData.password,
    }

    try {
      const response = await fetch('http://localhost:8000/api/authuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginUser),
      });

      if (response.ok) {
        console.log('Registration successful!');

        // Save registration data in local storage
        localStorage.setItem('registrationData', JSON.stringify(loginUser));

        navigate('/')
      } else {
        console.log('Registration failed.');
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  return (
    <>
      <section className='flex justify-center w-full leading-7 login font-normal text-base' >
        <section className='text-center login-1 px-4 md:py-9 py-5 leading-7 text-base font-normal block'>
            <h1 className='login-title text-center font-normal md:text-8xl text-2xl block'>Login</h1>
            <form className='login-body  text-center md:mt-10 leading-7 h-72 font-normal block' onSubmit={handleSubmit}>
                <input className='login-field text-left relative pt-3 pr-4 pl-5 pb-3 m-px  leading-7 text-base block font-normal h-11 mb-5 text-black' name='email' value={formData.email} onChange={handleChange} type="email" placeholder='Email' required/>
                <input className='login-field text-left relative pt-3 pr-4 pl-5 pb-3 m-px leading-7 text-base block font-normal h-11' name='password' value={formData.password} onChange={handleChange} type="password" placeholder='Password' reqired/>
                <div className='flex justify-between'>
                  <Link to='/account/reset'><h4 className='form-reset1 text-left w-40 mt-3 leaing-7 text-sm font-normal block cursor-pointer'>Forgot your password?</h4></Link>
                </div>
                <Button text='Sign in' />
                <div className='flex justify-center w-full'>
                    <Link to='/account/register'><h4 className='form-reset2 text-center mt-5 leaing-7 text-sm font-normal block cursor-pointer'>Create account</h4></Link>
                </div>
            </form>
        </section>
      </section>
    </>
  )
}

export default Login 