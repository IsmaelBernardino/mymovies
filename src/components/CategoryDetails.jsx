import React from "react";
import ProgressBar from "./ProgressBar";

const CategoryDetails = ({ movie }) => {
  const state = {
    size: 100,
    progress: movie.vote_average === null ? 0 : movie.vote_average * 10,
    strokeWidth: 5,
    circleOneStroke: "#E8F9FD",
    circleTwoStroke: "#40DFEF",
  };
  
  return (
    <div className="w-full sm:h-[600px] flex justify-center items-center flex-wrap sm:flex-nowrap md:w-[80%] md:m-auto md:justify-start z-50 pt-[4rem]">
      <img
        className="w-[200px] object-cover rounded-md mb-2 sm:mr-2 z-50"
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
      />
      <div className="max-w-[500px] md:max-w-[700px] h-full z-50 flex items-center flex-col">
        <h2 className="w-full text-white text-center text-3xl font-bold">
          {movie.title === undefined ? movie.name : movie.title}
        </h2>
        <span className="w-full text-gray-400 block text-center">
          (
          {movie?.release_date === undefined
            ? movie?.last_air_date
            : movie.release_date}
          )
        </span>
        <div className="flex text-white text-center text-sm">
          <li className="mr-2">
            {movie.genres?.map((item) => (
              <p key={item.id} className="inline">
                {item.name + " "}
              </p>
            ))}
          </li>
          <li>
            {movie?.runtime !== undefined
              ? Math.trunc(movie?.runtime / 60) +
                "h " +
                (movie?.runtime % 60) +
                "m"
              : "S" + movie.number_of_seasons + " E" + movie.number_of_episodes}
          </li>
        </div>
        <div className="w-full flex justify-center items-center my-4">
          <ProgressBar {...state} />
          <p className="ml-4 font-bold text-white">
            Users Punctuation
          </p>
        </div>
        <div className="w-full sm:text-white px-4 dark:text-white">
          <p className="text-gray-400 mb-4 font-semibold">{movie?.tagline}</p>
          <div>
            <h3 className="font-bold text-lg mb-2">General View</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
