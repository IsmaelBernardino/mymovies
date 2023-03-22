import React, { useEffect, useState } from "react";
import data from "../Request";
import axios from "axios";
import { Link } from "react-router-dom";

const MainHome = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(data.requestUpcoming).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className=" w-full h-[600px] md:h-screen absolute top-0 z-0">
        <img
          className="w-full h-full object-cover z-0"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="w-full h-full absolute top-0 bg-black/70 z-0"></div>
      </div>
      <div className="text-white relative pt-14 m-auto w-[350px] md:w-[80%] h-[600px] md:h-screen flex justify-center md:items-center md:justify-between flex-wrap-reverse ">
        <div className="w-full sm:w-[380px] md:w-[450px] flex flex-col items-center justify-start">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            {movie?.title}
          </h2>
          <p className="text- text-gray-400 mb-3">
            {truncateString(movie?.overview, 190)}
          </p>
          <Link to={'/category/movie/' + movie?.id}>
            <button className="border border-white rounded py-2 px-6 font-semibold md:hover:bg-white md:hover:text-black">
              Watch trailer
            </button>
          </Link>
        </div>
        <img
          className="w-[150px] md:w-[220px] mb-4"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />
      </div>
    </>
  );
};

export default MainHome;
