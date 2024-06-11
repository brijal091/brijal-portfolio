import { ABOUT_SECTION_DETAIL } from '@/Constant'
import React from 'react'

const Experience = () => {
  return (
    <section id='#experience' style={{minHeight: '80vh'}}>
        <h2>Experience</h2>
      <p>{ABOUT_SECTION_DETAIL.PARA_1}</p>
      <p>{ABOUT_SECTION_DETAIL.PARA_2}</p>
    </section>
  )
}

export default Experience
