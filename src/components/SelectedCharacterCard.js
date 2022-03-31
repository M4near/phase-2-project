import React, {useState, useEffect} from "react";

function SelectedCharacterCard({selectedCharacter}) {
    const {id, name, image, alterEgo, description, firstEpisode,gif} = selectedCharacter

    console.log("Selected CHaracter Component")

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
                <h4>{description}</h4>
            </span>  
            <span>
                <h4>{firstEpisode}</h4>
            </span> 
            <span>
                <img src={gif}/>
            </span> 
            
        </li>
    );
}

export default SelectedCharacterCard;