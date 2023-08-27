import Faqs from '../../components/layout/Faqs'
import OrderButton from '../../components/layout/Button/orderButton'
import Video from '../../assets/Custom Order/HD.mp4'
import { Link } from 'react-router-dom'

const CustomOrder = () => {
  return (
    <>
      <section className='ml-[211px] mr-[229px] mt-[62px] overfow-hidden'>
        <section className='bg-[#F5F5F5] h-[377px] flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <video className='h-[350px]' controls>
              <source src={Video} type='video/mp4' />
            </video>
          </div>
        </section>
        <section className='mb-[81px]'>
          <h1 className='text-[32px] font-bold leading-[48px] text-[#121212] tracking-[0.6px] my-[30.02px]'>
            Frequently Asked Questions (FAQs)
          </h1>
          <Faqs title='Faq 1' text='This is the answer to the FAQ.' />
          <Faqs title='Faq 2' text='This is the answer to the FAQ.' />
          <Faqs title='Faq 3' text='This is the answer to the FAQ.' />
          <section className='flex justify-end'>
            <Link to='/custom-order/confirmation'>
              <OrderButton text='Next' />
            </Link>
          </section>
        </section>
      </section>
    </>
  )
}

export default CustomOrder
