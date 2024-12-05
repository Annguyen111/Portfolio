import React from 'react'
import About from '../../components/About'
import MySkill from '../../components/MySkill'
import MyExperience from '../../components/MyExperience'
import MyEducation from '../../components/MyEducation'
import MyProject from '../../components/MyProject'
import Contact from '../../components/Contact'
import Testimonial from '../../components/Testimonial'
import Partner from '../../components/Partner'
import MyBlog from '../../components/MyBlog'
import Banner from '../../components/Banner'
import PreLoader from '../../components/PreLoader'

export default function Home() {
  return (
    <div>
      <PreLoader />
      <Banner />
      <About />
      <MySkill />
      <MyExperience />
      <MyEducation />
      <MyProject />
      <Contact />
      <Testimonial />
      <Partner />
      <MyBlog />
    </div>
  )
}
