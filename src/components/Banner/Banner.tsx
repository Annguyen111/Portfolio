import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import background from '../../assets/q-img.jpg'
import { faArrowUpRightFromSquare, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import woman_about from '../../assets/woman_about.jpg'
import bannerArrow from '../../assets/banner-arrow.png'
import bannerThumbs from '../../assets/banner-thumbs.png'
import scrollDown from '../../assets/scroll-down.png'

export default function Banner() {
  return (
    <section
      className='relative overflow-hidden bg-center bg-no-repeat bg-cover before:content-[""] before:absolute before:w-full before:h-full before:inset-0 before:bg-[#09080899] '
      style={{ backgroundImage: `url(${background})` }}
      id='Banner'
    >
      <div className='container max-w-full w-full md:w-[90%] xl:w-[85%] mx-0 md:mx-auto px-3 md:px-0 relative z-1'>
        <div className='flex flex-wrap -mt-6 -mx-3'>
          <div className='flex flex-shrink-0 lg:w-2/3 w-full mt-5 px-3 lg:px-3'>
            <div className='lg:pt-[140px] md:pt-[90px] pt-[60px] lg:pb-[180px] pb-[60px] md:pb-[100px]'>
              <Link
                to='/fott'
                className='flex overflow-hidden mb-6 w-fit capitalize font-medium transition-all duration-500 bg-primary px-[30px] lg:px-[30px] text-lg lg:py-[16px] py-4 leading-[120%] relative items-center gap-2 rounded-md'
              >
                <span className='block '>Hello, I am Alaia Harpar</span>
              </Link>
              <h1 className='text-[34px] md:text-[68px] lg:text-[70px] xl:text-[100px] lg:mb-[50px] md:mb-[50px] mb-[30px]'>
                <span className='text-white font-semibold'> Exceptional Web </span>
                <span className='font-semibold block text-primary  md:leading-[80px] leading-10 lg:leading-[70px]'>
                  Developer
                </span>
              </h1>
              <div className='flex items-center gap-4 mb-2'>
                <Link
                  to='#fott'
                  className='text-base lg:text-2xl mb-7 pb-2 border-b border-solid border-primary text-primary inline-flex gap-2 items-center'
                >
                  <span className='block'>Hire Me</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
                <Link
                  to={woman_about}
                  className='text-base lg:text-2xl mb-7 pb-2 border-b border-solid border-primary text-primary inline-flex gap-2 items-center'
                >
                  <span className='block'>Download CV</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
              </div>
              <div className='flex gap-4'>
                <div className='items-center flex gap-6'>
                  <img src={bannerArrow} className='animate-trans-rotate align-middle' alt='img' />
                  <a
                    href='https://www.youtube.com/watch?v=zFuJgOiUEso&ab_channel=SujithRajendran'
                    className='relative w-[50px] h-[50px] flex items-center justify-center rounded-[50%] border border-solid border-[white] 
                    before:content-[""] before:animate-trans-scale before:absolute before:w-full before:h-full before:border-2 before:border-solid before:border-[#fff] before:rounded-[50%]'
                  >
                    <FontAwesomeIcon icon={faPlay} className='text-white' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-shrink-0 lg:w-1/3 w-full mt-6 px-3'>
            <div
              className=' initial md:absolute lg:absolute md:bottom-5 lg:bottom-[50px] bottom-[30px] lg:left-[55%] md:left-[47%] left-[60%] translate-x-[-120px] mt-[-50px] max-h-[650px] md:max-w-[400px] max-w-full lg:max-w-[500px] '
              data-aos='fade-up-right'
              data-aos-duration={2000}
            >
              <img src={bannerThumbs} alt='man-img' className='w-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='-right-5 top-[55%] lg:grid absolute transform gap-[150px] -translate-y-1/2 hidden'>
        <div className='flex items-center rotate-90 justify-center mb-0 gap-[50px]'>
          <a href='#0' className='text-[15px] text-grey uppercase '>
            Follow Me
          </a>
          <a href='#0' className='-rotate-90 brightness-200 capitalize'>
            <img src={scrollDown} alt='img' className='w-5 object-contain' />
          </a>
        </div>
        <div>
          <ul className='gap-[14px] justify-center grid'>
            <li>
              <a href='#0' className='font-normal text-grey tracking-[2px] '>
                FB
              </a>
            </li>
            <li>
              <a href='#0' className='font-normal text-grey tracking-[2px]'>
                TW
              </a>
            </li>
            <li>
              <a href='#0' className='font-normal text-grey tracking-[2px] track'>
                IN
              </a>
            </li>
            <li>
              <a href='#0' className='font-normal text-grey tracking-[2px]'>
                LN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
