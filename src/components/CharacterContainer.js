import React, {useState, useEffect} from "react";
import CharacterList from "./CharacterList";
import Search from "./Search";

function CharacterContainer({characters}) {
    
    const [query, setQuery] = useState("");
  
    
   
    return (
        <div id="character-container">     
                <Search query={query} setQuery={setQuery}/>  
            <ul className="cards">
                <CharacterList query={query} setQuery={setQuery} characters={characters}/>
            </ul>
        </div>
    );
}

export default CharacterContainer;