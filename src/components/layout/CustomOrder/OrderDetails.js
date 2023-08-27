import React from 'react'
import Phone from '../../../assets/global/Phone.png'
import Shoe from '../../../assets/global/Shoe.png'

const OrderDetails = () => {
    return (
        <>
            <section className='w-[50%] h-[100vh] bg-[#F5F5F5] pl-[45px] pt-[56px] border-l-[1px]'>
                <div className='w-[306px]'>
                    <div className='flex gap-[20px] mb-[18px]'>
                        <div><img className='bg-white' src={Shoe} alt="Shoe" width='150px' height='150px' /></div>
                        <div className='w-[150px] h-[150px]'>
                            <div className='flex gap-[20px] mb-[10px] w-[150px] h-[65px]'>
                                <div><img className='bg-white border-[1px]' src={Shoe} alt="Shoe" width='65px' height='65px' /></div>
                                <div><img className='bg-white border-[1px]' src={Shoe} alt="Shoe" width='65px' height='65px' /></div>
                            </div>
                            <div className='flex gap-[20px] mb-[10px] w-[150px] h-[65px]'>
                                <div><img className='bg-white border-[1px]' src={Shoe} alt="Shoe" width='65px' height='65px' /></div>
                                <div><img className='bg-white border-[1px]' src={Shoe} alt="Shoe" width='65px' height='65px' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[51px]'>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Type</h4>
                            <p className='text-[14px] leading-[19px] font-normal'>Party Wear</p>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Color</h4>
                            <p className='text-[14px] leading-[19px] font-normal'>Brown</p>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Size</h4>
                            <p className='text-[14px] leading-[19px] font-normal'>44</p>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Material Type</h4>
                            <p className='text-[14px] leading-[19px] font-normal'>Leather</p>
                        </div>
                    </div>
                    <div className='mb-[51px]'>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Shipping  <span><img className='inline' src={Phone} alt="Phone" /></span></h4>
                            <p className='text-[14px] leading-[21px] font-normal'><span>PKR</span> 200</p>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Delivery Date</h4>
                            <p className='text-[1p4x] leading-[21px] font-normal'>02/07/2023</p>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Advance Payment</h4>
                            <p className='text-[14px] leading-[21px] font-normal'><span> Rs</span> 6,300.00</p>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-[16px] leading-[21px] font-normal'>Total</h4>
                            <p className='text-[14px] leading-[21px] font-normal'><span>Rs</span> 12,600.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderDetails 