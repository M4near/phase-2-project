import React, {useState} from "react";

function CharacterCard({character, setCharacters, handleUpdateCharacter}) {
    const {id, name, image, alterEgo, gif} = character
    const [favorite, setFavorite] = useState(false);

    function handleClick(e){
        
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
                <button className='button' id='infoButton' onClick={handleClick}>See More Info!</button>
            </div>
            {/* <img id="gif" src={gif}/> */}
        </li>
    );
}

export default CharacterCard;