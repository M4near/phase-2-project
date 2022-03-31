import React from 'react'
import {Route, Link} from "react-router-dom";
import SelectedCharacterCard from "./SelectedCharacterCard";

function FavoritesCard({character, selectedCharacter, setSelectedCharacter}) {
  const {name, image, alterEgo, gif} = character

  function handleClick(event){
    const clickedCharacter = character;
    setSelectedCharacter(clickedCharacter)
  }

  return (
    <div>
    <li className="card">
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
            </div>  
            <div id='infoButtonContainer'>
            <Route path="/selectedCharacter">
                <SelectedCharacterCard selectedCharacter={selectedCharacter}/>
            </Route>
            <Link to="/selectedCharacter"><button className='button' id='infoButton' onClick={handleClick}>See More Info!</button></Link>
            </div>
        </li>
      </div>
  )
}

export default FavoritesCard;