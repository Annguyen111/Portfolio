import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import quote_icon from '../../assets/quote.png'

interface TestimonialSlideProps {
  image: string
  content: string
  author: string
  position: string
  ratting: number
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ image, content, author, position, ratting }) => {
  const renderRatingStars = () => {
    const stars = []
    for (let i = 0; i < ratting; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className='text-star_ratting text-lg md:text-xl' />)
    }
    return stars
  }

  return (
    <div className='sm:w-[650px] md:w-[790px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] relative block h-full transition-transform'>
      <div className='flex flex-wrap md:flex-nowrap md:gap-3 lg:gap-6 md:items-start lg:items-center w-full'>
        <div className='lg:min-w-[280px] md:min-w-[200px] md:h-[200px] min-w-[150px] w-[150px] h-[150px] mb-5 lg:mb-0 lg:h-[280px] relative'>
          <img src={image} alt='avatar' className='w-full h-full rounded-[50%] object-cover' />
          <div className='w-[60px] h-[60px] bg-primary rounded-[50%] flex items-center justify-center absolute bottom-0 left-0'>
            <img src={quote_icon} alt='' className='object-cover rounded-[50%] w-[40px] h-[40px]' />
          </div>
        </div>
        <div>
          <div className='flex mb-6 gap-2 items-center'>{renderRatingStars()}</div>
          <p className='md:text-xl w-[90%] md:w-[70%] text-base max-w-full text-white md:pr-5 md:mb-10 mb-5 italic leading-7'>
            {content}
          </p>
          <h4 className='text-primary mb-2 text-2xl leading-[130%] font-semibold capitalize'>{author}</h4>
          <span className='text-[#999999] text-base lg:text-lg'>{position}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlide
