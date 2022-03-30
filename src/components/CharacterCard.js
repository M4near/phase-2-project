import React, {useState} from "react";
import {Link} from "react-router-dom";

function CharacterCard({character, setCharacters, handleUpdateCharacter, setSelectedCharacter}) {
    const {id, name, image, alterEgo, gif} = character
    
    function handleClick(event){
      const clickedCharacter = character;
      setSelectedCharacter(clickedCharacter)
    }

    function handleFavorite() {
       console.log("clicked item", character)
       fetch(`http://localhost:6001/characters/${character.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          favorite: !character.favorite,
        }),
      })
        .then((r) => r.json())
        .then((updatedItem) => handleUpdateCharacter(updatedItem));
    }

    const buttonText = character.favorite ? "★" : "☆"

    return (
        <li className="card">
            <button className='button' id='favorite-button' onClick={handleFavorite}>{buttonText}</button>
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
            </div>  
            <div id='infoButtonContainer'>
                <button className='button' id='infoButton' onClick={handleClick}><Link to="/selectedCharacter">See More Info!</Link></button>
            </div>
            {/* <img id="gif" src={gif}/> */}
        </li>
    );
}

export default CharacterCard;