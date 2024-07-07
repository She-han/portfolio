import React from "react";
import { FaGithubSquare, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="px-2 w-max-[1400px] h-auto border-t border-gray-500 text-center bg-gray-900">
      <div className="inline-flex gap-8 my-6 text-3xl text-gray-500">
        <FaGithubSquare />
        <FaHtml5 />
        <FaReact />
        <FaCss3Alt />
        <FiFramer />
      </div>

      <div className="pb-8">
        <p className="text-xs text-gray-400 md:text-sm">
          &#169;2024 | All rights reserved - Created by
          <span className="primary-color"> Shehan Induwara</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
