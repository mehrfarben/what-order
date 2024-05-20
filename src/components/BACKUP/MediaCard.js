import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Fallback from "../assets/fallback.png"

const MediaCard = ({ movie: { id, poster_path, title, name, media_type } }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300/"

  return (
    <Link to={"/" + media_type + "/" + id}>
      <div className='movie' key={id}>
        <div></div>

        <div>
          <img src={poster_path && poster_path !== "N/A" ? imgUrl + poster_path : Fallback} alt={title || name} />
        </div>

        <div className='posterDetail'>
          <span>{media_type === "tv" ? media_type + " show" : media_type}</span>
          <h3>{title || name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default MediaCard
