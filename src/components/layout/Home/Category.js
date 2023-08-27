import React, { useState, useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import SingleCategory from './SingleCategory'
import c1 from '../../../assets/c1.webp'
import c2 from '../../../assets/c2.webp'
import c3 from '../../../assets/c3.webp'
import c4 from '../../../assets/c4.webp'
import c5 from '../../../assets/c5.webp'


const Category = () => {

  const [translate, setTranslate] = useState('-trsnlate-x-0');
  const [buttonColor1, setButtonColor1] = useState('bg-gray-400');
  const [buttonColor2, setButtonColor2] = useState('bg-gray-400');

  const data = [
    { id: 1, text: 'NEW ARRIVALS', image: c1 },
    { id: 2, text: 'HIGH HEELS', image: c2 },
    { id: 3, text: 'FLATS', image: c3 },
    { id: 4, text: 'PARTY WEAR', image: c4 },
    { id: 5, text: 'BRIDAL WEAR', image: c5 }
  ];

  const handleNext = () => {
    setTranslate('-translate-x-60')
    setButtonColor1('bg-white')
    setButtonColor2('bg-gray-400')
  };

  const handlePrevious = () => {
    setTranslate('-translate-x-0  ')
    setButtonColor2('bg-white')
    setButtonColor1('bg-gray-400')
  };

  useEffect(() => {
    setInterval(() => {
      setTranslate('-translate-x-60');
      setTimeout(() => {
        setTranslate('-translate-x-0');
      }, 3000);
    }, 6000);
  }, []);

  return (
    <>
      <section className='category text-white w-full md:pt-16 pt-14 pb-24 leading-7 font-normal text-base block box-border overflow-hidden relative'>
        <section className='category2 leading-7 font-normal text-base flex justify-between mx-10    '>
          <h3 className='text-white w-60 leading-7 h-7 font-normal text-base cursor-pointer hidden md:block'>NEW IN</h3>
          <h1 className='md:category-title w-full text-white leading-8 md:text-3xl text-2xl md:font-semibold font-medium h-8 block text-center'>SHOP BY CATEGORY</h1>
          <div className='md:flex pl-60 w-90 leading-7 h-11 font-normal text-base hidden'>
            <div className={`arrow w-12 h-12 leading-7 cursor-pointer bg-gray-400 flex justify-center items-center text-3xl btn ${buttonColor1}`} onClick={handlePrevious}><IoIosArrowBack className='fill-black'></IoIosArrowBack></div>
            <div className={`arrow w-12 leading-7 h-12 cursor-pointer bg-gray-400 flex justify-center ml-5 items-center ${buttonColor2}`} onClick={handleNext}><IoIosArrowForward className='fill-black text-3xl' /></div>
          </div>
        </section>
        <section className={`w-fit mx-10 text-base flex md:mt-20 mt-10 font-normal leading-7 transition-transform duration-2000 transform ${translate}`}>
          {
            data.map((item) => {
              return <SingleCategory key={item.id} text={item.text} image={item.image} />;
            })
          }
        </section>
      </section>
    </>
  )
}

export default Category 