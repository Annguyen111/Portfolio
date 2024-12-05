import React from 'react'
import detail_image from '../../assets/bblog1.png'
import detail_image2 from '../../assets/blog-detailsb2.png'
import straight_quote from '../../assets/straight-quotes.png'
import bg_blog_detail from '../../assets/bg_my_skill.png'
import blog_small1 from '../../assets/bsmall1.png'
import blog_small2 from '../../assets/bsmall2.png'
import blog_small3 from '../../assets/bsmall3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch, faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function BlogContent() {
  return (
    <div className='lg:pb-[120px] pb-[60px] bg-[#141410]'>
      <div className='container w-full max-w-full md:w-[90%] lg:w-[85%] px-3 md:px-0 md:mx-auto mx-0'>
        <div className='flex flex-wrap gap-y-5 md:gap-y-0'>
          <div className='w-full lg:w-[66.66666667%] pr-0 xl:pr-3'>
            <div className='2xl:pr-0 pr-0 lg:pr-3'>
              <div data-aos='fade-up' data-aos-duration={1000}>
                <a
                  className='overflow-hidden block capitalize transition-all duration-300 text-[#181818] no-underline'
                  href='/'
                >
                  <img
                    src={detail_image}
                    className='w-full overflow-hidden transition-all duration-500 hover:scale-110'
                    alt='blog detail image'
                  />
                </a>
                <div className='py-[30px] px-0'>
                  <div data-aos='fade-up' data-aos-duration={1400} className='mb-[30px] '>
                    <span className='text-lg font-medium text-white border-solid border-b md:pb-5 xl:pb-[30px] md:mb-5 xl:mb-7 block border-light_black'>
                      By: admin / Lifestyle / Posted on September 19, 2023 / Comments: 0
                    </span>
                    <p className='md:mb-5 xl:mb-7 text-sm lg:text-base text-grey leading-6 '>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable. If you are going to use a Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text. All the Lorem Ipsum the Internet tend to repeat
                      predefined chunks as necessary,
                    </p>
                    <p className='text-sm lg:text-base text-grey leading-6'>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia
                      non numquam eius modi tempora incidunts ut labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam, quis nostrum exercitationem the corporis suscipit laboriosam, nisi ut
                      aliquid
                    </p>
                  </div>
                  <div className='bg-primary rounded-lg p-5 lg:p-[30px] mb-[30px]'>
                    <img src={straight_quote} className='mb-[30px]' alt='straight_quotes_img' />
                    <p className='text-xl text-black_little mb-[35px] leading-6'>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, adipisci velit,
                      sed quia non numquam
                    </p>
                    <a
                      className='font-medium text-xl underline text-black_little capitalize transition-all duration-300'
                      href='/'
                    >
                      David Kingston
                    </a>
                  </div>
                  <p className='sm:mb-10 xl:mb-[60px] text-sm lg:text-base text-grey leading-6'>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam minima veniam, quis nostrum exercitationem ullam corporis suscipit
                    laboriosam,
                  </p>
                  <h3 className='text-white mb-[30px] text-[26px] md:text-[32px] font-semibold leading-[120%]'>
                    Aria is the only theme you will ever need
                  </h3>
                  <div className='overflow-hidden block mb-[30px]'>
                    <img
                      className='w-full overflow-hidden transition-all duration-500 hover:scale-110'
                      src={detail_image2}
                      alt='img'
                    />
                  </div>
                  <p className='md:mb-5 xl:mb-[30px] text-sm lg:text-base text-grey leading-6'>
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                    demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                    the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as from these cases are perfectly simple and easy
                    to distinguish. In a free hour,
                  </p>
                  <div className='mb-[30px]' data-aos='fade-up' data-aos-duration={1600}>
                    <ul className='p-0 m-0 list-none'>
                      <li
                        className='mb-[10px] lg:mb-5 flex items-center gap-2 relative text-base text-grey pl-4
                      before:content-[""] before:absolute before:w-[6px] before:h-[6px] before:left-0 before:rounded-[50%] before:bg-primary'
                      >
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                      </li>
                      <li
                        className='mb-[10px] lg:mb-5 flex items-center gap-2 relative text-base text-grey pl-4
                      before:content-[""] before:absolute before:w-[6px] before:h-[6px] before:left-0 before:rounded-[50%] before:bg-primary'
                      >
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it
                        is pain,
                      </li>
                      <li
                        className='mb-[10px] lg:mb-5 flex items-center gap-2 relative text-base text-grey pl-4
                      before:content-[""] before:absolute before:w-[6px] before:h-[6px] before:left-0 before:rounded-[50%] before:bg-primary'
                      >
                        On the other hand, we denounce with righteous indignation and dislike
                      </li>
                    </ul>
                  </div>
                  <p className='mb-[30px] text-sm lg:text-base text-grey leading-6'>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                  </p>
                </div>
                <div
                  className='rounded-lg lg:py-[30px] py-5 px-[14px] sm:gap-5 gap-0 lg:px-[30px] flex flex-wrap items-center justify-center xl:justify-between mb-10 xl:mb-[60px] bg-cover '
                  style={{ backgroundImage: `url(${bg_blog_detail})` }}
                >
                  <div className='flex items-center gap-[10px] lg:gap-5'>
                    <span className='text-white text-lg lg:text-xl'>Posted in :</span>
                    <a
                      className='rounded-[10px] bg-[#1d1d1d] py-3 px-5 uppercase text-grey text-xs lg:text-base no-underline transition-all duration-300'
                      href='/'
                    >
                      Business
                    </a>
                    <a
                      className='rounded-[10px] bg-[#1d1d1d] py-3 px-5 uppercase text-grey text-xs lg:text-base no-underline transition-all duration-300'
                      href='/'
                    >
                      Digital
                    </a>
                  </div>
                  <div className='flex items-center gap-5'>
                    <span className='text-white font-medium text-lg lg:text-xl'>Share :</span>
                    <ul className='flex items-center list-none rounded-[10px] bg-[#1d1d1d] py-[10px] px-5 gap-5'>
                      <li>
                        <a href='/' className='no-underline capitalize text-black transition-all duration-300'>
                          <FontAwesomeIcon icon={faFacebook} className='text-white transition-all duration-500' />
                        </a>
                      </li>
                      <li>
                        <a href='/' className='no-underline capitalize text-black transition-all duration-300'>
                          <FontAwesomeIcon icon={faTwitter} className='text-white transition-all duration-500' />
                        </a>
                      </li>
                      <li>
                        <a href='/' className='no-underline capitalize text-black transition-all duration-300'>
                          <FontAwesomeIcon icon={faInstagram} className='text-white transition-all duration-500' />
                        </a>
                      </li>
                      <li>
                        <a href='/' className='no-underline capitalize text-black transition-all duration-300'>
                          <FontAwesomeIcon icon={faLinkedin} className='text-white transition-all duration-500' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='lg:p-[30px] p-5 rounded-lg bg-cover'
                  style={{ backgroundImage: `url(${bg_blog_detail})` }}
                >
                  <h3 className='mb-[20px] text-[26px] md:text-[32px] text-white leading-[120%] font-semibold'>
                    Leave a Reply
                  </h3>
                  <p className='text-base text-grey mb-[30px] leading-6'>
                    Your email address will not be published. Required fields are marked *
                  </p>
                  <form action='' className='flex flex-wrap justify-between'>
                    <div className='w-full lg:w-[48%]'>
                      <input
                        type='text'
                        placeholder='Name'
                        className='w-full py-[18px] px-5 rounded-[10px] bg-[#1d1d1d] border-none outline-none text-white'
                      />
                    </div>
                    <div className='w-full lg:w-[48%] mt-5 lg:mt-0'>
                      <input
                        type='email'
                        name=''
                        id=''
                        placeholder='Email'
                        className='w-full py-[18px] px-5 rounded-[10px] bg-[#1d1d1d] border-none outline-none text-white'
                      />
                    </div>
                    <div className='w-full mt-5'>
                      <textarea
                        name='comment'
                        id=''
                        rows={5}
                        placeholder='Write Comments'
                        className='w-full py-[18px] px-5 rounded-[10px] bg-[#1d1d1d] border-none outline-none text-white'
                      ></textarea>
                    </div>
                    <a
                      href='/'
                      className='w-[250px] mt-5 justify-center flex items-center gap-2 font-medium text-lg leading-[120%] capitalize pt-5 pb-[21px] px-[30px] relative bg-primary overflow-hidden rounded-[5px] transition-all duration-500 text-black'
                    >
                      <span className='relative z-[1] transition-all duration-500'>Submit Comment</span>
                      <span className='relative z-[1] transition-all duration-500'>
                        <FontAwesomeIcon icon={faArrowRight} className='text-xl ' />
                      </span>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 w-full pl-0 lg:pl-3 '>
            <div className='sticky top-[120px] border border-solid border-light_black py-5 px-[18px] lg:p-[30px] rounded-lg'>
              <div className='mb-[60px]'>
                <h4 className='text-white border-b border-solid border-light_black pb-[14px] mb-[30px] text-2xl leading-[130%] font-semibold'>
                  Search
                </h4>
                <form action='' className='border border-solid border-light_black rounded-lg flex justify-between '>
                  <input
                    type='text'
                    className='w-full bg-none bg-[#141410] h-[60px] border-none py-[10px] pr-[10px] pl-5'
                    placeholder='Search'
                  />
                  <button className='cursor-pointer min-w-[60px] h-[60px] flex items-center justify-center rounded-r-lg rounded-br-lg bg-primary'>
                    <FontAwesomeIcon icon={faSearch} className='cursor-pointer transform-none' />
                  </button>
                </form>
              </div>
              <div className='mb-[60px] relative'>
                <h4 className='text-white border-b border-solid border-light_black pb-[14px] mb-[30px] text-2xl leading-[130%] font-semibold'>
                  Categories
                </h4>
                <ul className='p-0 m-0 list-none'>
                  <li className='mb-6 transition-all duration-500 group'>
                    <a
                      href='/'
                      className='transition-all duration-500 items-center justify-between flex no-underline capitalize text-light_black'
                    >
                      <span className='text-lg text-grey'>Creative</span>
                      <span className='transition-all duration-500 w-[24px] h-[24px] bg-primary group-hover:bg-white flex items-center justify-center rounded-[5px] '>
                        <FontAwesomeIcon icon={faChevronRight} className='text-[11px]' />
                      </span>
                    </a>
                  </li>
                  <li className='mb-6 transition-all duration-500 group'>
                    <a
                      href='/'
                      className='transition-all duration-500 items-center justify-between flex no-underline capitalize text-light_black'
                    >
                      <span className='text-lg text-grey'>Business</span>
                      <span className='transition-all duration-500 w-[24px] h-[24px] bg-primary group-hover:bg-white flex items-center justify-center rounded-[5px] '>
                        <FontAwesomeIcon icon={faChevronRight} className='text-[11px]' />
                      </span>
                    </a>
                  </li>
                  <li className='mb-6 transition-all duration-500 group'>
                    <a
                      href='/'
                      className='transition-all duration-500 items-center justify-between flex no-underline capitalize text-light_black'
                    >
                      <span className='text-lg text-grey'>Design</span>
                      <span className='transition-all duration-500 w-[24px] h-[24px] bg-primary group-hover:bg-white flex items-center justify-center rounded-[5px] '>
                        <FontAwesomeIcon icon={faChevronRight} className='text-[11px]' />
                      </span>
                    </a>
                  </li>
                  <li className='mb-6 transition-all duration-500 group'>
                    <a
                      href='/'
                      className='transition-all duration-500 items-center justify-between flex no-underline capitalize text-light_black'
                    >
                      <span className='text-lg text-grey'>Marketing</span>
                      <span className='transition-all duration-500 w-[24px] h-[24px] bg-primary group-hover:bg-white flex items-center justify-center rounded-[5px] '>
                        <FontAwesomeIcon icon={faChevronRight} className='text-[11px]' />
                      </span>
                    </a>
                  </li>
                  <li className='mb-6 transition-all duration-500 group'>
                    <a
                      href='/'
                      className='transition-all duration-500 items-center justify-between flex no-underline capitalize text-light_black'
                    >
                      <span className='text-lg text-grey'>Lifestyle</span>
                      <span className='transition-all duration-500 w-[24px] h-[24px] bg-primary group-hover:bg-white flex items-center justify-center rounded-[5px] '>
                        <FontAwesomeIcon icon={faChevronRight} className='text-[11px]' />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-[60px]'>
                <h4 className='text-white border-b border-solid border-light_black pb-[14px] mb-[30px] text-2xl leading-[130%] font-semibold'>
                  Recent Post
                </h4>
                <ul className='p-0 m-0 list-none'>
                  <li className='mb-[30px]'>
                    <a href='/' className='flex flex-wrap items-center gap-5 capitalize no-underline text-light_black'>
                      <img src={blog_small1} alt='img' />
                      <div>
                        <span className='text-white text-xl font-medium mb-[14px] block'>
                          The Main Thing For The Designer
                        </span>
                        <span className='text-base flex items-center text-primary gap-2'>
                          <FontAwesomeIcon icon={faClock} />
                          October 19, 2023
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='mb-[30px]'>
                    <a href='/' className='flex flex-wrap items-center gap-5 capitalize no-underline text-light_black'>
                      <img src={blog_small2} alt='img' />
                      <div>
                        <span className='text-white text-xl font-medium mb-[14px] block'>
                          The services provide for design
                        </span>
                        <span className='text-base flex items-center text-primary gap-2'>
                          <FontAwesomeIcon icon={faClock} />
                          October 19, 2023
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='mb-[30px]'>
                    <a href='/' className='flex flex-wrap items-center gap-5 capitalize no-underline text-light_black'>
                      <img src={blog_small3} alt='img' />
                      <div>
                        <span className='text-white text-xl font-medium mb-[14px] block'>
                          The Main Thing For The Designer
                        </span>
                        <span className='text-base flex items-center text-primary gap-2'>
                          <FontAwesomeIcon icon={faClock} />
                          October 19, 2023
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='text-white border-b border-solid border-light_black pb-[14px] mb-[30px] text-2xl leading-[130%] font-semibold'>
                  Tag
                </h4>
                <ul className='flex flex-wrap gap-3 p-0 m-0 list-none'>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Digital
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Audio Post
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Gallery Post
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Agency
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Graphic
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='border border-solid no-underline hover:bg-primary hover:text-black_little border-light_black py-3 px-5 rounded-[10px] text-sm uppercase text-grey inline-block transition-all duration-500'
                    >
                      Web Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
