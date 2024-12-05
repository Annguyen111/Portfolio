import React from 'react'
import bg_footer from '../../assets/bg_my_skill.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faMessage, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { quickLinks } from '../../constants'

export default function Footer() {
  return (
    <div
      className='relative bg-cover bg-fixed bg-no-repeat bg-center overflow-hidden'
      style={{ backgroundImage: `url(${bg_footer})` }}
      id='Footer'
    >
      <div className='container py-[60px] md:py-20 lg:py-[120px] max-w-full w-full md:w-[90%] xl:w-[85%] relative z-[1] px-3 sm:px-6 md:px-0 mx-0 md:mx-auto'>
        <div className='flex flex-wrap justify-between'>
          <div className='lg:w-1/3 w-full md:w-1/2 max-w-full md:mt-5 lg:mt-0 md:px-2 xl:px-0'>
            <div>
              <Link to={'/'} className='block mb-4 lg:mb-[30px] no-underline capitalize transition-all duration-300'>
                <img src={logo} alt='logo' />
              </Link>
              <p className='text-grey text-lg lg:text-2xl leading-8 my-0'>
                Hello, I’m aria, Website & User Interface Designer based in UK.
              </p>
            </div>
          </div>
          <div className='lg:w-[16.66666667%] md:w-1/2 w-full max-w-full mt-5 lg:mt-0 md:px-2 xl:px-0'>
            <div>
              <h4 className='text-xl lg:text-2xl mb-[30px] font-semibold leading-[130%] text-white '>Quick Link</h4>
              <ul className='p-0 m-0 list-none'>
                {quickLinks.map((link, index) => (
                  <li className='mb-2 list-item'>
                    <Link to={'/'} className='inline-block text-base text-grey capitalize transition-all duration-300'>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='lg:w-[23%] xl:w-1/5 w-full md:w-1/2 max-w-full mt-5 lg:mt-0 md:px-2 xl:px-0'>
            <div>
              <h4 className='text-white text-xl lg:text-2xl mb-5 sm:mb-[30px] leading-[130%] capitalize'>Address</h4>
              <ul className='p-0 m-0 list-none'>
                <li className='mb-5 gap-4 flex items-center'>
                  <div className='min-w-12 h-12 leading-[48px] rounded border-solid border border-light_black text-center'>
                    <FontAwesomeIcon icon={faLocation} className='text-xl text-grey' />
                  </div>
                  <a href='/' className='text-grey text-base transition-all duration-300 capitalize m-0 no-underline'>
                    12/54 stest Felo insomesis N/h road Uk
                  </a>
                </li>
                <li className='mb-5 gap-4 flex items-center'>
                  <div className='min-w-12 h-12 leading-[48px] rounded border-solid border border-light_black text-center'>
                    <FontAwesomeIcon icon={faMessage} className='text-xl text-grey' />
                  </div>
                  <div>
                    <a
                      className='text-grey block text-base transition-all duration-300 capitalize m-0 no-underline'
                      href='/'
                    >
                      example251@gmail
                    </a>
                    <a
                      className='text-grey block text-base transition-all duration-300 capitalize m-0 no-underline'
                      href='/'
                    >
                      info251@gmail
                    </a>
                  </div>
                </li>
                <li className='mb-5 gap-4 flex items-center'>
                  <div className='min-w-12 h-12 leading-[48px] rounded border-solid border border-light_black text-center'>
                    <FontAwesomeIcon icon={faLocation} className='text-xl text-grey' />
                  </div>
                  <div>
                    <a
                      className='text-grey block text-base transition-all duration-300 capitalize m-0 no-underline'
                      href='/'
                    >
                      +958 152 4581
                    </a>
                    <a
                      className='text-grey block text-base transition-all duration-300 capitalize m-0 no-underline'
                      href='/'
                    >
                      +985 548 6548
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='lg:w-1/4 w-full md:w-1/2 max-w-full mt-5 lg:mt-0 md:px-2 xl:px-0'>
            <div>
              <form action='' method='post'>
                <input
                  className='bg-transparent border border-solid border-light_black rounded-[1px] text-grey text-sm py-2 px-[14px] w-full mb-5 outline-none'
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                />
                <input
                  className='bg-transparent border border-solid border-light_black rounded-[1px] text-grey text-sm py-2 px-[14px] w-full mb-5 outline-none'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
                <input
                  className='bg-transparent border border-solid border-light_black rounded-[1px] text-grey text-sm py-2 px-[14px] w-full mb-5 outline-none'
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required
                />
                <textarea
                  className='bg-transparent border border-solid border-light_black rounded-[1px] text-grey text-sm py-2 px-[14px] w-full mb-5 outline-none'
                  name='message'
                  rows={4}
                  placeholder='Write a Message'
                  required
                ></textarea>
                <button
                  className='cursor-pointer border-none inline-flex items-center gap-1 bg-primary px-[30px] mb-5 sm:mb-0 font-medium text-lg leading-[120%] capitalize relative overflow-hidden rounded transition-all duration-500 py-4'
                  value={'Send message'}
                  name='submit'
                  type='submit'
                >
                  <span className='block z-[1] transition-all duration-500 text-dark_blue'>Send message</span>
                  <FontAwesomeIcon icon={faArrowUp} className='text-dark_blue rotate-45' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-solid border-light_black'>
        <div className='container max-w-full w-full md:w-[90%] xl:w-[85%] relative z-[1] px-7 md:px-0 mx-0 md:mx-auto'>
          <div className='text-center py-[34px] px-0'>
            <p className='text-lg text-white  leading-6'>
              Copyright © 2023
              <a href='/' className='text-primary no-underline capitalize transition-all duration-300 m-1'>
                Alaia.
              </a>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
