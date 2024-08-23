import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import WatchOut from "../assets/watchout.svg"
import WatchOutMobile from "../assets/watchout_mobile.svg"
import Moon from "../assets/moon.png"
import Ok from "../assets/ok.svg"

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
      if (!data.results) {
        console.error("No search results found")
        return
      }

      navigate(`/search/${searchData}`, { state: { searchResults: data.results, searchTerm: searchData} })
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
        <img className="w-[100vw] mt-5 hidden sm:block" src={WatchOut} alt="" />
        <img className="w-[100vw] mt-5 block sm:hidden" src={WatchOutMobile} alt="" />
        </section>
        <section className="w-11/12">
        <p className="ZT text-Oblue xs:text-2xl sm:text-3xl lg:text-5xl text-center">Welcome to What Order - your ultimate guide to navigating the world of movies and tv series! Whether you're diving into a cinematic universe for the first time or revisiting a beloved franchise, our platform helps you find the perfect viewing sequence. Say goodbye to confusion and spoilers - What Order ensures you enjoy every story in the best possible way.</p>
        </section>
      </main>
      <main className="relative w-full  h-screen  justify-evenly z-0">
        <section className="overflow-hidden">
        <img className="z-[-1] opacity-70 w-[50%] lg:w-[20%] absolute -bottom-5 right-0 lg:left-0" src={Moon} alt="Moon from the movie A Trip to the Moon" />
        </section>
        <section className="w-full flex justify-center items-center mt-[5vw]">
          <input className='bg-transparent w-3/5 lg:w-2/5 text-lg lg:text-3xl border-b border-Oblue text-Oblue focus: outline-none ABook-Italic placeholder:text-Oblue' placeholder='explore now' type='text' value={searchData} onChange={handleInputChange} onKeyDown={handleKeyPress} />
            <button className='px-4 lg:px-8 py-2 lg:py-3 bg-Oblue rounded-full lg:text-3xl text-Owhite ACondensed hover:px-10 ' onClick={searchMedia}>
              search
            </button>
        </section>
        <section className="flex flex-col lg:hidden items-center mt-10 animate-updown">
          <p className="ZT-Italic text-Oblue text-xl ">swipe to explore more</p>
          <img className="size-8 rotate-90 mt-1" src={Ok} alt="" />
        </section>
        </main>
    </>
  )
}
export default SearchBar
