import React from "react";


function Navbar() {

    return (
        <header className="header">
            <h1 className="h1">Sailor Moon & Friends!</h1>
            <div id='homeButtonContainer'>
                <button className='button' id='home'>Home</button>
            </div>
            <div id='favoritesButtonContainer'>
                <button className='button' id='favorites'>Favorites</button>
            </div>
        </header>
    );    
}

export default Navbar;