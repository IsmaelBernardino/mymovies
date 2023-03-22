import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer w-full h-[500px] text-white flex flex-wrap justify-center items-center">
      <div className="w-[90%] sm:w-[45%]">
        <p className="text-lg font-semibold">Created by:</p>
        <h2 className="text-3xl font-bold">
          Abdalan Ismael Bernardino Hidalgo
        </h2>
        <p className="font-semibold text-lg text-center mt-4">
          Tecnology used:
          <span className="text-sm block mt-2">Tailwind</span>
          <span className="text-sm ">React JS</span>
        </p>
        <div className="flex justify-evenly mt-4">
          <a href="https://github.com/IsmaelBernardino" target='_blank' rel="noreferrer">
            <BsGithub className="md:hover:scale-150 transition-all" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/ismael-bernardino-922083218/" target='_blank' rel="noreferrer">
            <BsLinkedin className="md:hover:scale-150 transition-all" size={30} />
          </a>
        </div>
      </div>
      <div className="w-[90%] sm:w-[45%] text-gray-400 flex flex-col items-center gap-2">
        <p className="font-semibold text-lg text-white">Pages:</p>
        <Link to='/'>
          <p className="border-b border-gray-400 inline">Home</p>
        </Link>
        <Link to="/category/movie">
          <p className="border-b border-gray-400 inline">Movies</p>
        </Link>
        <Link to="/category/tv">
          <p className="border-b border-gray-400 inline">TV Series</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
