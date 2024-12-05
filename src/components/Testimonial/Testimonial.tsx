import React, { useEffect, useRef, useState } from 'react'
import bg_testimonial from '../../assets/bg_about.png'
import bg_spinner from '../../assets/bg_my_skill.png'
import quote_icon from '../../assets/quote.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import TestimonialSlide from '../TestimonialSlide/TestimonialSlide'
import { slides } from '../../constants'
import circle_light from '../../assets/circle_light.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const paginationRef = useRef(null)

  const handlePaginationClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div
      className='bg-fixed bg-cover bg-[#f6f8ed] relative lg:py-[120px] md:py-[80px] py-[60px] overflow-hidden '
      style={{ backgroundImage: `url(${bg_testimonial})` }}
      id='Testimonial'
    >
      <div className='container max-w-full w-full md:w-[90%] xl:w-[85%] relative z-10 px-3 md:px-0 mx-0 md:mx-auto'>
        <div className='mx-auto mb-[45px] md:mb-[60px] max-w-[920px] text-center'>
          <span
            className="text-[24px] font-caveat text-dark_blue relative inline-block mx-auto mb-[30px] font-semibold z-1 
            before:content-[''] before:w-[2px] before:bg-orange-400 before:h-[2px] before:absolute before:top-[100%] before:left-0 before:animate-trans-width"
            data-aos='fade-down'
            data-aos-duration={1000}
          >
            Testimonial
          </span>
          <h2 className='text-[23px] md:text-5xl lg:text-6xl px-7 md:px-0 font-medium leading-[120%] capitalize text-dark_blue'>
            Happy Words From Happy Customer
          </h2>
        </div>
        <div
          className='relative bg-cover overflow-hidden bg-no-repeat bg-center rounded-[10px] lg:py-[130px] md:py-[100px] md:px-[30px] py-[30px] lg:px-[60px] px-[10px]'
          style={{ backgroundImage: `url(${bg_spinner})` }}
          data-aos='fade-up'
          data-aos-duration={1000}
        >
          <div className='flex flex-wrap justify-center'>
            <div className='w-full max-w-full'>
              <div className='md:mr-[10px] mr-0 ml-0 md:ml-[30px] touch-pan-y relative overflow-clip list-none p-0 z-[1] block'>
                <Swiper
                  breakpoints={{
                    200: {
                      slidesPerView: 1,
                      spaceBetween: 40
                    }
                  }}
                  freeMode={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  pagination={{
                    el: paginationRef.current,
                    clickable: true,
                    renderBullet: function (index: number, className: string) {
                      return `<span class="${className}"></span>`
                    }
                  }}
                  modules={[FreeMode, Pagination, Autoplay]}
                  className='duration-0 relative w-full h-full z-[1] flex transition-transform box-content'
                  onSlideChange={(swiper: any) => setCurrentSlide(swiper.activeIndex)}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <TestimonialSlide {...slide} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className='absolute bottom-0 left-0 w-full flex items-center gap-[18px] justify-end my-5 -mx-5'>
                  {slides.map((slide, index) => (
                    <span
                      ref={paginationRef}
                      key={index}
                      onClick={() => handlePaginationClick(index)}
                      className={`${
                        index === currentSlide ? 'bg-primary before:border-primary' : 'bg-white before:border-white'
                      } p-[2px] w-[8px] h-[8px] relative opacity-100 cursor-pointer inline-block rounded-[50%]
                  before:content-[""] before:absolute before:-top-[6px] before:-left-[6px] before:w-5 before:h-5 before:border before:rounded-[50%] before:border-solid`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='absolute top-[99px] hidden lg:block left-[291px] '>
            <img src={quote_icon} alt='quote' />
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
