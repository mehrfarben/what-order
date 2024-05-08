import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { WatchOrder } from "../data/WatchOrder"
import Fallback from "../assets/fallback.png"

const Order = () => {
  const { id } = useParams()
  const movie = WatchOrder.movies?.find((movie) => movie.id === id)
  const order = movie?.order
  const media = movie?.media ? movie.media : ["movie"]
  const apiKey = process.env.REACT_APP_API_KEY
  const imgUrl = "https://image.tmdb.org/t/p/w154"
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (order) {
        try {
          const responses = await Promise.all(
            order.map(async (element, index) => {
              const mediaType = media[index] || media[0]
              const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${element}?api_key=${apiKey}`)
              return response.json()
            })
          )
          setData(responses)
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchData()
  }, [id, order, media, apiKey])

  return (
    <div className='orderApp'>
      <h2>what order to watch?</h2>

      <div className='order'>
        {data.length > 0 ? (
          data.map((item, index) => (
            <>
              <Link to={`/${media[index] || media[0]}/${item.id}`} key={item.id}>
                <div className='innerOrder'>
                  <img src={item.poster_path ? imgUrl + item.poster_path : Fallback} alt={item.title || item.name} />
                  <p>{item.title || item.name}</p>
                </div>
              </Link>
              <p className='then'>→</p>
            </>
          ))
        ) : (
          <h1 className='sorry'>either this is a solo movie/tv show or we currently don't have the watch order for it.</h1>
        )}
      </div>
    </div>
  )
}

export default Order
