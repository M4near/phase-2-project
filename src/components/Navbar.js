import React from "react";
import {Link} from "react-router-dom";


function Navbar() {

    return (
        <header className="header">
            <h1 className="h1">Sailor Moon & Friends!</h1>
            <div id='homeButtonContainer'>
                <button className='button' id='home'><Link to="/">Home</Link></button>
            </div>
            <div id='favoritesButtonContainer'>
                <button className='button' id='favorites' ><Link to="/favorites">Favorites</Link></button>
            </div>
        </header>
    );    
}

export default Navbar;