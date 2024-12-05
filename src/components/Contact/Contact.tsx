import React from 'react'
import bg_contact from '../../assets/bg_about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import woman_contact from '../../assets/contact-image.png'
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div
      className='bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden py-[60px] lg:py-[80px]'
      style={{ backgroundImage: `url(${bg_contact})` }}
      id='Contact'
    >
      <div className='container w-full max-w-full md:w-[90%] lg:w-[85%] px-3 md:px-0 md:mx-auto mx-0'>
        <div className='flex flex-wrap items-start'>
          <div className='lg:w-[58.33333333%] w-full md:mt-0 lg:mt-6'>
            <div className='lg:pr-[60px] pr-0 '>
              <div className='border-b relative border-solid border-b-light_black pb-[30px] mb-[30px] transition-all duration-500 max-w-[920px] '>
                <span
                  className='text-2xl font-caveat text-[#080808] mb-[30px] relative inline-block z-[1] font-semibold
                  before:content-[""] before:w-[2px] before:bg-orange-400 before:h-[2px] before:absolute before:top-[100%] before:left-0 before:animate-trans-width'
                  data-aos='fade-down'
                  data-aos-duration={1000}
                >
                  Need a Project?
                </span>
                <h2
                  className='xl:text-[60px] lg:text-[36px] md:text-5xl text-[29px] text-dark_blue font-medium w-full leading-[120%]'
                  data-aos='fade-down'
                  data-aos-duration={1600}
                >
                  Let's Work Together. Fixed A Meeting
                </h2>
              </div>
              <div
                className='flex md:gap-5 gap-[10px] items-center transition-all duration-500 border-b border-solid border-b-light_black pb-[30px]'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='min-w-[60px] min-h-[60px] rounded-[50%] bg-primary flex items-center justify-center'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-[26px] text-[#181818]' />
                </span>
                <span className='flex flex-col'>
                  <span className='text-dark_blue md:text-lg text-base block mb-1'>Email</span>
                  <a className='capitalize m-0 text-dark_blue md:text-xl text-base transition-all duration-300' href=''>
                    davidaria451@gmail.com
                  </a>
                </span>
              </div>
              <div
                className='flex md:gap-5 gap-[10px] items-center transition-all duration-500 border-b border-solid border-b-light_black py-[30px]'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='min-w-[60px] min-h-[60px] rounded-[50%] bg-primary flex items-center justify-center'>
                  <FontAwesomeIcon icon={faLocation} className='text-[26px] text-[#181818]' />
                </span>
                <span className='flex flex-col'>
                  <span className='text-dark_blue md:text-lg text-base block mb-1'>Location</span>
                  <a className='capitalize m-0 text-dark_blue md:text-xl text-base transition-all duration-300' href=''>
                    Victoria Street London, England
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-[41.66666667%] w-full mt-5'>
            <div
              className='w-full lg:max-w-full md:max-w-[400px] xl:pl-[100px]'
              data-aos='zoom-in'
              data-aos-duration={2000}
            >
              <img src={woman_contact} alt='img' className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
