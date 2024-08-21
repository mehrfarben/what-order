import { useEffect, useState } from "react"
import { useParams } from "react-router"
import MediaCard from "../components/MediaCard"

const Genre = () => {
  const { id, media_type, name } = useParams()
  const apiKey = process.env.REACT_APP_API_KEY
  const [data, setData] = useState(null)
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
        <div className='pt-32'>
          {data !== null && data.results !== undefined && data.results.length > 0 ? (
            <div className='w-full mb-12 flex justify-center flex-wrap'>
            <p className="text-start ZT text-6xl text-Oblue m-4 w-[372px]">{name.toLowerCase()} {media_type === "tv" ? "tv show" : media_type}s→</p>
            {data.results.map((result) => (
              
              <MediaCard movie={result} />
            ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
    </>
  )
}

export default Genre
