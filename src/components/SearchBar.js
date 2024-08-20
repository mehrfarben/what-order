import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import WatchOut from "../assets/watchout.svg"
import Moon from "../assets/moon.png"

const SearchBar = () => {
  const [searchData, setSearchData] = useState("")
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
    }
  }

  return (
    <>
      <main className='mt-20 w-full flex items-center flex-col z-10'>
        <section>
        <img className="w-[100vw]" src={WatchOut} alt="" />
        </section>
        <section className="w-11/12">
        <p className="ZT text-Oblue xs:text-2xl sm:text-3xl lg:text-5xl ">Welcome to What Order - your ultimate guide to navigating the world of movies and tv series! Whether you're diving into a cinematic universe for the first time or revisiting a beloved franchise, our platform helps you find the perfect viewing sequence. Say goodbye to confusion and spoilers - What Order ensures you enjoy every story in the best possible way.</p>
        </section>
      </main>
      <main className="flex w-full justify-evenly h-full z-0">
        <img className="z-[-1] left-5 base:relative xl:absolute lg:bottom-0 w-[23%]" src={Moon} alt="" />
        
        <section className="flex items-center md:w-4/5 xl:w-1/3 mt-0 lg:mt-20 lg:ml-20">
          <input className='bg-transparent w-full text-3xl border-b border-Oblue text-Oblue focus: outline-none ABook-Italic' placeholder='explore now' type='text' value={searchData} onChange={handleInputChange} onKeyDown={handleKeyPress} />
            <button className='px-8 py-3 bg-Oblue rounded-full text-3xl text-Owhite ACondensed hover:px-10' onClick={searchMedia}>
              search
            </button>
        </section>
        </main>
    </>
  )
}
export default SearchBar
