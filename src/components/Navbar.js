import React from "react";
import {Link} from "react-router-dom";


function Navbar() {

    return (
        <header className="header">
            <h1 className="h1">Sailor Moon & Friends!</h1>
            <div id='homeButtonContainer'>
            <Link to="/"><button className='button' id='home'>Home</button></Link>
            </div>
            <div id='favoritesButtonContainer'>
            <Link to="/favorites"><button className='button' id='favorites' >Favorites</button></Link>
            </div>
            <div id='rickRollContainer'>
            <a href="https://www.youtube.com/watch?v=kgo-hVfmnfs" target="_blank"><button className='button' id='rickRoll' >Free $5 gift card!</button></a>
            </div>
            <div id='characterCreatorContainer'>
            <a href="https://www.dolldivine.com/sailor-moon-character-creator.php" target="_blank"><button className='button' id='creator' >Character Creator</button></a>
            </div>
        </header>
    );    
}

export default Navbar;