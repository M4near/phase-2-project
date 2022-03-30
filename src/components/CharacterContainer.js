import React, {useState, useEffect} from "react";
import CharacterList from "./CharacterList";
import Search from "./Search";

function CharacterContainer() {
    const [query, setQuery] = useState("");
    const [characters, setCharacters] = useState([]);

    function fetchCharacters() {
        fetch ('http://localhost:6001/characters')
        .then(resp => resp.json())
        .then(characterData => setCharacters(characterData))
    }

    useEffect(fetchCharacters, []);
  
    
   
    return (
        <div id="character-container">     
                <Search query={query} setQuery={setQuery}/>  
            <div className="cards">
                <CharacterList query={query} setQuery={setQuery} characters={characters} setCharacters={setCharacters}/>
            </div>
        </div>
    );
}

export default CharacterContainer;