import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Fallback from "../assets/fallback.png"

const Genre = () => {
  const { id, media_type, name } = useParams()
  const apiKey = process.env.REACT_APP_API_KEY
  const [data, setData] = useState(null)
  const imgUrl = "https://image.tmdb.org/t/p/w300/"
  const genreUrl =
    media_type === "movie"
      ? `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${apiKey}`
      : `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${apiKey}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(genreUrl)
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`)
        }

        const newData = await response.json()

        if (!newData || !newData.results || newData.results.length === 0) {
          throw new Error("Invalid API response")
        }

        setData(newData)
      } catch (error) {
        console.error("Error fetching genre data:", error)
        if (error instanceof TypeError) {
          console.error("TypeError caught. Check for null pointer references")
        } else {
          console.error("Unhandled exception caught. Check for bugs.")
        }
      }
    }
    fetchData()
  }, [""])
  console.log(data)
  return (
    <>
      <div className='homeApp'>
        <div className='genreTitleLeft'>
          <div className='genreTitle'>
            <p>{name.toLowerCase()}</p> {media_type === "tv" ? "tv show" : media_type}s
          </div>
        </div>
        <div className='container'>
          {data !== null && data.results !== undefined && data.results.length > 0 ? (
            data.results.map((result) => (
              <Link key={result.id} to={`/${media_type}/${result.id}`}>
                <div className='movie'>
                  <div></div>
                  {result.poster_path !== null && result.poster_path !== undefined ? (
                    <div>
                      <img src={result.poster_path ? `${imgUrl}${result.poster_path}` : Fallback} alt={result.title ? result.title : result.name} />
                    </div>
                  ) : (
                    <div>
                      <img src={Fallback} alt={result.title ? result.title : result.name} />
                    </div>
                  )}
                  <div>
                    <span>{result.media_type === "tv" ? `${result.media_type} show` : result.media_type}</span>
                    <h3>{result.title ? result.title : result.name}</h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Genre
