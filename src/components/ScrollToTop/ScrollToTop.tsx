import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={`fixed w-[50px] h-[50px] transition-all border-solid border-[2px] border-light_black duration-500 ease-linear bg-primary z-[9999] cursor-pointer rounded-[50px] shadow-black shadow-sm right-[30px] bottom-[30px] 
      ${isVisible ? 'opacity-100 visible' : 'hidden opacity-0'}`}
      onClick={handleScrollToTop}
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className='absolute top-[50%] left-[50%] z-[9999] translate-x-[-50%] translate-y-[-50%]'
      />
    </div>
  )
}
