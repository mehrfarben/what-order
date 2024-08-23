import React from "react";
import { Link } from "react-router-dom";
import Fallback from "../assets/fallback.png";

const MediaCard = ({ movie: { id, release_date, first_air_date, title, backdrop_path, name, media_type } }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const year = release_date || first_air_date ? (release_date || first_air_date).slice(0, 4) : "";

  return (
    <span className="group w-[334px] h-[188px] m-3 md:w-[372px] md:h-[209px] md:m-4 relative hover:transform lg:hover:scale-110 hover:scale-100" key={id}>
      <Link to={"/" + media_type + "/" + id}>
        <div className="absolute inset-0 bg-Oblue opacity-40 group-hover:opacity-0"></div>
        <img
          className="object-contain w-full h-full"
          src={backdrop_path && backdrop_path !== "N/A" ? imgUrl + backdrop_path : Fallback}
          alt={title || name}
        />
        <div className="group-hover:bg-gradient-to-t from-Oblack pt-10 w-full px-2 pb-1 absolute left-0 bottom-0">
          <h3 className="ACondensed font-bold text-3xl text-Owhite">{title || name}</h3>
          <p className="ACondensed text-sm text-Owhite">{year}</p>
        </div>
      </Link>
    </span>
  );
};

export default MediaCard;
