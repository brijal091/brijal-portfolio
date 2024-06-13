import React from "react";
import { ABOUT, MENU, PROFILE_LINKS } from "@/Constant";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Header = (props: any) => {
  return (
    <div className="flex flex-col gap-4 p-28">
      <Link href="/">
        <h1 className="text-6xl font-black text-white">{ABOUT.NAME}</h1>
      </Link>
      <p className="text-white text-2xl">{ABOUT.POSITION}</p>
      <p className="text-xl">{ABOUT.WORK}</p>
      <div className="sections mt-16 text-xl hidden md:flex flex-col gap-6">
        {MENU.map((menu) => {
          return (
            <Link href={menu.section_id} key={menu.id}>
              <span
                className={`border-b-2 inline-block mb-2 mr-5 ${
                  props.activeSection === menu.section_id
                    ? "w-16"
                    : "w-10 border-gray-500"
                }`}
              ></span>
              <span
                className={`${
                  props.activeSection === menu.section_id ? "text-white" : ""
                }`}
              >
                {menu.title}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-between mt-auto w-1/2">
        <Link href={PROFILE_LINKS.GITHUB}>
          <FaGithub size={30}/>
        </Link>
        <Link href={PROFILE_LINKS.LINKEDIN}>
          <FaLinkedin size={30}/>
        </Link>
        <Link href={"/"}>
          <FaSquareXTwitter size={30}/>
        </Link>
        <Link href={"/"}>
          <FiInstagram size={30}/>
        </Link>
      </div>
    </div>
  );
};

export default Header;
