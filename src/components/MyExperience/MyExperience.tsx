import React from 'react'
import bg_myExperience from '../../assets/bg_about.png'
import woman_experience from '../../assets/woman_experience.png'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { experienceData } from '../../constants'
import circle_light from '../../assets/circle_light.png'

export default function MyExperience() {
  return (
    <div
      className='lg:py-20 py-[60px] relative bg-cover bg-fixed bg-no-repeat bg-center overflow-hidden'
      style={{ backgroundImage: `url(${bg_myExperience})` }}
    >
      <div className='container max-w-full w-full md:w-[90%] xl:w-[85%]  mx-0 px-3 md:px-0 md:mx-auto'>
        <h5 className='text-[32px] text-dark_blue font-normal mb-[22px] border-b border-solid border-dark_blue inline-block leading-[130%]'>
          My Job Info
        </h5>
        <div className='flex lg:gap-[6px] xl:gap-3 flex-wrap items-center lg:items-start'>
          <div className='lg:w-[41.66666667%]  w-full'>
            <div className='relative w-full' data-aos='zoom-out-down' data-aos-duration={2000}>
              <img src={woman_experience} alt='woman' className='w-full' />
            </div>
          </div>
          <div className='lg:w-[57.33333333%] w-full'>
            <div className='xl:pr-5 pr-0'>
              <h2 className='md:text-[42px] text-[32px] mb-5 font-semibold leading-[120%] capitalize text-dark_blue'>
                My Experience
              </h2>
              <p className='text-lg leading-6 mb-0 text-dark_blue'>
                At dolor sit amet consectetur adipisicing elit. Voluptate iure in voluptatem accusamus culpa quisquam
                eos! Quis provident nobis assumenda ipsa, ratione temporibus explicabo.
              </p>
              <div className='z-10 xl:ml-0 lg:ml-2 lg:mt-6 mt-4 relative'>
                <div className='flex lg:-ml-2 -ml-0 flex-wrap max-w-full' data-aos='zoom-in' data-aos-duration={500}>
                  {experienceData.map((experience, index) => (
                    <div key={index} className='lg:w-full xl:w-1/2 w-full xl:px-2 lg:pl-0 px-0 mt-4 group'>
                      <div className='flex transition-all group-hover:bg-dark_blue duration-700 gap-6 border group-hover:border-l-4 group-hover:border-l-primary border-solid border-light_black px-4 py-4 rounded-md'>
                        <a
                          href='#0'
                          className='min-w-[44px] group-hover:bg-primary transition-all duration-700 h-[44px] rounded border-solid border border-light_black flex items-center justify-center text-lg font-medium'
                        >
                          <FontAwesomeIcon
                            icon={faArrowUp}
                            className='transition-all duration-700 group-hover:-rotate-45 rotate-45 text-dark_blue'
                          />
                        </a>
                        <div>
                          <p className='md:text-base text-sm group-hover:text-white text-dark_blue transition-all duration-700 mb-2 block'>
                            {experience.year}
                          </p>
                          <h4 className='transition-all group-hover:text-white duration-700 text-dark_blue mb-1 md:text-2xl text-lg font-semibold leading-[130%]'>
                            {experience.position}
                          </h4>
                          <p className='md:text-base text-sm group-hover:text-white transition-all duration-500 text-dark_blue block mb-0 leading-6'>
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
