import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Navbar from '../Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isHeader, setIsHeader] = useState(false)
  const [isOpenNavbar, setIsOpenNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setIsHeader(true)
    } else {
      setIsHeader(false)
    }
  }

  const showNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar)
  }

  return (
    <header
      className={`${
        isHeader
          ? 'w-full z-50 fixed ease-in-out bg-black transition-all duration-1000 shadow-md'
          : 'w-full absolute  ease-in-out z-10 transition-all duration-700'
      }`}
    >
      <div className='container max-w-full w-full md:w-[90%] xl:w-[85%] lg:w-[90%] mx-0 md:mx-auto px-3 md:px-0 sm:px-6'>
        <div className=' flex flex-wrap items-center justify-between transition-all duration-1000 w-full relative py-5'>
          <div>
            <Link to='/'>
              <img src={logo} className='object-contain h-full' alt='logo' />
            </Link>
          </div>
          <ul
            className={`lg:flex lg:visible lg:items-center lg:gap-x-3 xl:gap-x-[14px] xl:gap-y-0 lg:p-0 lg:m-0 lg:list-none lg:relative fixed lg:top-0 top-[60px] lg:w-auto w-full left-0 mt-5 lg:z-0 z-50 p-[15px] transition-all duration-300 ease-in origin-top overflow-y-auto lg:bg-inherit bg-[#121212] ${
              isOpenNavbar
                ? 'opacity-100 visible md:opacity-100 md:visible'
                : 'opacity-0 md:opacity-0 invisible md:invisible'
            } lg:opacity-100 opacity-0`}
          >
            <Navbar />
          </ul>
          <div className='flex gap-4 items-center'>
            <Link
              to=''
              className='hidden min-[375px]:flex lg:items-center md:items-center capitalize font-medium transition-all duration-500 bg-primary px-2 md:px-2 sm:px-6 lg:px-5 xl:px-8 md:text-lg text-lg md:py-[6px] py-[6px] xl:py-[19px] lg:py-[9px] sm:py-[19px] leading-[120%] relative items-center gap-2 rounded-md'
            >
              <span className='text-lg'>Let&apos;s Talk</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} className='text-xl lg:text-lg sm:text-2xl' />
              </span>
            </Link>
            <div className='lg:hidden w-8 h-5 flex items-center'>
              <FontAwesomeIcon
                icon={isOpenNavbar ? faXmark : faBars}
                onClick={showNavbar}
                className='text-3xl text-white cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
