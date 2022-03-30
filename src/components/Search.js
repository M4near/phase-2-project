import React from "react";

function Search({query, setQuery}) {
  
  return (
    <div className="searchbar" >
      <input
        type="text"
        className="search"
        id="search"
        placeholder="search characters"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;