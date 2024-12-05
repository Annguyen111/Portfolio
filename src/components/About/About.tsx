import React from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import woman_about from '../../assets/woman_about.jpg'
import bg_about from '../../assets/bg_about.png'
import circle_light from '../../assets/circle_light.png'
import { InfoItem, contentItem } from '../../constants'

export default function About() {
  return (
    <section
      className='bg-fixed  bg-cover bg-[#f6f8ed] relative lg:py-[120px] py-[60px]  overflow-hidden'
      id='About'
      style={{ backgroundImage: `url(${bg_about})` }}
    >
      <div className='w-full max-w-full md:w-[90%] xl:w-[85%] mx-0 md:mx-auto container md:px-0 px-3 relative z-1'>
        <div className='max-w-[920px] text-black mx-auto mb-[60px] text-center relative'>
          <span
            className="text-[24px] font-caveat text-black relative inline-block mx-auto mb-[30px] font-semibold z-1 uppercase 
            before:content-[''] before:w-[2px] before:bg-orange-400 before:h-[2px] before:absolute before:top-[100%] before:left-0 before:animate-trans-width"
            data-aos='fade-down'
            data-aos-duration={1000}
          >
            I am Web Developer
          </span>
          <h2
            className='font-medium relative z-1 md:w-full w-[90%] mx-auto lg:mx-0 lg:leading-[120%] leading-9 md:text-5xl lg:text-[60px] text-[29px] text-[#282828]'
            data-aos='fade-down'
            data-aos-duration={1600}
          >
            Unveiling the Art of Uncommon Skill Development
          </h2>
        </div>
        <div className='mb-5 container mx-auto'>
          <div className='flex flex-wrap mt-6 g-4'>
            <div className='flex-shrink-0 flex-grow-0 lg:w-2/3 w-full'>
              <h5 className='text-dark_blue text-[32px] font-normal leading-[120%] mb-[22px] border-b border-solid border-dark_blue inline-block'>
                About Me
              </h5>
              <div className='pr-0 lg:pr-[40px]'>
                <h2
                  className='text-[32px] md:text-[42px] mb-5 font-semibold text-dark_blue'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  Professional Web Developer
                </h2>
                <p
                  className='text-dark_blue text-lg leading-[1.5] mb-0 max-w-[740px]'
                  data-aos='fade-up'
                  data-aos-duration='2000'
                >
                  Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt,
                  deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni
                  incidunt.
                </p>
                <div className='mt-0 lg:mt-6'>
                  <div className='flex flex-wrap mt-4 g-3 items-center justify-between'>
                    <div className='w-full md:w-2/3 mt-4'>
                      <ul>
                        {InfoItem.map((item, index) => (
                          <li key={index} className='flex items-center gap-3 mb-3'>
                            <span className='w-[120px] text-dark_blue text-[20px] flex items-center justify-between'>
                              {item.label} <span>:</span>
                            </span>
                            <span className='text-dark_grey'>{item.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='w-full md:w-1/3 mt-4'>
                      {contentItem.map((item, index) => (
                        <div
                          key={index}
                          className='group border-dark_blue hover:bg-dark_blue hover:border-l-primary hover:border-l-4 hover:border-solid transition-all duration-500 border border-solid border-#000d27 mb-3 rounded overflow-hidden py-3 px-3'
                        >
                          <div>
                            <span className='text-dark_blue group-hover:text-white transition-all duration-6000 text-[30px] font-semibold mb-1 block'>
                              {item.value}
                            </span>
                            <a href='#0' className='text-dark_blue group-hover:text-white transition-all duration-600'>
                              {item.label}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-shrink-0 z-10 lg:mt-0 mt-6 flex-grow-0 lg:w-1/3 w-full'>
              <div className='relative w-full ' data-aos='zoom-in' data-aos-duration={2000}>
                <img src={woman_about} alt='img' className='w-full h-full lg:mx-0 mx-auto' />
                <a
                  href='#0'
                  className='bg-white rounded-[100px] absolute bottom-5 lg:right-5 right-9 w-[200px] lg:py-3 lg:px-[14px] md:py-3 md:px-[14px] justify-center flex items-center gap-2'
                >
                  7 Years Experience
                  <span>
                    <FontAwesomeIcon icon={faArrowUp} className='rotate-45' />
                  </span>
                </a>
                <div className='absolute bottom-2/4 left-[26%] md:left-[30%] lg:left-[10%] xl:left-[18%] 2xl:left-[20%] transform translate-x-1/2 translate-y-1/2 flex mt-12 justify-center'>
                  <a
                    href=''
                    className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] flex bg-primary rounded-[50%] items-center justify-center text-center relative
                    md:before:w-[140px]  before:w-[110px] md:before:h-[140px] before:h-[110px] before:absolute before:top-[10px] before:rounded-[50%] before:left-[-7px] before:transition-all before:duration-500  before:content-[''] before:border-[1px] before:border-solid before:border-[#e0874b]
                    hover:before:top-[-10px]"
                    data-aos='zoom-out-down'
                    data-aos-duration={2000}
                  >
                    <span className='z-[1] relative flex flex-col'>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className='mb-[1px] text-[26px] md:text-[28px] block rotate-45 text-black transition-all duration-[4000]'
                      />
                      <span className='text-[#282828] text-xs md:text-lg font-normal leading-[30px] capitalize transition-all duration-[4000]'>
                        Hire Me
                      </span>
                    </span>
                  </a>
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
    </section>
  )
}
