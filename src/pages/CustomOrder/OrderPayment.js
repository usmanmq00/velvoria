import React from 'react'
import Logo from '../../assets/global/Logo.png'
import { ReactComponent as SideArrow } from '../../assets/global/Sidearrow.svg';
import Card from '../../assets/global/card.png'
import OrderButton from '../../components/layout/Button/orderButton'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import OrderDetails from '../../components/layout/CustomOrder/OrderDetails'

const OrderPayment = () => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    const handleClick1 = () => {
        setShow1(true)
        setShow2(false)
        setShow3(false)
    }
    const handleClick2 = () => {
        setShow1(false)
        setShow2(true)
        setShow3(false)
    }
    const handleClick3 = () => {
        setShow1(false)
        setShow2(false)
        setShow3(true)
    }
    const handleClick4 = () => {
        setShow4(true)
        setShow5(false)
    }
    const handleClick5 = () => {
        setShow4(false)
        setShow5(true)
    }

    return (
        <>
            <section className='w-full flex'>
                <section className='w-[50%] ml-[370px] mt-[56px]'>
                    <div className='mb-[27px]'>
                        <Link to='/'><img src={Logo} alt="Logo" /></Link>
                        <div className='flex gap-[15px] mt-[17px]'>
                            <p className='font-normal text-[16px] leading-[22px] text-[#707070]'>Information</p>
                            <div>{<SideArrow className='scale-150 mt-[5px]' />}</div>
                            <p className='font-medium text-[16px] leading-[22px]'>Payment</p>
                        </div>
                    </div>
                    <form className='w-[615px]'>
                        <div className=''>
                            <label className='text-[17px] leading-[18px] font-semibold block mb-[14px]'>Payment</label>
                            <p className='text-[#707070] font-normal text-[18px] mb-[14px]'>All transactions are secure and encrypted.</p>
                            <div className='mb-[27px]'>
                                <div className={`border-[1px] p-[18px] ${show1 ? 'bg-[#F6F6F6]' : ''} flex items-center`}>
                                    <input className='scale-150 ' name='payment' type="radio" id='option1' onClick={handleClick1} />
                                    <label htmlFor="option1" className='pl-[11px] text-[14px] leading-[21px] font-normal'>PAYFAST(Pay via Debit/Credit/Wallet/Bank Account)</label>
                                </div>
                                {
                                    show1 && (
                                        <div className='border-[1px] py-[18px] px-[118px] bg-[#F6F6F6] flex flex-col items-center gap-[22px]'>
                                            <img src={Card} alt="Card" />
                                            <p className='text-center font-normal text-[14px]'>After clicking “Pay now”, you will be redirected to PAYFAST(Pay via Debit/Credit/Wallet/Bank Account) to complete your purchase securely.</p>
                                        </div>
                                    )
                                }
                                <div className={`border-[1px] p-[18px] ${show2 ? 'bg-[#F6F6F6]' : ''} flex items-center`}>
                                    <input className='scale-150' name='payment' type="radio" id='option2' onClick={handleClick2} />
                                    <label htmlFor="option2" className='pl-[11px] text-[14px] leading-[21px] font-normal'>Alfalah, JazzCash, AbhiPay (Pay via Debit/Credit/Wallet)</label>
                                </div>
                                <div className={`border-[1px] p-[18px] ${show3 ? 'bg-[#F6F6F6]' : ''} flex items-center`}>
                                    <input className='scale-150' name='payment' type="radio" id='option3' onClick={handleClick3} />
                                    <label htmlFor="option3" className='pl-[11px] text-[14px] leading-[21px] font-normal'>Cash on Delivery (COD)</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='text-[17px] leading-[18px] font-semibold block mb-[14px]'>Billing address</label>
                            <p className='text-[#707070] font-normal text-[18px] mb-[14px]'>Select the address that matches your card or payment method.</p>
                            <div>
                                <div className={`border-[1px] p-[18px] ${show4 ? 'bg-[#F6F6F6]' : ''} flex items-center`}>
                                    <input className='scale-150' name='address' type="radio" id='option4' onClick={handleClick4} />
                                    <label htmlFor="option4" className='pl-[11px] text-[14px] leading-[21px] font-normal'>Same as shipping address</label>
                                </div>
                                <div className={`border-[1px] p-[18px] ${show5 ? 'bg-[#F6F6F6]' : ''} flex items-center`}>
                                    <input className='scale-150' name='address' type="radio" id='option5' onClick={handleClick5} />
                                    <label htmlFor="option5" className='pl-[11px] text-[14px] leading-[21px] font-normal'>Use a different billing address</label>
                                </div>
                            </div>
                            <div className='mb-[68px] flex justify-end'>
                                <Link><OrderButton text='Pay Now' /></Link>
                            </div>
                        </div>
                    </form>
                </section>
                <OrderDetails />
            </section>
        </>
    )
}

export default OrderPayment
