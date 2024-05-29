import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { WatchOrder } from "../data/WatchOrder"
import Fallback from "../assets/fallback.png"

const Order = () => {
  const { id } = useParams()
  const movie = WatchOrder.movies?.find((movie) => movie.id === id)
  const order = movie?.order
  const media = movie?.media ? movie.media : ["movie"]
  const solo = movie?.solo ? movie.solo : false
  const extra = movie?.extra
  const apiKey = process.env.REACT_APP_API_KEY
  const imgUrl = "https://image.tmdb.org/t/p/w154"
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (order && !solo) {
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
  }, [id])

  return (
    <div className='orderApp'>
      <h2>what order to watch?</h2>
      <div className='order'>
        {order && !solo ? (
          data.length > 0 ? (
            data.map((item, index) => (
              <>
                <Link to={`/${media[index] || media[0]}/${item.id}`} key={item.id}>
                  <div className='innerOrder'>
                    <img src={item.poster_path ? imgUrl + item.poster_path : Fallback} alt={item.title || item.name} />
                    <p className='innerOrderName'>
                      {item.title || item.name} <strong>({item.release_date || item.first_air_date ? (item.release_date || item.first_air_date).slice(0, 4) : "N/A"})</strong>
                    </p>
                    <p>{extra}</p>
                  </div>
                </Link>
              </>
            ))
          ) : (
            <h1 className='sorry'>
              sorry, we don't have the watch order for this.
              <br /> you can request it <Link to={"/request"}>here.</Link>
            </h1>
          )
        ) : solo ? (
          <h1 className='solo'>this is a standalone movie / tv show.</h1>
        ) : (
          <h1 className='sorry'>
            sorry, we don't have the watch order for this.
            <br /> you can request it <Link to={"/request"}>here.</Link>
          </h1>
        )}
      </div>
    </div>
  )
}

export default Order
