import React from "react";

function Search({query, setQuery}) {
  
  return (
    <div className="searchbar" >
      <input
        type="text"
        id="search"
        placeholder="search for your sailor"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;