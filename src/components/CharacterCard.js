import React from "react";

function CharacterCard({character}) {
    const {id, name, image, alterEgo} = character

    function handleClick(e){
        
    }


    return (
        <li className="card">
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
        </li>
    );
}

export default CharacterCard;