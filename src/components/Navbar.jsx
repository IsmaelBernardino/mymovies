import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";
import { useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [mode, setMode] = useState(true);

  const Darkmode = () => {
    setMode(!mode);
    if (mode === true) {
      const root = window.document.documentElement;
      root.classList.add("dark");
    } else {
      const root = window.document.documentElement;
      root.classList.remove("dark");
    }
  };

  return (
    <div className="w-full fixed top-0 flex justify-between items-center pl-8 z-[100] bg-black">
      <Link to="/" className="flex py-2">
        <h1 className="text-3xl font-bold mr-4 text-yellow-400">My movies</h1>
        <GiPopcorn className="text-red-600" size={35} />
      </Link>
      <div className="navlinks hidden sm:flex justify-evenly items-center mr-[45px] w-[350px] text-white font-bold">
        <NavLink to="/" className='md:hover:text-cyan-300'>
          <p>HOME</p>
        </NavLink>
        <NavLink to="/category/movie" className='md:hover:text-cyan-300'>
          <p>MOVIES</p>
        </NavLink>
        <NavLink to="/category/tv" className='md:hover:text-cyan-300'>
          <p>TV SERIES</p>
        </NavLink>
      </div>
      <div className="absolute right-3 sm:right-5">
        {mode === false ? (
          <div className="bg-yellow-300/50 rounded-full w-[35px] h-[35px] flex justify-center items-center">
            <BsFillSunFill
              className="text-yellow-400 cursor-pointer"
              onClick={Darkmode}
              size={25}
            />
          </div>
        ) : (
          <div className="bg-gray-400/50 rounded-full w-[35px] h-[35px] flex justify-center items-center">
            <BsFillMoonStarsFill
              className="text-white cursor-pointer"
              onClick={Darkmode}
              size={25}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
