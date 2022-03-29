import React, {useEffect, useState} from "react";


function FeatureCharacter({characters}) {
    const [randomCharacters, setRandomCharacters] = useState([]);

  function fetchRandomCharacters() {
    fetch ('http://localhost:6001/characters')
    .then(resp => resp.json())
    .then(characterData => setRandomCharacters(characterData))
  }

  useEffect(fetchRandomCharacters, []);
    
    const randomIndex = Math.floor(Math.random() * randomCharacters.length);
    console.log(randomCharacters)
    console.log (randomIndex)
    const randomCharacter = randomCharacters[randomIndex];

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
            <span>
                <button>See More Info!</button>
            </span>           
            </li>}
        </div>
    );
}

export default FeatureCharacter;