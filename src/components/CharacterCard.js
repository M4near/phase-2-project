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
            <button onClick={handleFavorite}>{buttonText}</button>
            <img src={image} alt={name} />
            <span>
                <h4>{name}</h4>
            </span>
            <span>
                <h4>{alterEgo}</h4>
            </span>  
            <span>
                <button onClick={handleClick}>See More Info!</button>
            </span>
            {/* <img id="gif" src={gif}/> */}
        </li>
    );
}

export default CharacterCard;