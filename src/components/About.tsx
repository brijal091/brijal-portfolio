import { ABOUT_SECTION_DETAIL } from '@/Constant'
import React from 'react'

const About = () => {
  return (
    <section id='#about' style={{minHeight: '80vh'}}>
        <h2>About Me</h2>
      <p>{ABOUT_SECTION_DETAIL.PARA_1}</p>
      <p>{ABOUT_SECTION_DETAIL.PARA_2}</p>
    </section>
  )
}

export default About
