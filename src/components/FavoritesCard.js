import React from 'react'

function FavoritesCard({character}) {
  const {name, image, alterEgo, gif} = character

 

  return (
    <div>
    <li className="card">
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
            </div>  
            <div id='infoButtonContainer'>
                {/* <button className='button' id='infoButton' onClick={handleClick}>See More Info!</button> */}
            </div>
        </li>
      </div>
  )
}

export default FavoritesCard;