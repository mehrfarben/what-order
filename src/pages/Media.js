import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Order from "../components/Order"
import Fallback from "../assets/fallback.png"

const Media = () => {
  const { id, media_type } = useParams()
  const [data, setData] = useState({})
  const imgUrl = "https://image.tmdb.org/t/p/w400"
  const backgroundUrl = "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces"

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY
      const url = media_type === "movie" ? `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}` : `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`
      const response = await fetch(url)
      const newData = await response.json()
      setData(newData)
    }
    fetchData()
  }, [id, media_type])

  const { title, name, poster_path, overview, release_date, first_air_date, backdrop_path, genres } = data
  const year = release_date || first_air_date ? (release_date || first_air_date).slice(0, 4) : ""

  return (
    <>
      <div className='mediaAll'>
        <div
          className='background'
          style={{
            backgroundImage: `url(${backgroundUrl}${backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          <div className='mediaApp'>
            <div className='mediaPoster'>
              <img src={poster_path ? `${imgUrl}${poster_path}` : Fallback} alt={title || name} />
            </div>
            <div className='mediaInfo'>
              <div className='mediaName'>
                <h1>{title || name}</h1>
                <h2>
                  {media_type === "movie" ? "Movie" : "TV Show"} {year && `(${year})`}
                </h2>
                {genres &&
                  genres.map(({ name, id }) => (
                    <Link to={`/genre/${media_type}/${id}/${name}`} key={name}>
                      <button className='genres'>{name}</button>
                    </Link>
                  ))}
              </div>
              <div className='mediaOverview'>
                <p className='overviewTitle'>overview</p>
                <p className='overviewText'>{overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mediaOverviewMobile'>
          <p className='overviewTitleMobile'>overview</p>
          <p className='overviewTextMobile'>{overview}</p>
        </div>
        <Order />
      </div>
    </>
  )
}

export default Media
