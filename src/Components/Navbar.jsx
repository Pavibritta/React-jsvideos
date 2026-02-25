import React, { useEffect, useState } from "react";
import github from "../assets/Images/GitHub.png";
import gmail from "../assets/Images/gmail.avif";
import linkedin from "../assets/Images/LinkedIn_logo_initials.png";
import logo from "../assets/Images/whiteback.jpg"

const Navbar = () => {
  
  return (
    <>
      <header className="fixed w-full bg-white  z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="h-10 w-25 overflow-hidden flex items-center">
            <img src={logo} className="cursor-pointer object-fill" alt="logo" />
          </div>
          <div className="flex justify-between items-center space-x-3">
            <ul className="hidden md:flex gap-8 text-gray-700 items-center">
              <li>
                <a href="#home" className="hover:text-[#22d3ee]">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pavibritta"
                  className=" bg-secondary  rounded-full transition hover:text-[#22d3ee]"
                >
                  <img src={github} alt="" className="h-7 w-7 rounded-full" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:pavithrarajase1@gmail.com"
                  className=" bg-secondary  rounded-full transition hover:text-[#22d3ee]"
                >
                  <img src={gmail} alt="" className="h-7 w-7 rounded-full" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pavithra-r-2621bb232/"
                  className=" bg-secondary  rounded-full transition hover:text-[#22d3ee]"
                >
                  <img src={linkedin} alt="" className="h-7 w-7 rounded-full" />
                </a>
              </li>
              {/* <li>
              <a href="#about" className="hover:text-[#22d3ee]">
                About
              </a>
            </li> */}
              {/* <li>
              <a href="#skills" className="hover:text-[#22d3ee]">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#22d3ee]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#22d3ee]">
                Contact
              </a>
            </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
