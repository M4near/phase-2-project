import React, {useEffect, useState} from "react";


function FeatureCharacter({characters}) {
    const [randomCharacters, setRandomCharacters] = useState([]);
    
    const randomIndex = Math.floor(Math.random() * characters.length);
    console.log(characters)
    console.log (randomIndex)
    const randomCharacter = characters[randomIndex];

    console.log(randomCharacter)
    
    return (
        <div id="feature-character">
            {!randomCharacter && <div>Loading...</div>}
            {randomCharacter && 
            <li className="card">
            <img src={randomCharacter.image} alt={randomCharacter.name} />
            <span>
                <h4>{randomCharacter.name}</h4>
            </span>
            <span>
                <h4>{randomCharacter.alterEgo}</h4>
            </span>            
            </li>}
        </div>
    );
}

export default FeatureCharacter;