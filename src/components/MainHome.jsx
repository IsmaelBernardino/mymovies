import { useEffect, useState } from "react";
import data from "../Request";
import axios from "axios";
import { Link } from "react-router-dom";

const MainHome = () => {
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get(data.requestUpcoming)
      .then((response) => {
        const randomMovie =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ];
        setMovie(randomMovie);
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
  }, []);

  useEffect(() => {
    if (movie) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`
        )
        .then((res) => {
          setVideo(res.data.results.slice(0, 1));
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
    }
  }, [movie]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className=" w-full h-[600px] md:h-screen relative z-0">
        <iframe
          className="w-full h-full "
          src={`https://www.youtube.com/embed/${video[0]?.key}?autoplay=1&controls=0&loop=1&playlist=${video[0]?.key}`}
          title="video"
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="absolute top-0 w-full h-full p-2 bg-black/50 flex justify-center items-center gap-2 flex-col-reverse md:flex-row">
          <div className="w-full sm:w-[380px] md:w-[450px] flex flex-col items-center justify-start">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
              {movie?.title}
            </h2>
            <p className="text- text-gray-400 mb-3">
              {truncateString(movie?.overview, 190)}
            </p>
            <Link to={"/category/movie/" + movie?.id}>
              <button className="border border-white rounded py-2 px-6 font-semibold md:hover:bg-white md:hover:text-black text-white">
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
      </div>
    </>
  );
};

export default MainHome;
