import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryVideo = ({ type, id }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`
      )
      .then((res) => {
        setVideos(res.data.results.slice(0, 5));
      });
  }, [type, id]);

  return (
    <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[850px] sm:m-auto py-4 flex flex-col gap-4">
      {videos.map((item, id) => (
        <iframe
          key={id}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
          src={`https://www.youtube.com/embed/${item.key}`}
          title="video"
        ></iframe>
      ))}
    </div>
  );
};

export default CategoryVideo;
