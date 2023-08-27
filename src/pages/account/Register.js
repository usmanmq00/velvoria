import React, { useState} from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
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

    const registerUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    }

    try {
      const response = await fetch('http://localhost:8000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerUser),
      });

      if (response.ok) {
        console.log('Registration successful!');

        // Save registration data in local storage
        localStorage.setItem('registrationData', JSON.stringify(registerUser));

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
      <section className='flex justify-center w-full leading-7 register bg-white text-black font-normal overflow-hidden' >
        <section className='text-center login-1 px-4 md:py-9 leading-7 text-base font-normal block'>
            <h1 className='login-title text-center font-normal md:text-8xl text-2xl block'>Create account</h1>
            <form className='login-body text-center mt-10 leading-7 h-72 font-normal block' onSubmit={handleSubmit}>
                <input className='register-field text-left relative pt-3 pr-4 pl-5 pb-3 m-px leading-7 text-base block font-normal h-11 mb-5 text-black' type="text" placeholder='First name' onChange={handleChange} value={formData.firstName} name='firstName'/>
                <input className='register-field text-left relative pt-3 pr-4 pl-5 pb-3 m-px leading-7 text-base block font-normal h-11' type="text" placeholder='Last name' onChange={handleChange} value={formData.lastName} name='lastName'/>
                <input className='register-field text-left relative pt-3 pr-4 pl-5 pb-3 m-px leading-7 text-base block font-normal h-11 mb-5 mt-5 text-black' type="email" placeholder='Email' onChange={handleChange} value={formData.email} name='email' required/>
                <input className='register-field text-left relative pt-3 pr-4 pl-5 pb-3 m-px leading-7 text-base block font-normal h-11' type="password" placeholder='Password' onChange={handleChange} value={formData.password} name='password' required/>
                <Button text='Create' />
            </form>
        </section>
      </section>
    </>
  )
}

export default Register 