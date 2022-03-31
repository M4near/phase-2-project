import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import FavoritesCard from "./FavoritesCard";

function FavoritesList({characters, setCharacters, selectedCharacter, setSelectedCharacter}) {
    console.log("Trying something")

    console.log("here", characters)
    const renderFavorites = characters
    .map((character) => {
        if (character.favorite === true) {
            return  <FavoritesCard key={character.id} character={character} setCharacters={setCharacters} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>
        } else {
            return null
        }
       
    });
    // handleUpdateCharacter={handleUpdateCharacter}
    // function handleUpdateCharacter(updatedCharacterCard) {
    //     console.log("Favorited", updatedCharacterCard)
    //     const updatedCharacterCards = characters.map((character) => {
    //         if (character.id === updatedCharacterCard.id) {
    //           return updatedCharacterCard;
    //         } else {
    //           return character;
    //         }
    //       });
    //       setCharacters(updatedCharacterCards);
    // }

    return (
        <div>
        <ul id="character-list">
            {renderFavorites}
        </ul>
        </div>
    );
}

export default FavoritesList;