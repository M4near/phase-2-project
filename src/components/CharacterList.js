import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({characters}) {

    console.log(characters)
    const renderCharacters = characters.map((character) => (
        <CharacterCard key={character.id} character={character}/>
    ))

    return (
        <div>
            {renderCharacters}
        </div>
    );
}

export default CharacterList;