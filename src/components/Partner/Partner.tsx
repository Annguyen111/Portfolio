import React from 'react'
import bg_trustedUs from '../../assets/bg_about.png'
import circle_light from '../../assets/circle_light.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { imagesPartner } from '../../constants'
import { Autoplay, FreeMode } from 'swiper/modules'

export default function Partner() {
  return (
    <div
      className='bg-fixed bg-cover bg-[#f6f8ed] relative lg:py-[120px] md:py-[80px] py-[60px] overflow-hidden '
      style={{ backgroundImage: `url(${bg_trustedUs})` }}
    >
      <div className='container max-w-full w-full md:w-[90%] xl:w-[85%] relative z-10 px-3 md:px-0 mx-0 md:mx-auto'>
        <div>
          <div className='flex flex-wrap justify-center'>
            <div className='max-w-full w-full md:w-10/12 lg:w-3/4 xl:w-1/2'>
              <h2
                className='leading-[120%] font-semibold text-[29px] w-[90%] mx-auto md:text-[40px] text-dark_blue text-center mb-[60px]'
                data-aos='fade-down'
                data-aos-duration={1000}
              >
                More Than 210+ Companies Trusted Us Worldwide
              </h2>
            </div>
          </div>
          <div className='touch-pan-y mx-auto relative overflow-clip list-none px-20 z-[1] block'>
            <div className='relative flex-wrap justify-between w-full h-full z-[1] flex transition-transform box-content'>
              <Swiper
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 50
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 50
                  },
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  }
                }}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
              >
                {imagesPartner.map((image, index) => (
                  <SwiperSlide className='flex items-center' key={index}>
                    <img
                      src={image}
                      alt={`Partner Image ${index + 1}`}
                      className='transition-all duration-300 brightness-0'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <span></span>
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
