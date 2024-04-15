import React, { useState, useEffect } from "react"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    searchMovies("Superman")
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1ba013572ce23724294380ef8bf769b6`)
    const data = await response.json()

    setMovies(data.Search)
    console.log(data)
  }

  return (
    <div className='homeApp'>
      <div className='searchApp'>
        <div className='searchTextWrapper'>
          <h1 className='searchText'>what are you looking for ?</h1>
        </div>
        <div className='search'>
          <input className='searchInput' placeholder='Search for a series...' onChange={setSearchTerm} type='text' />
          <button className='searchBtn'>Search</button>
        </div>
      </div>
      <div className='trending'>
        <h1 className='trendingText'>trending</h1>
      </div>
    </div>
  )
}

export default Home
