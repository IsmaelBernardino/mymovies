import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import userimg from "../asset/user.png";
import axios from "axios";

const ActorSlider = ({ type, id }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors(id, type);
  }, [id, type]);

  const getActors = (id, type) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`
      )
      .then((res) => {
        setActors(res.data.cast);
      });
  };
  return (
    <>
      <h3 className="font-bold dark:text-white my-4 text-3xl text-center">
        Credits
      </h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {actors.map((actor, id) => (
          <SwiperSlide key={id}>
            <div className="max-h-[300px] rounded overflow-hidden">
              {actor.profile_path === null ? (
                <img className="object-cover" src={userimg} alt={actor.name} />
              ) : (
                <img
                  className="object-cover rounded"
                  src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <h4 className="font-semibold dark:text-white">{actor.name}</h4>
              <p className="text-gray-400 text-sm">{actor.character}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ActorSlider;
