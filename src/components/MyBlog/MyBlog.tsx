import React from 'react'
import bg_myBlog from '../../assets/bg_my_skill.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faEye } from '@fortawesome/free-solid-svg-icons'
import { blogPosts } from '../../constants'
import circle_light from '../../assets/circle_light.png'
import { Link } from 'react-router-dom'

export default function MyBlog() {
  return (
    <div
      className='relative py-[60px] md:py-20 lg:py-[120px] bg-cover bg-fixed bg-no-repeat bg-center overflow-hidden'
      style={{ backgroundImage: `url(${bg_myBlog})` }}
      id='MyBlog'
    >
      <div className='container max-w-full w-full md:w-[90%] xl:w-[85%] relative z-[1] px-7 md:px-0 mx-0 md:mx-auto'>
        <div className='flex flex-wrap justify-center lg:justify-between'>
          <div className='xl:w-1/3 lg:w-1/4 w-full max-w-full'>
            <div className='sm:max-w-[920px] mb-[50px] md:mb-[60px] flex justify-center flex-col sm:block'>
              <span
                className='text-2xl font-caveat leading-[3rem] text-center sm:text-left w-[250px] mx-auto xl:w-max relative inline-block font-semibold text-white
                before:content-[""] before:w-[2px] before:bg-orange-400 before:h-[2px] before:absolute before:top-[100%] before:left-0 before:animate-trans-width'
                data-aos='fade-down'
                data-aos-duration={1000}
              >
                My Blogs
              </span>
              <h2
                className='xl:text-6xl text-3xl text-center sm:text-left text-white font-medium mt-4 leading-[120%] '
                data-aos='fade-down'
                data-aos-duration={1500}
              >
                Recent Posts
              </h2>
              <div className='lg:mt-[50px] md:mt-[40px] mt-[30px] flex justify-center sm:justify-start'>
                <a
                  href=''
                  className='w-[150px] xl:w-[208px] h-[150px] xl:h-[208px] bg-primary rounded-[50%] flex items-center justify-center text-center relative
            before:content-[""] before:w-[150px] xl:before:w-[208px] before:h-[150px] xl:before:h-[208px] hover:before:-top-[10px] before:rounded-[50%] before:border before:border-solid before:border-primary before:absolute before:top-[10px] before:transition-all before:duration-500 before:-left-[7px] '
                  data-aos='zoom-out-down'
                  data-aos-duration={2000}
                >
                  <span className='relative z-10 flex flex-col'>
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className='rotate-45 text-[26px] md:text-[28px] block transition-all duration-500'
                    />
                    <button className='text-[#282828] text-xs md:text-base font-medium leading-[30px] capitalize transition-all duration-500'>
                      Click More Work
                    </button>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='xl:w-4/6 lg:w-3/4 w-full max-w-full'>
            <div>
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className='border-t group border-solid border-light_black hover:border-primary flex sm:items-center sm:justify-between flex-col sm:flex-row justify-center gap-3 transition-all duration-500 py-10'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <div className='md:w-[720px] sm:w-[520px] w-full mx-auto sm:mx-0 justify-center sm:justify-between flex flex-wrap items-center sm:flex-col md:flex-row sm:items-start gap-3'>
                    <div className='sm:w-[340px] lg:w-[320px] xl:w-[350px] w-auto gap-[60px] '>
                      <div className='flex sm:block flex-col items-center'>
                        <span className='text-grey text-base border border-solid border-light_black rounded-[100px] py-[7px] px-[15px] mb-[18px] md:mb-[26px] inline-block'>
                          {post.date}
                        </span>
                        <h3 className='xl:text-3xl text-xl sm:text-[22px] leading-[30px] sm:leading-[28px] lg:leading-[44px] text-center sm:text-left text-white font-semibold capitalize'>
                          <Link
                            className='text-white group-hover:text-primary duration-500 transition-all'
                            to='/blogdetail'
                          >
                            {post.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <a
                      href={post.imageBlog}
                      className='opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 capitalize m-0 text-black'
                    >
                      <img src={post.imageBlog} alt='op blog' />
                    </a>
                  </div>
                  <a
                    href={post.imageBlog}
                    className='bg-none rounded-[50%] border border-solid border-white group-hover:border-primary min-w-[60px] h-[60px] flex items-center justify-center mx-auto sm:mx-0 transition-all duration-500'
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      className='text-white group-hover:text-primary transition-all duration-500 text-xl'
                    />
                  </a>
                </div>
              ))}
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
    </div>
  )
}
