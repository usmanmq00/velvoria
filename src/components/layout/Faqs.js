import Arrow1 from '../../assets/Custom Order/Vector1.png'
import Arrow2 from '../../assets/Custom Order/Vector2.png'
import { useState } from 'react'

const Faqs = ({ title, text }) => {
  const [showAns, setShowAns] = useState(false)

  const handleClick = () => {
    setShowAns(!showAns)
  }

  return (
    <section
      onClick={handleClick}
      className='cursor-pointer border-b-[1px] border-black'
    >
      <div className='h-[52px] flex justify-between pl-[12px] pr-[22px] pt-[14.5px]'>
        <h2 className='text-[22px] font-semibold leading-[21px]'>{title}</h2>
        <button>
          {showAns === true ? (
            <img className='w-[12px] h-[6px]' src={Arrow2} alt='Arrow' />
          ) : (
            <img className='w-[12px] h-[6px]' src={Arrow1} alt='Arrow' />
          )}
        </button>
      </div>
      {showAns && (
        <div className='pl-[12px] pr-[22px] pb-[14.5px]'>
          <p className='font-normal text-[18px]'>{text}</p>
        </div>
      )}
    </section>
  )
}

export default Faqs
