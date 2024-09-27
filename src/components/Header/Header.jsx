import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-around items-center h-[17vh]">
      <h1 className="text-[32px]">DUY.DEV</h1>

      <ul className="hidden lg:flex items-center gap-8">
        <li>
          <a href="#about" className="menu-item duration-300 relative  block text-2xl   ">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="menu-item duration-300 relative  block text-2xl   ">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="menu-item duration-300 relative  block text-2xl   ">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="menu-item duration-300 relative  block text-2xl   ">
            Contact
          </a>
        </li>
      </ul>

      <div className="btn-toggle lg:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? (
          <div className="flex flex-col gap-2">
            <span className="w-8 h-[2px] inline-block bg-black"></span>
            <span className="w-8 h-[2px] inline-block bg-black"></span>
            <span className="w-8 h-[2px] inline-block bg-black"></span>
          </div>
        ) : (
          <div className="relative">
            <div className="flex flex-col ">
              <span className="w-8 h-[2px]  rotate-45 inline-block bg-black"></span>
              <span className="w-8 h-[2px]  -rotate-45 inline-block bg-black"></span>
            </div>

            <ul className="p-4 absolute right-0 top-8 bg-white flex flex-col items-center gap-8">
              <li>
                <a href="#about" className="menu-item relative  block text-2xl   ">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="menu-item relative  block text-2xl   ">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="menu-item relative  block text-2xl   ">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="menu-item relative  block text-2xl   ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
