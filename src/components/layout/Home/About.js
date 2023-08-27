import { Link } from 'react-router-dom'
import AboutUs from '../../../assets/global/About.pmg.webp'

const About = () => {
  return (
    <>
      <section className='w-full bg-[#1D1D1D] flex'>
        <secton className='w-[40%] px-[80px] pt-[100px]'>
          <h1 className='text-[#FFF] text-[37px] font-semibold'>ABOUT US</h1>
          <p className='text-[#AAA] pt-[60px] font-semibold text-[18px] leading-[29px] -tracking-wide'><span className='text-[#AAA] font-bold text-[18px] leading-[29px]'>LOGO</span> established itself as a trusted source of unique footwear as we proudly announce our products as “Made in Pakistan ''. LOGO dedicates itself to quality, unique design, and utmost comfort. Come join the spirit of ultimate fashion footwear to indulge yourself with uniqueness & sophistication which is constructed with high-quality craftsmanship.</p>
          <Link to='/'><div className='flex mt-[50px]'><div className='text-[#FFF] pr-4 text-[18px] tracking-[1px]'>More</div><svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.957 13.306"><path d="M102.5,173.132a.563.563,0,0,0,0-.783l-4.6-5.156h38.5a.554.554,0,1,0,0-1.109H97.9l4.594-5.156a.554.554,0,1,0-.783-.783s-5.488,6.029-5.544,6.1a.6.6,0,0,0-.166.395.569.569,0,0,0,.166.395c.055.055,5.544,6.1,5.544,6.1a.561.561,0,0,0,.395.159A.573.573,0,0,0,102.5,173.132Z" transform="translate(136.957 173.292) rotate(180)" fill="#FFFFFF"></path></svg></div></Link>
        </secton>
        <secton>
          <img src={AboutUs} alt="About US" />
        </secton>
      </section>
    </>
  )
}

export default About 