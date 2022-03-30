import React from "react";
import CharacterCard from "./CharacterCard";
import SelectedCharacterCard from "./SelectedCharacterCard";

function CharacterList({characters, query, setQuery, setCharacters}) {

    const renderCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(query.toLowerCase()))
    .map((character) => (
        <CharacterCard key={character.id} character={character} setCharacters={setCharacters} handleUpdateCharacter={handleUpdateCharacter}/> 
    ));

    function handleUpdateCharacter(updatedCharacterCard) {
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
      <div>
        <ul id="character-list">
            {renderCharacters}
        </ul>
        <SelectedCharacterCard characters={characters}/>
      </div>
    );
}

export default CharacterList;