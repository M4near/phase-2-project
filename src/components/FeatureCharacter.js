import React, {useEffect, useState} from "react";


function FeatureCharacter({characters}) {
    const [randomCharacters, setRandomCharacters] = useState([]);

    function fetchRandomCharacters() {
        fetch ('http://localhost:6001/characters')
        .then(resp => resp.json())
        .then(characterData => setRandomCharacters(characterData))
    }

    useEffect(fetchRandomCharacters, []);

        const randomIndex = Math.floor(Math.random() * characters.length);
        console.log(characters)
        console.log (randomIndex)
        const randomCharacter = randomCharacters[randomIndex];
        
    
    
    return (
        <div id="featureCharacterContainer">
            <img id="left-gif" src='https://www.icegif.com/wp-content/uploads/haters-gonna-hate-sailor-moon.gif' alt='Sailor Moon sparkly gif'/>
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
            <img id="left-gif" src='https://www.icegif.com/wp-content/uploads/haters-gonna-hate-sailor-moon.gif' alt='Sailor Moon sparkly gif'/>
        </div>
    );
}

export default FeatureCharacter;