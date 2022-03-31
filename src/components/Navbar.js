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
        </header>
    );    
}

export default Navbar;