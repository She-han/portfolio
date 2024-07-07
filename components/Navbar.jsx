import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 36) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "bg-gray-900 bg-opacity-95 sticky top-0 z-[10] text-gray-200 flex justify-between items-center max-w-[100%] mx-auto h-24 px-4 lg:px-24 text-l "
          : "bg-transparent sticky top-0 z-[20] text-gray-400 flex justify-between items-center max-w-[100%] mx-auto h-24 px-4 lg:px-24 text-l "
      }
    >
      <a href="#home">
        <h1 className="ml-4 text-4xl font-bold primary-color">SheY &#8482;</h1>
      </a>

      <ul className="hidden md:flex ">
        <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
          <a href="#home">Home</a>
        </li>
        <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
          <a href="#about">About</a>
        </li>
        <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
          <a href="#services">Services</a>
        </li>
        <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
          <a href="#team">Team</a>
        </li>
        <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-[20] text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] bg-opacity-90 ease-in-out duration-500 blur-fil px-1 py-4"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 text-3xl font-bold primary-color">Shey &#8482;</h1>

        <ul className="p-8 text-2xl">
          <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
            <a href="#about">About</a>
          </li>
          <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
            <a href="#services">Services</a>
          </li>
          <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
            <a href="#team">Team</a>
          </li>
          <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-4 hover:text-[#B333D8] active:text-purple-600">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
