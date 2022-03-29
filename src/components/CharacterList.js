import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({characters, query, setQuery, setCharacters}) {

    console.log(characters)
    const renderCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(query.toLowerCase()))
    .map((character) => (
        <CharacterCard key={character.id} character={character} setCharacters={setCharacters} handleUpdateCharacter={handleUpdateCharacter}/>
    ));

    function handleUpdateCharacter(updatedCharacterCard) {
        console.log("Favorited", updatedCharacterCard)
        const updatedCharacterCards = characters.map((character) => {
            if (character.id === updatedCharacterCard.id) {
              return updatedCharacterCard;
            } else {
              return character;
            }
          });
          setCharacters(updatedCharacterCards);
    }

    return (
        <div id="character-list">
            {renderCharacters}
        </div>
    );
}

export default CharacterList;