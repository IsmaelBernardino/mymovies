import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import img from "../asset/comingsoon.jpg";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import Loader from "./Loader";

const Row = ({ title, url, category }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setMovies(res.data.results);
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
    }, 2000);
  }, [url]);

  return (
    <div className="py-4">
      <div className="flex justify-between items-center px-4 dark:text-white">
        <h3 className="font-bold text-2xl mb-3 ">{title}</h3>
        <Link to={"/category/" + category}>
          <button className="py-1 px-4 border border-black dark:border-white dark:text-white rounded-lg md:hover:bg-black md:hover:text-white dark:md:hover:bg-white dark:md:hover:text-black">
            View more
          </button>
        </Link>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        grabCursor={true}
        breakpoints={{
          420: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.map((item, id) => (
          <SwiperSlide
            className="relative rounded overflow-hidden group min-h-[310px]"
            key={id}
          >
            {loading === true ? (
              <div className="min-h-[310px] flex flex-col justify-center items-center">
                <Loader />
              </div>
            ) : (
              <Link to={"/category/" + category + "/" + item.id}>
                <div className="min-h-[310px] rounded overflow-hidden p-2">
                  {item.backdrop_path === null ? (
                    <img
                      className="object-cover cursor-pointer rounded"
                      src={img}
                      alt="coming soon"
                    />
                  ) : (
                    <img
                      className="object-cover cursor-pointer rounded"
                      src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                      alt={item?.title}
                    />
                  )}
                  <p className="font-semibold dark:text-white">
                    {item.title === undefined ? item.name : item.title}
                  </p>
                </div>
                <div className="hidden md:group-hover:flex absolute top-0 w-full h-full bg-black/60 justify-center items-center flex-col text-white">
                  <div className="relative bg-white rounded-xl">
                    <BsYoutube size={50} className="mx-2 text-red-600 z-10" />
                    <div className="absolute top-0 w-full h-full bg-white/75 rounded-lg animate-ping z-0"></div>
                  </div>
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Row;
