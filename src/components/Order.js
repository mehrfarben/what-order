import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieOrder } from "../data/WatchOrder"

const Order = () => {
  const { id } = useParams()
  const order = MovieOrder.movies?.order
  const apiKey = process.env.REACT_APP_API_KEY
  const imgUrl = "https://image.tmdb.org/t/p/w154"
  const [data, setData] = useState([])
  const [poster, setPoster] = useState("")
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    MovieOrder.movies.forEach((element) => {
      if (id === element.id) {
        element.order.forEach((element) => {
          fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
              setData((prevData) => [...prevData, data])
            })
            .catch((error) => {
              console.error(error)
            })
        })
      }
    })
  }, [id, order, apiKey])

  return (
    <div className='order'>
      {data.map((item) => (
        <div className='innerOrder'>
          <img key={item.id} src={item.poster_path ? imgUrl + item.poster_path : "https://via.placeholder.com/400"} alt={item.title || item.name} />
          <p>{item.title || item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Order
