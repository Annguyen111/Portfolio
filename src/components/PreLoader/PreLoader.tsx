import React, { useEffect, useState } from 'react'
import logo from '../../assets/favicon.png'
import { useLocation } from 'react-router-dom'

export default function PreLoader() {
  const [isPreLoading, setIsPreLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const preLoadingTimeout = setTimeout(() => {
      setIsPreLoading(false)
    }, 2000)

    return () => clearTimeout(preLoadingTimeout)
  }, [location.pathname])

  return (
    <div
      className={`fixed w-full h-full z-[99999] top-[50%] left-[50%] flex items-center justify-center translate-x-[-50%] translate-y-[-50%] bg-[#fff] ${
        isPreLoading ? 'opacity-100' : 'opacity-0 transition-all duration-500 ease-in-out pointer-events-none'
      }`}
    >
      <div className='border w-[70px] animate-trans-up h-[70px] border-solid border-primary overflow-hidden rounded py-[10px] px-[5px] mx-auto mt-0 mb-[5px]'>
        <img src={logo} alt='logo' className='w-full h-full object-contain mb-[-10px]' />
      </div>
    </div>
  )
}
