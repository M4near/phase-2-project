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
        <div id="featureCharacterContainer">
            {!randomCharacter && <div>Loading...</div>}
            {randomCharacter && 
            <li id='featureCharacter' className="card">
            <img src={randomCharacter.image} alt={randomCharacter.name} />
            <span>
                <h4>{randomCharacter.name}</h4>
            </span> 
            <div>
                {/* <button id='featureInfoButton' className='button'>See More Info!</button> */}
            </div>           
            </li>}
        </div>
    );
}

export default FeatureCharacter;