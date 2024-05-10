import React from "react"
import { useLocation } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import { Link } from "react-router-dom"
import Fallback from "../assets/fallback.png"

const Search = () => {
  const location = useLocation()
  const searchResults = location.state?.searchResults ?? []
  const imgUrl = "https://image.tmdb.org/t/p/w300/"

  return (
    <>
      <div className='homeApp'>
        <div className='searchApp'>
          <SearchBar />
        </div>
        <div className='space'>
          <div className='container'>
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Link key={result.id} to={`/${result.media_type}/${result.id}`}>
                  <div className='movie'>
                    <div></div>
                    {result.poster_path ? (
                      <div>
                        <img src={`${imgUrl}${result.poster_path}`} alt={result.title || result.name} />
                      </div>
                    ) : (
                      <div>
                        <img src={Fallback} alt={result.title || result.name} />
                      </div>
                    )}
                    <div>
                      <span>{result.media_type === "tv" ? `${result.media_type} show` : result.media_type}</span>
                      <h3>{result.title || result.name}</h3>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No search results found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
