import React from "react";
import { useLocation } from "react-router-dom";
import MediaCard from "../components/MediaCard";

const Search = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults ?? [];
  const searchTerm = location.state?.searchTerm ?? "";

  return (
    <>
      <div className="pt-32">
        {searchResults.length > 0 ? (
          <div className="w-full flex justify-center flex-wrap">
            <h1 className="text-start ZT text-6xl text-Oblue m-4 w-[372px]">Search results for "{searchTerm}"→</h1>
            {searchResults.map((result) => (
              <MediaCard key={result.id} movie={result} />
            ))}
          </div>
        ) : (
          <p>No search results found.</p>
        )}
      </div>
    </>
  );
};

export default Search;
