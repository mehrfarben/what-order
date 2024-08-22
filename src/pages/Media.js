import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Order from "../components/Order"
import Fallback from "../assets/fallbackposter.png"

const Media = () => {
  const { id, media_type } = useParams()
  const [data, setData] = useState({})
  const imgUrl = "https://image.tmdb.org/t/p/w780"

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

  const { title, name, poster_path, backdrop_path, overview, release_date, first_air_date, genres } = data
  const year = release_date || first_air_date ? (release_date || first_air_date).slice(0, 4) : ""

  return (
    <>
          <div className='flex flex-col lg:flex-row pt-20 bg-Owhite w-full'>

              <img className="h-[90vh] hidden lg:block" src={poster_path ? `${imgUrl}${poster_path}` : Fallback} alt={title || name} />
              <img className=" block lg:hidden" src={backdrop_path? `${imgUrl}${backdrop_path}` : Fallback} alt={title || name} />

            <div className='ml-6 pt-5 flex flex-col justify-between overflow-x-hidden'>
              <div className=''>
                <h1 className="ZT text-Oblue text-2xl lg:text-6xl">{title || name}</h1>
                <h2 className="ZT-Italic text-Oblue text-xl lg:text-3xl py-4">
                  {media_type === "movie" ? "Movie" : "TV Show"} {year && `(${year})`}
                </h2>
                {genres &&
                  genres.map(({ name, id }) => (
                    <Link to={`/genre/${media_type}/${id}/${name}`} key={name}>
                      <button className='bg-Oblue text-Owhite rounded-full text-xs lg:text-lg px-4 py-1 mr-2 mb-6 ACondensed'>{name}</button>
                    </Link>
                  ))}
              
              <div>
                <p className='text-Oblue text-4xl ZT font-semibold'>overview</p>
                <p className='text-Oblue text-2xl ACondensed mr-12 pt-2'>{overview}</p>
              </div>
              </div>
              <div className=" mb-8">
              <Order />
              </div>
            </div>
          </div>
        
    </>
  )
}

export default Media
