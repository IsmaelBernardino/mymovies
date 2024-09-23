import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imgCinema from "../asset/cinema.jpg";
import ActorSlider from "../components/ActorSlider";
import CategoryDetails from "../components/CategoryDetails";
import CategoryVideo from "../components/CategoryVideo";
import axios from "axios";

const CategoryInfo = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  const getMovie = async (type, id) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`);
      setMovie(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error en la respuesta:", error.response.data);
        console.error("Código de estado:", error.response.status);
      } else if (error.request) {
        console.error("Error en la solicitud:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  
  useEffect(() => {
    getMovie(params.type,params.id);
  }, [params.id, params.type]);

  return (
    <div className="w-full">
      <div className="w-full h-[600px] absolute top-0 z-0">
        {movie.belongs_to_collection === null ? (
          <img
            className="w-full h-full object-cover z-0"
            src={imgCinema}
            alt="cinema"
          />
        ) : (
          <img
            className="w-full h-full object-cover z-0"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        )}
        <div className="absolute top-0 w-full h-full bg-black/75 z-0"></div>
      </div>
      <CategoryDetails movie={movie} />
      <div className="w-full">
        <ActorSlider type={params.type} id={movie.id} />
        <CategoryVideo type={params.type} id={params.id} />
      </div>
    </div>
  );
};

export default CategoryInfo;
