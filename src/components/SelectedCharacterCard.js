import React from "react";

function SelectedCharacterCard({character}) {
    const {id, name, image, alterEgo} = character

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