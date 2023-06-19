import React from "react";
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { SiLinktree } from 'react-icons/si';

const Footer = () => {
    return (
      <div className="bg-blue-50">
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <CgWorkAlt className="text-xl" />
      <span className="ml-3 text-xl">Portofolio Jahfal</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 Jahfal Mudrik Ramadhan
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://instagram.com/jahfal.m" className="ml-3 text-gray-500">
       <BsInstagram className="text-2xl hover:text-[#f09433]"/>
      </a>
      <a href="https://www.linkedin.com/in/jahfal-mudrik-r-0037a6201/" className="ml-3 text-gray-500">
        <BsLinkedin className="text-2xl hover:text-[#0E76A8]"/>
      </a>
      <a href="https://www.github.com/in/jahfal21" className="ml-3 text-gray-500">
        <BsGithub className="text-2xl hover:text-[#333]"/>
      </a>
      <a href="https://www.linktr.ee/jahfal.m" className="ml-3 text-gray-500">
        <SiLinktree className="text-2xl hover:text-[#333]"/>
      </a>
    </span>
  </div>
</footer>
      </div>
    )
  }
  export default Footer