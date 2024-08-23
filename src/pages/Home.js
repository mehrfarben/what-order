import React, { useState, useEffect } from "react";
import MediaCard from "../components/MediaCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [trendingData, setTrendingData] = useState([]);

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
      <div className="bg-Owhite overflow-y-scroll overflow-x-hidden flex flex-col h-screen items-center pb-20 snap-y snap-mandatory lg:snap-none ">
        <div className="flex flex-col h-screen snap-start">
          <SearchBar />
        </div>
        <div className="mt-10 ">
          <div className="flex flex-col items-start w-fit min-h-screen snap-start">
            {trendingData?.length > 0 ? (
              <div className="flex justify-center flex-wrap mt-20 mb-10">
                <h1 className="text-start ZT text-6xl text-Oblue m-4 w-[372px]">popular today→</h1>
                {trendingData.map((trending) => (
                  <MediaCard key={trending.id} movie={trending} />
                ))}
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
