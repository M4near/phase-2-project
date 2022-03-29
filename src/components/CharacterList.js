import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({characters, query, setQuery}) {

    console.log(characters)
    const renderCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(query.toLowerCase()))
    .map((character) => (
        <CharacterCard key={character.id} character={character}/>
    ));

    return (
        <div id="character-list">
            {renderCharacters}
        </div>
    );
}

export default CharacterList;