import React from 'react'
import BlogContent from '../BlogContent'
import PreLoader from '../../components/PreLoader'

export default function BlogDetail() {
  return (
    <>
      <PreLoader />
      <div className='bg-[#141410] w-full'>
        <div className='lg:pt-[200px] xl:pt-[250px] pt-[150px] pb-[60px] md:pt-[200px] md:pb-[80px] lg:pb-[120px] container w-full max-w-full md:w-[90%] lg:w-[85%] px-3 md:px-0 md:mx-auto mx-0'>
          <div className='flex justify-center flex-wrap'>
            <div className='lg:w-[66.66666667%] md:w-[85%] w-full'>
              <div className='text-center'>
                <h1 className='md:text-[34px] lg:text-6xl text-3xl text-white mb-10 font-semibold leading-[120%]'>
                  Brand design that helps the company grow
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogContent />
    </>
  )
}
