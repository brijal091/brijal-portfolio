import React from "react";
import { ABOUT, MENU } from "@/Constant";
import Link from "next/link";

const Header = (props: any) => {
  return (
    <div className="flex flex-col gap-4 p-28">
      <Link href="/">
        <h1 className="text-7xl font-black">{ABOUT.NAME}</h1>
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
    </div>
  );
};

export default Header;
