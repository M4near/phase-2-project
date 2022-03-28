import React, {useState, useEffect} from "react";
import CharacterList from "./CharacterList";
import FeatureCharacter from "./FeatureCharacter"

function CharacterContainer() {
    
    const [characters, setCharacters] = useState([]);

    function fetchCharacters() {
        fetch ('http://localhost:6001/characters')
        .then(resp => resp.json())
        .then(characterData => setCharacters(characterData))
    }

    
    useEffect(fetchCharacters, []);
    


    return (
        <div id="character-container">
                <FeatureCharacter characters={characters}/>        
            <ul className="cards">
                <CharacterList characters={characters}/>
            </ul>
        </div>
    );
}

export default CharacterContainer;