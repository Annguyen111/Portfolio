import React from 'react'
import background from '../../assets/bg_my_skill.png'
import circle_light from '../../assets/circle_light.png'
import woman_my_skill from '../../assets/woman_my_skill.png'
import { skillsData } from '../../constants'

export default function MySkill() {
  return (
    <div
      className='bg-cover bg-no-repeat bg-center md:p-[40px] lg:p-[55px] py-[30px] px-[10px] overflow-hidden relative'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='mb-12'>
        <h5 className='inline-block mb-[22px] font-normal text-[32px] text-white border-white  border-b border-solid relative z-10'>
          Take A Look
        </h5>
        <div className='flex flex-wrap mt-0  lg:mt-6 mx-0 lg:mx-0 items-start'>
          <div className='lg:w-[41.66666667%] w-full lg:mt-6 mt-0 p-3'>
            <div className='relative w-full' data-aos='zoom-out-down' data-aos-duration={2000}>
              <img src={woman_my_skill} alt='img' className='w-full' />
            </div>
          </div>
          <div className=' lg:w-[58.33333333%] w-full lg:mt-6 mt-0 p-0 lg:p-3'>
            <div className='xl:pr-6 pr-0 relative z-10'>
              <h2 className='md:text-[42px] text-[32px] mb-[20px] text-white font-semibold leading-[120%]'>
                My Skills
              </h2>
              <p className='text-lg leading-6 mb-0 text-grey mt-0'>
                Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt,
                deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni
                incidunt.
              </p>
              <div className='mt-6'>
                <div className='flex flex-wrap lg:-ml-2 max-w-full'>
                  {skillsData.map((skill) => (
                    <div
                      key={skill.id}
                      className='lg:w-full xl:w-1/2 w-full lg:pl-2 xl:pr-2 lg:pr-0 py-2 px-0'
                      data-aos='zoom-in'
                      data-aos-duration={1000}
                    >
                      <div className='grid hover:border-l-[6px] hover:border-l-primary transition-all duration-300 gap-6 border rounded-md border-solid border-light_black p-4'>
                        <a
                          href='#0'
                          className='w-[60px] h-[60px] min-w-[44px] rounded flex items-center border justify-center text-primary font-medium text-lg capitalize border-light_black'
                        >
                          <img src={skill.imgSrc} alt='img' className='p-2 w-[60px]' />
                        </a>
                        <div>
                          <h4 className='mb-1 text-2xl font-semibold leading-[120%] text-white'>{skill.name}</h4>
                          <div>
                            <span className='text-right text-white flex items-center justify-end mb-2'>
                              {skill.percentage}%
                            </span>
                            <div className='bg-light_black h-[6px] flex overflow-hidden text-xs rounded-md'>
                              <div
                                className='bg-primary visible duration-700 animate-pulse'
                                style={{ width: `${skill.percentage}%` }}
                              />
                            </div>
                          </div>
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
        className='absolute top-[-300px] md:left-[-300px] left-0 w-[950px] h-[950px] lg:opacity-40 opacity-30'
      />
      <img
        src={circle_light}
        alt='img'
        className='absolute bottom-[-300px] md:right-[-300px] right-0 w-[950px] h-[950px] lg:opacity-40 opacity-30'
      />
    </div>
  )
}
