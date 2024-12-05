import React from 'react'
import bg_myEducation from '../../assets/bg_about.png'
import circle_light from '../../assets/circle_light.png'
import { educationData } from '../../constants'

export default function MyEducation() {
  return (
    <div
      className='relative py-[60px] md:py-20 lg:py-[120px] bg-cover bg-fixed bg-no-repeat bg-center overflow-hidden'
      style={{ backgroundImage: `url(${bg_myEducation})` }}
    >
      <div className='container w-full max-w-full xl:w-[85%] md:w-[90%] mx-0 md:px-0 px-3 md:mx-auto relative z-40'>
        <div className='flex flex-wrap gap-4 items-center'>
          <div className='w-full max-w-full'>
            <h5 className='font-normal text-[32px] inline-block mb-12 border-b border-solid border-dark_blue text-dark_blue'>
              My Education
            </h5>
            <div className='lg:pr-5 pr-0'>
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className='lg:mb-10 md:mb-8 lg:w-[65.66666667%] xl:w-[66.66666667%] even:flex even:justify-end even:ml-auto'
                  data-aos='zoom-out-down'
                  data-aos-duration={education.duration}
                >
                  <div className='flex flex-wrap items-center justify-between'>
                    <div className='xl:w-3/4 lg:w-[66%] w-full max-w-full'>
                      <div className='border group hover:border-l-primary border-solid border-light_black px-[14px] py-5 lg:p-6 rounded-[10px] transition-all duration-500 border-l-4 border-l-light_black '>
                        <div className='border-b border-solid border-b-light_black pb-4 mb-4'>
                          <h4 className='transition-all group-hover:text-primary duration-500 mb-[10px] lg:mb-[15px] text-dark_blue text-2xl leading-[120%] font-semibold'>
                            {education.title}
                          </h4>
                          <p className='text-base block leading-6 mb-0 text-dark_blue'>{education.location}</p>
                        </div>
                        <p className='text-base text-dark_blue leading-6 mb-0'>{education.description}</p>
                      </div>
                    </div>
                    <div className='w-full xl:w-1/4 lg:w-[33%] max-w-full lg:mt-0 md:mb-0 my-8 px-0 lg:px-3'>
                      <span className='text-2xl md:text-[28px] lg:text-4xl text-primary font-medium'>
                        {education.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={circle_light}
        alt='img'
        className='absolute top-[-300px] left-0 md:left-[-260px] lg:left-[-300px] w-[950px] h-[950px] opacity-40'
      ></img>
      <img
        src={circle_light}
        alt='img'
        className='absolute bottom-[-300px] right-0  md:right-[-260px] lg:right-[-300px] w-[950px] h-[950px] opacity-40 '
      ></img>
    </div>
  )
}
