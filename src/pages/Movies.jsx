import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import img from "../asset/comingsoon.jpg";
import Loader from "../components/Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/${params.category}/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error en la respuesta:", error.response.data);
          console.error("Código de estado:", error.response.status);
        } else if (error.request) {
          console.error("Error en la solicitud:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [params.category]);

  const moreMovies = () => {
    setPage(page + 1);
    axios
      .get(
        `https://api.themoviedb.org/3/${params.category}/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies([...movies, ...response.data.results]);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error en la respuesta:", error.response.data);
          console.error("Código de estado:", error.response.status);
        } else if (error.request) {
          console.error("Error en la solicitud:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <div className="w-full">
      <div className="movie-header w-full h-[100px] flex justify-center items-end">
        {params.category === "movie" ? (
          <p className="text-white font-bold text-xl">MOVIES</p>
        ) : (
          <p className="text-white font-bold text-xl">TV SERIES</p>
        )}
      </div>
      <div className="w-[95%] md:w-[80%] m-auto my-4 flex flex-col items-end">
        <div className="flex justify-evenly flex-wrap gap-1 py-2">
          {movies?.map((item, id) => (
            <Link to={"/category/" + params.category + "/" + item.id} key={id}>
              {loading === true ? (
                <div className="w-[160px] h-[200px] flex flex-col justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <div className="w-[160px]">
                  <div className="w-[160px] rounded-lg overflow-hidden">
                    {item.poster_ === null ? (
                      <img
                        className="md:hover:scale-125"
                        src={img}
                        alt="coming soon"
                      />
                    ) : (
                      <img
                        className="md:hover:scale-125 transition-all duration-500"
                        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                        alt={item.title}
                      />
                    )}
                  </div>
                  <p className="font-semibold dark:text-white">
                    {item.title === undefined ? item.name : item.title}
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>
        {page < totalPages ? (
          <button
            className="py-2 px-4 border border-black dark:border-white dark:text-white rounded-lg mt-4 font-semibold md:hover:bg-black md:hover:text-white dark:md:hover:bg-white dark:md:hover:text-black"
            onClick={moreMovies}
          >
            View More
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Movies;
