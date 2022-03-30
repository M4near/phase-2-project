import React from "react";
import FavoritesCard from "./FavoritesCard";

function FavoritesList({characters, query, setQuery, setCharacters}) {

    console.log(characters)
    const renderFavorites = characters
    .map((character) => {
        if (character.favorite === true) {
            return  <FavoritesCard key={character.id} character={character} setCharacters={setCharacters} />
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
        <ul id="character-list">
            {renderFavorites}
        </ul>
    );
}

export default FavoritesList;