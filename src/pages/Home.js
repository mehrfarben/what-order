import React, { useState, useEffect, useRef } from "react";
import MediaCard from "../components/MediaCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [trendingData, setTrendingData] = useState([]);
  const mediaRef = useRef(null);

  const handleScroll = () => {
    if (mediaRef.current) {
      mediaRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getTrendingData = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
      console.error("API key is missing");
      return;
    }

    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const data = await response.json();
      if (!data || !data.results) {
        throw new Error("Invalid API response");
      }

      setTrendingData(data.results);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  useEffect(() => {
    getTrendingData();
  }, []);

  return (
    <>
      <div className="bg-Owhite flex flex-col items-center pb-20 overflow-x-hidden">
        <div className="flex flex-col h-screen ">
          <SearchBar handleScroll={handleScroll}/>
        </div>
        <div className="pt-8 lg:mt-32" ref={mediaRef}>
          <div className="flex flex-col items-start w-fit mt-10" >
            {trendingData?.length > 0 ? (
              <div className="flex justify-center flex-wrap" >
                <h1 className="text-start ZT pl-4 text-5xl lg:text-6xl text-Oblue m-4 w-[372px]">popular today→</h1>
                {trendingData.map((trending) => (
                  <MediaCard key={trending.id} movie={trending}  />
                ))}
                <div className='absolute bottom-0 left-0 select-none py-2 w-full bg-Oblue text-Owhite text-xs text-center'>What Order 2024 ©</div>
              </div>
            ) : (
              <div className="empty">
                <h3>Couldn't retrieve data.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
