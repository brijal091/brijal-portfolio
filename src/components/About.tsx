import { ABOUT_SECTION_DETAIL } from "@/Constant";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-white text-3xl">About Me</h2>
      <p>{ABOUT_SECTION_DETAIL.PARA_1}</p>
      <p dangerouslySetInnerHTML={{ __html: ABOUT_SECTION_DETAIL.PARA_2 }} />
    </div>
  );
};

export default About;
