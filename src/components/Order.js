import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { WatchOrder } from "../data/WatchOrder"
import Fallback from "../assets/innerOrderFallback.png"

const Order = () => {
  const { id } = useParams()
  const movie = WatchOrder.movies?.find((movie) => movie.id === id)
  const order = movie?.order
  const media = movie?.media ? movie.media : ["movie"]
  const solo = movie?.solo ? movie.solo : false
  const extra = movie?.extra
  const apiKey = process.env.REACT_APP_API_KEY
  const imgUrl = "https://image.tmdb.org/t/p/w342"
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
    <div className='h-3/5'>
      <h2 className="ZT text-Oblue text-xl lg:text-3xl">you can watch it in this order →</h2>
      <div className='flex pb-3 w-[99%] overflow-x-auto'>
        {order && !solo ? (
          data.length > 0 ? (
            data.map((item, index) => (
              <>
              <div className='w-[153px] mr-8 mt-4'>
                <Link to={`/${media[index] || media[0]}/${item.id}`} key={item.id}>
                    <img className="min-h-[231px] min-w-[153px] hover:border-8 border-Oblue" src={item.poster_path ? imgUrl + item.poster_path : Fallback} alt={item.title || item.name} />   
                </Link>
                <div className="">
                <p className="ACondensed text-Oblue">{item.title || item.name}</p>
                </div>
                <p className="orderExtra">{extra && extra[index]}</p>
                
                </div>
              </>
            ))
          ) : (
            <h1 className=' '>
            </h1>
          )
        ) : solo ? (
          <h1 className='ACondensed text-Oblack mt-4 text-sm lg:text-2xl'>this is a standalone movie / tv show.</h1>
        ) : (
          <h1 className='ACondensed text-Oblack mt-4 text-sm lg:text-2xl'>
            we don't have the order for this yet.
            <br /> you can request it <Link className="underline" to={"/request"}>here.</Link>
          </h1>
          
        )}
      </div>
    </div>
  )
}

export default Order
