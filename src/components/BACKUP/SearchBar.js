import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Search from "../pages/Search"

const SearchBar = () => {
  const [searchData, setSearchData] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const searchMedia = async () => {
    if (!searchData) {
      console.error("Search data is empty, please enter a search term")
      return
    }

    const apiKey = process.env.REACT_APP_API_KEY
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchData}&api_key=${apiKey}`)
      const data = await response.json()
      console.log(data)
      if (!data.results) {
        console.error("No search results found")
        return
      }

      navigate("/search", { state: { searchResults: data.results } })
      setSearchData("")
    } catch (error) {
      console.error("Error searching for media:", error)
    }
  }

  const handleInputChange = (event) => {
    setSearchData(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      searchMedia()
      setSearchTerm("")
    }
  }

  return (
    <>
      <div className='searchTextWrapper'>
        <h1 className='searchText'>what are you looking for?</h1>
      </div>
      <div className='search'>
        <input className='searchInput' placeholder='Search for a series...' type='text' value={searchData} onChange={handleInputChange} onKeyDown={handleKeyPress} />
        <button className='searchBtn' onClick={searchMedia}>
          Search
        </button>
      </div>
    </>
  )
}
export default SearchBar
