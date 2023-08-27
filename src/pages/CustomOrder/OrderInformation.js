import React from 'react'
import Logo from '../../assets/global/Logo.png'
import Search from '../../assets/global/Search.png'
import Phone from '../../assets/global/Phone.png'
import { ReactComponent as SideArrow } from '../../assets/global/Sidearrow.svg'
import InputField from '../../components/layout/CustomOrder/InputField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OrderButton from '../../components/layout/Button/orderButton'
import { Link } from 'react-router-dom'
import OrderDetails from '../../components/layout/CustomOrder/OrderDetails'

const OrderInformation = () => {
    return (
        <>
            <section className='w-full flex'>
                <section className='w-[50%] ml-[370px] mt-[56px]'>
                    <div className='mb-[25px]'>
                        <Link to='/'><img src={Logo} alt="Logo" /></Link>
                        <div className='flex gap-[15px] mt-[17px]'>
                            <p className='font-medium text-[16px] leading-[22px]'>Information</p>
                            <div>{<SideArrow className='scale-150 mt-[5px]' />}</div>
                            <p className='font-normal text-[16px] leading-[22px] text-[#707070]'>Payment</p>
                        </div>
                    </div>
                    <form>
                        <div className='mb-[20px]'>
                            <InputField title='Contact' type='email' text='Email' />
                            <FormGroup className='relative bottom-3'>
                                <FormControlLabel control={<Checkbox />} label="Email me news and offers" />
                            </FormGroup>
                        </div>
                        <div>
                            <label className='text-[17px] leading-[20.4px] font-semibold block mb-[14px]'>Shipping address</label>
                            <div className='flex gap-[14px] w-[615px] mb-[14px]'>
                                <input className='h-[52px] w-[615px] pl-[12px] outline-none text-[#707070] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px]' type='text' placeholder='First name (optional)' />
                                <input className='h-[52px] w-[615px] pl-[12px] outline-none text-[#707070] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px]' type='text' placeholder='Last name' />
                            </div>
                            <div className='h-[52px] w-[615px] px-[12px] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px] text-[#707070] mb-[14px] flex items-center justify-between'>
                                <input className='outline-none w-[90%]' type="text" placeholder='Address' />
                                <img src={Search} alt="Search" />
                            </div>
                            <input className='h-[52px] w-[615px] pl-[12px] outline-none text-[#707070] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px] mb-[14px]' type='text' placeholder='Apartment, suite, etc. (optional)' />
                            <div className='flex gap-[14px] w-[615px] mb-[14px]'>
                                <input className='h-[52px] w-[615px] pl-[12px] outline-none text-[#707070] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px]' type='text' placeholder='City' />
                                <div className='h-[52px] w-[615px] pl-[12px] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px] text-[#707070]'>
                                    <select name="state" className='text-[#707070] outline-none w-[140px] h-[48px]'>
                                        <option value="state" defaultChecked>State</option>
                                    </select>
                                </div>
                                <input className='h-[52px] w-[615px] pl-[12px] outline-none text-[#707070] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px]' type='text' placeholder='Zip Code' />
                            </div>
                            <div className='h-[52px] w-[615px] px-[12px] border-[1px] border-[#707070] hover:border-[2px] hover:border-black rounded-[5px] text-[#707070] mb-[14px] flex items-center justify-between'>
                                <input className='outline-none w-[90%]' type="text" placeholder='Phone' />
                                <img className='cursor-pointer' src={Phone} alt="Search" />
                            </div>
                        </div>
                        <FormGroup className='relative bottom-3'>
                            <FormControlLabel control={<Checkbox />} label="Save this information for next time" />
                        </FormGroup>
                        <div className='flex w-[650px] justify-end mb-[50px]'>
                            <Link to='/custom-order/confirmation/information/payment'><OrderButton text='Continue to Payment' /></Link>
                        </div>
                    </form>
                </section>
                <OrderDetails />
            </section>
        </>
    )
}

export default OrderInformation 