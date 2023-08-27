import Logo from '../../assets/global/Logo.png'
import InputField from '../../components/layout/CustomOrder/InputField'
import { Link } from 'react-router-dom'
import OrderButton from '../../components/layout/Button/orderButton'
import Image from '../../assets/global/image.png'
import Upload from '../../assets/global/upload.png'
import React, { useRef, useState } from 'react'

const Confirmation = () => {
  const inputFileRef1 = useRef(null);
  const inputFileRef2 = useRef(null);
  const inputFileRef3 = useRef(null);
  const inputFileRef4 = useRef(null);
  const inputFileRef5 = useRef(null);
  const [imageDataUrl1, setImageDataUrl1] = useState(null);
  const [imageDataUrl2, setImageDataUrl2] = useState(null);
  const [imageDataUrl3, setImageDataUrl3] = useState(null);
  const [imageDataUrl4, setImageDataUrl4] = useState(null);
  const [imageDataUrl5, setImageDataUrl5] = useState(null);

  const handleSectionClick1 = () => {
    inputFileRef1.current.click();
  };

  const handleFileChange1 = (event) => {
    const file1 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setImageDataUrl1(imageUrl);
    };
    if (file1) {
      reader.readAsDataURL(file1);
    }
  };

  const handleSectionClick2 = () => {
    inputFileRef2.current.click();
  };

  const handleFileChange2 = (event) => {
    const file2 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setImageDataUrl2(imageUrl);
    };
    if (file2) {
      reader.readAsDataURL(file2);
    }
  };

  const handleSectionClick3 = () => {
    inputFileRef3.current.click();
  };

  const handleFileChange3 = (event) => {
    const file3 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setImageDataUrl3(imageUrl);
    };
    if (file3) {
      reader.readAsDataURL(file3);
    }
  };

  const handleSectionClick4 = () => {
    inputFileRef4.current.click();
  };

  const handleFileChange4 = (event) => {
    const file4 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setImageDataUrl4(imageUrl);
    };
    if (file4) {
      reader.readAsDataURL(file4);
    }
  };

  const handleSectionClick5 = () => {
    inputFileRef5.current.click();
  };

  const handleFileChange5 = (event) => {
    const file5 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setImageDataUrl5(imageUrl);
    };
    if (file5) {
      reader.readAsDataURL(file5);
    }
  };

  return (
    <>
      <section>
        <form className='flex gap-[68px]w-full mx-[350px] mt-[62px] mb-[98px]'>
          <section className='w-3/5 pt-5'>
            <div className='w-[615px]'>
              <Link to='/'>
                <div className='mb-[77px]'>
                  <img src={Logo} alt='' />
                </div>
              </Link>
              <div className='mb-[20px]'>
                <label className='text-[17px] leading-[20.4px] font-semibold mb-[14px] block'>
                  Type
                </label>
                <div className='w-[615px] border-[1px] border-[#707070] hover:border-[1px] hover:border-black rounded-[5px]'>
                  <select
                    name='type'
                    className='h-[48px] w-[595px] pl-[12px]  text-[#707070] outline-none rounded-[5px]'
                  >
                    <option
                      value='Select Type'
                      className='text-[#707070] font-normal' s
                    >
                      Select Type
                    </option>
                    <option
                      value='Party Wear'
                      className='text-[#707070] font-normal'
                    >
                      Party Wear
                    </option>
                    <option
                      value='Bridal Wear'
                      className='text-[#707070] font-normal'
                    >
                      Bridal Wear
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <InputField title='Color' type='text' text='Enter Color' />
              </div>
              <div>
                <InputField title='Size' type='text' text='Enter Size' />
              </div>
              <div>
                <InputField
                  title='MaterialType'
                  type='text'
                  text='Enter Material Type'
                />
              </div>
              <section className='mt-[45px] flex justify-end'>
                <Link to='/custom-order/confirmation/information'>
                  <OrderButton text='Confirm Order' />
                </Link>
              </section>
            </div>
          </section>
          <section className='w-[323px]'>
            <section
              className={`rounded-[12px] bg-[#F5F5F5] ${imageDataUrl1 ? '' : 'py-[85px] px-[20px]'
                } flex flex-col items-center cursor-pointer overflow-hidden h-[323px]`}
              onClick={handleSectionClick1}
            >
              {imageDataUrl1 ? (
                <img
                  className={`rounded-[12px] w-full h-full
                    }`}
                  src={imageDataUrl1}
                  alt='Uploaded'
                  width='100%'
                />
              ) : (
                <div>
                  <img src={Image} alt='DP 1' width='56px' height='56px' />
                </div>
              )}
              {!imageDataUrl1 && (
                <section className='flex flex-col items-center'>
                  <div>
                    <img className='inline' src={Upload} alt='upload' />
                    <span className='text-[18px] font-semibold pl-[12px]'>
                      Upload Image
                    </span>
                  </div>
                  <div className='text-[14px] text-[#8B8D97] font-normal'>
                    Upload a cover image for your product.
                  </div>
                  <div>
                    <p className='text-center font-normal text-[#8B8D97]'>
                      File Format <span className='font-medium'>jpeg, png</span> recommended Size{' '}
                      <span className='font-medium'>600x600 (1:1)</span>
                    </p>
                  </div>
                </section>
              )}

              <input
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
                ref={inputFileRef1}
                onChange={handleFileChange1}
              />
            </section>
            <h2 className='text-[16px] font-medium my-[15px]'>
              Additional Images
            </h2>
            <section className='flex gap-[12px] w-full'>
              <section
                className={`w-[50%] bg-[#F5F5F5] ${imageDataUrl2 ? '' : 'py-[35px]'
                  } flex flex-col items-center cursor-pointer h-[150px] rounded-[12px]`}
                onClick={handleSectionClick2}
              >
                {imageDataUrl2 ? (
                  <img
                    className='rounded-[12px] w-full h-full'
                    src={imageDataUrl2}
                    alt='Uploaded'
                    width='100%'
                  />
                ) : (
                  <div>
                    <img src={Image} alt='DP 1' width='56px' height='56px' />
                  </div>
                )}
                {!imageDataUrl2 && (
                  <div>
                    <img className='inline' src={Upload} alt='upload' width='16px' height='16px' />
                    <span className='text-[14px] font-semibold pl-[12px]'>
                      Left Angle
                    </span>
                  </div>
                )}
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  ref={inputFileRef2}
                  onChange={handleFileChange2}
                />
              </section>
              <section
                className={`w-[50%] bg-[#F5F5F5] ${imageDataUrl3 ? '' : 'py-[35px]'
                  } flex flex-col items-center cursor-pointer h-[150px] rounded-[12px]`}
                onClick={handleSectionClick3}
              >
                {imageDataUrl3 ? (
                  <img
                    className='rounded-[12px] w-full h-full'
                    src={imageDataUrl3}
                    alt='Uploaded'
                    width='100%'
                  />
                ) : (
                  <div>
                    <img src={Image} alt='DP 1' width='56px' height='56px' />
                  </div>
                )}
                {!imageDataUrl3 && (
                  <div>
                    <img className='inline' src={Upload} alt='upload' width='16px' height='16px' />
                    <span className='text-[14px] font-semibold pl-[12px]'>
                      Right Angle
                    </span>
                  </div>
                )}
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  ref={inputFileRef3}
                  onChange={handleFileChange3}
                />
              </section>
            </section>
            <section className='flex gap-[12px] mt-[12px] w-full'>
              <section
                className={`w-[50%] bg-[#F5F5F5] ${imageDataUrl4 ? '' : 'py-[35px]'
                  } flex flex-col items-center cursor-pointer h-[150px] rounded-[12px]`}
                onClick={handleSectionClick4}
              >
                {imageDataUrl4 ? (
                  <img
                    className='rounded-[12px] w-full h-full'
                    src={imageDataUrl4}
                    alt='Uploaded'
                    width='100%'
                  />
                ) : (
                  <div>
                    <img src={Image} alt='DP 1' width='56px' height='56px' />
                  </div>
                )}
                {!imageDataUrl4 && (
                  <div>
                    <img className='inline' src={Upload} alt='upload' width='16px' height='16px' />
                    <span className='text-[14px] font-semibold pl-[12px]'>
                      Top Angle
                    </span>
                  </div>
                )}
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  ref={inputFileRef4}
                  onChange={handleFileChange4}
                />
              </section>
              <section
                className={`w-[50%] bg-[#F5F5F5] ${imageDataUrl5 ? '' : 'py-[35px]'
                  } flex flex-col items-center cursor-pointer h-[150px] rounded-[12px]`}
                onClick={handleSectionClick5}
              >
                {imageDataUrl5 ? (
                  <img
                    className='rounded-[12px] w-full h-full'
                    src={imageDataUrl5}
                    alt='Uploaded'
                    width='100%'
                  />
                ) : (
                  <div>
                    <img src={Image} alt='DP 1' width='56px' height='56px' />
                  </div>
                )}
                {!imageDataUrl5 && (
                  <div>
                    <img className='inline' src={Upload} alt='upload' width='16px' height='16px' />
                    <span className='text-[14px] font-semibold pl-[12px]'>
                      Bottom Angle
                    </span>
                  </div>
                )}
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  ref={inputFileRef5}
                  onChange={handleFileChange5}
                />
              </section>
            </section>
          </section>
        </form>
      </section>
    </>
  )
}

export default Confirmation 