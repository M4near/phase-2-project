import React, {useState} from "react";
import CharacterCard from "./CharacterCard";
import SelectedCharacterCard from "./SelectedCharacterCard";
import {Route, Switch} from "react-router-dom";

function CharacterList({characters, query, setQuery, setCharacters, selectedCharacter, setSelectedCharacter}) {

    const renderCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(query.toLowerCase()))
    .map((character) => (
        <CharacterCard key={character.id} character={character} setCharacters={setCharacters} handleUpdateCharacter={handleUpdateCharacter} selectedCharacter={selectedCharacter}setSelectedCharacter={setSelectedCharacter}/> 
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
        {/* <Route path="/selectedCharacter">
          <SelectedCharacterCard selectedCharacter={selectedCharacter}/>
        </Route> */}
      </div>
    );
}

export default CharacterList;