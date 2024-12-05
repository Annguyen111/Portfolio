import React, { useState } from 'react'
import bg_my_project from '../../assets/bg_my_skill.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import circle_light from '../../assets/circle_light.png'
import { buttonData, projectData } from '../../constants'

export default function MyProjects() {
  const [currentProject, setCurrentProject] = useState('all')
  const [filteredProject, setFilteredProjects] = useState(projectData.all)

  const handleFilterClick = (filter: string) => {
    setCurrentProject(filter)

    switch (filter) {
      case 'brandingDesign':
        const brandingDesignFiltered = projectData.brandingDesign
        setFilteredProjects(brandingDesignFiltered || [])
        break
      case 'webApp':
        const webAppFiltered = projectData.webApp
        setFilteredProjects(webAppFiltered || [])
        break
      case 'website':
        const websiteFiltered = projectData.website
        setFilteredProjects(websiteFiltered || [])
        break
      case 'landingPage':
        const landingPageFiltered = projectData.landingPage
        setFilteredProjects(landingPageFiltered || [])
        break
      default:
        setFilteredProjects(projectData.all || [])
        break
    }
  }

  return (
    <div
      className='relative overflow-hidden bg-cover md:py-[80px] lg:py-[120px] py-[60px] bg-no-repeat bg-center '
      style={{ backgroundImage: `url(${bg_my_project})` }}
      id='MyProject'
    >
      <div className='container max-w-full w-full md:w-[90%] xl:w-[85%] relative z-10 px-3 md:px-0 mx-0 md:mx-auto'>
        <div className='mx-auto mb-[45px] md:mb-[60px] max-w-[920px] text-center'>
          <span
            className="text-[24px] font-caveat text-white relative inline-block mx-auto mb-[30px] font-semibold z-1 
            before:content-[''] before:w-[2px] before:bg-orange-400 before:h-[2px] before:absolute before:top-[100%] before:left-0 before:animate-trans-width"
            data-aos='fade-down'
            data-aos-duration={1000}
          >
            My Project
          </span>
          <h2 className='text-[29px] md:text-5xl lg:text-6xl font-medium leading-[120%] capitalize text-white'>
            Awesome Project
          </h2>
        </div>
        <div className='bg-light_black border border-solid border-light_black px-[5px] lg:px-6 pb-0 lg:pt-6 pt-[5px]'>
          <div>
            <ul
              className='flex flex-wrap items-center gap-[14px] lg:gap-0 xl:gap-5 md:mb-[70px] lg:mb-6 mb-9 justify-center lg:justify-between xl:justify-center bg-[#141410] p-6'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              {buttonData.map((button, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFilterClick(button.filter)}
                    className={`rounded-xl lg:rounded-sm text-sm lg:text-lg uppercase font-medium py-[10px] lg:py-4 px-5 lg:px-[30px] text-center ${
                      currentProject === button.filter ? 'bg-primary text-black' : 'bg-black_little text-white'
                    }`}
                  >
                    {button.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className='relative'>
              <div className='translate-y-[0px] relative z-[1] top-0 w-full opacity-1 transition-all duration-500'>
                <div className='flex flex-wrap md:gap-[25px] gap-6 xl:gap-6 lg:gap-x-7 lg:gap-y-6'>
                  {filteredProject.map((project, index) => (
                    <div key={index} className='lg:w-[31%] xl:w-[32%] md:w-[48%] w-full max-w-full'>
                      <div data-aos='fade-up' data-aos-duration={1000}>
                        <div className='relative group w-full h-full block overflow-hidden mb-0 lg:mb-[30px]'>
                          <a
                            href={project.image}
                            className='overflow-hidden before:content-[""] before:absolute group-hover:before:visible group-hover:before:opacity-100 before:w-full before:h-[300px] before:bottom-0 before:left-0 before:rounded-lg before:opacity-0 before:invisible before:transition-all before:duration-500 before:bg-gradient-to-t before:from-black  block w-full h-full  capitalize transition-all duration-500'
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className='w-full h-full overflow-hidden transition-all duration-500 rounded-lg'
                            />
                          </a>
                          <div className='absolute -bottom-[105px] md:-bottom-[100px] group-hover:bottom-[30px] left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 invisible group-hover:visible gap-2 flex justify-between items-center'>
                            <a href='' className='text no-underline m-0 capitalize transition-all duration-300'>
                              <span className='uppercase mb-4 text-primary text-base lg:text-lg'>
                                {project.category}
                              </span>
                              <h3 className='text-xl lg:text-2xl text-white leading-[120%] font-semibold'>
                                {project.title}
                              </h3>
                            </a>
                            <a
                              href={project.image}
                              className='rounded-[50%] bg-primary capitalize_little min-w-[45px] lg:min-w-[60px] h-[45px] lg:h-[60px] flex items-center justify-center transition-all duration-500'
                            >
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                className='text-black transition-all duration-300 text-lg lg:text-xl rotate-45'
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:mt-[50px] md:mt-[60px] mt-[45px] flex justify-center'>
          <a
            href=''
            className='w-[120px] md:w-[208px] h-[120px] md:h-[208px] bg-primary rounded-[50%] flex items-center justify-center text-center relative
            before:content-[""] before:w-[120px] md:before:w-[208px] before:h-[120px] md:before:h-[208px] hover:before:-top-[10px] before:rounded-[50%] before:border before:border-solid before:border-primary before:absolute before:top-[10px] before:transition-all before:duration-500 before:-left-[7px] '
            data-aos='zoom-out-down'
            data-aos-duration={2000}
          >
            <span className='relative z-10 flex flex-col'>
              <FontAwesomeIcon
                icon={faArrowUp}
                className='rotate-45 text-[26px] md:text-[28px] block transition-all duration-500'
              />
              <button className='text-[#282828] text-xs md:text-lg font-medium leading-[30px] capitalize transition-all duration-500'>
                Click More Work
              </button>
            </span>
          </a>
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
