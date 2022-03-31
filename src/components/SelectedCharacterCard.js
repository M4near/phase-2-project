import React from "react";

function SelectedCharacterCard({selectedCharacter}) {
    const {name, image, alterEgo, description, firstEpisode, gif} = selectedCharacter

    console.log("Selected CHaracter Component")

    return (
        <div className="selectedCard">
            <div id='selectedCharacterImage'>
                <img src={image} alt={name} />
            </div>
            <div id='selectedCharacterDetails'>
                <h2 id="selectedName">{name}</h2>
                <h3>Alter Ego: {alterEgo}</h3>
                <h4>{description}</h4>
                <h5>First Episode: {firstEpisode}</h5>
                <img id="characterGif" src={gif} alt="character gif"/>
            </div>
        </div>
    );
}

export default SelectedCharacterCard;