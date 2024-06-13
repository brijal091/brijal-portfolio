import { ABOUT_SECTION_DETAIL } from '@/Constant'
import React from 'react'

const Experience = () => {
  return (
    <div className="flex flex-col gap-6">
        <h2 className="text-white text-3xl">Experience</h2>
      <p>{ABOUT_SECTION_DETAIL.PARA_1}</p>
      <p>{ABOUT_SECTION_DETAIL.PARA_2}</p>
      <p>{ABOUT_SECTION_DETAIL.PARA_2}</p>
      <p>{ABOUT_SECTION_DETAIL.PARA_2}</p>
      
    </div>
  )
}

export default Experience
