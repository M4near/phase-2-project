import React, {useState, useEffect} from "react";
import CharacterList from "./CharacterList";
import Search from "./Search";
import FavoritesList from "./FavoritesList";
import SelectedCharacterCard from "./SelectedCharacterCard";

function CharacterContainer({characters, setCharacters, selectedCharacter, setSelectedCharacter}) {
    const [query, setQuery] = useState("");
    // const [characters, setCharacters] = useState([]);

    // function fetchCharacters() {
    //     fetch ('http://localhost:6001/characters')
    //     .then(resp => resp.json())
    //     .then(characterData => setCharacters(characterData))
    // }

    // useEffect(fetchCharacters, []);
  
    
   
    return (
        <div id="character-container">     
                <Search query={query} setQuery={setQuery}/>  
            <div className="cards">
                <CharacterList query={query} setQuery={setQuery} characters={characters} setCharacters={setCharacters} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>
            </div>
        </div>
    );
}

export default CharacterContainer;