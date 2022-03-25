import React, {useEffect, useState} from "react";


function FeatureCharacter() {
    const [randomCharacters, setRandomCharacters] = useState([]);

    function fetchRandomCharacters() {
        fetch ('http://localhost:6001/characters')
        .then(resp => resp.json())
        .then(characterData => setRandomCharacters(characterData))
    }

    useEffect(fetchRandomCharacters, []);
    
    
    const randomIndex = Math.floor(Math.random() * randomCharacters.length);
    const randomCharacter = randomCharacters[randomIndex];

    console.log(randomCharacter)
    
    // // function renderRandomCharacter(characters) {        
        
    // //     return randomCharacter
    // // }

    return (
        <div>
            {/* <li className="card">
            <img src={randomCharacter.image} alt={randomCharacter.name} />
            <span>
                <h4>{randomCharacter.name}</h4>
            </span>
            <span>
                <h4>{randomCharacter.alterEgo}</h4>
            </span>            
            </li> */}
        </div>
    );
}

export default FeatureCharacter;