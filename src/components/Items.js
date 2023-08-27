import React, { useEffect, useRef } from 'react'
import More from './More'
import Item from './item'
import { Link } from 'react-router-dom'
import products from '../products'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const Items = ({ title }) => {

  const cardContainerRef = useRef(null);

  const slideLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft =
        cardContainerRef.current.scrollLeft - 370;
    }
  };

  const slideRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft =
        cardContainerRef.current.scrollLeft + 370;
    }
  };
  
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      slideRight();
    }, 3000); // Adjust the interval duration as needed

    const reverseInterval = setInterval(() => {
      slideLeft();
    }, 9000); // Adjust the interval duration as needed

    return () => {
      clearInterval(scrollInterval);
      clearInterval(reverseInterval);
    };
  }, []);

  return (
    <>
      <section className='w-full bg-white md:pt-24 pt-10 md:pb-28 leading-7 font-normal text-base block items overflow-hidden'>
        <section className='flex leading-7 font-normal text-base mx-9 w-full'>
          <div className='w-[90vw] md:mb-20 mb-10'>
            <h4 className='text-center items-title leading-8 md:font-semibold font-medium md:text-3xl text-base '>{title}</h4>
          </div>
          <div className='hidden md:block'>
          <Link to='/products'><More/></Link>
          </div>
        </section>
        <section className='w-full flex items-center px-9'> 
          <div className={`arrow w-12 h-12 text-3xl btn`}><IoIosArrowBack className='fill-gray-500 cursor-pointer' onClick={slideLeft}></IoIosArrowBack></div>
          <div ref={cardContainerRef} className={`w-fit flex gap-x-16 overflow-hidden scroll-smooth pl-8`}>
                {
                  products.map((product) => {
                    return <Link to={`/products/${product._id}`}><Item key={product._id} Img={product.image.img1} /></Link>;
                })
                }
          </div>
          <div className={`arrow w-12 leading-7 h-12 cursor-pointer  ml-5 items-center`}><IoIosArrowForward className='fill-gray-500 text-3xl' onClick={slideRight} /></div>
        </section>
        <div className='mb-16 md:hidden text- w-full'>
          <Link to='/products'><More /></Link>
        </div>
        
      </section>
    </>
  )
}

export default Items 