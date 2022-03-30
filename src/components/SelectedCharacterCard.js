import React, {useState, useEffect} from "react";

function SelectedCharacterCard({selectedCharacter}) {
    const {id, name, image, alterEgo, gif} = selectedCharacter

    return (
        <li className="card">
            <img src={image} alt={name} />
            <span>
                <h4>{name}</h4>
            </span>
            <span>
                <h4>{alterEgo}</h4>
            </span>  
            
        </li>
    );
}

export default SelectedCharacterCard;