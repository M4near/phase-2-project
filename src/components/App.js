import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import CharacterContainer from "./CharacterContainer";
import FeatureCharacter from "./FeatureCharacter";

function App() {  
  

  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
        <FeatureCharacter characters={characters}/>
        <CharacterContainer characters={characters} setCharacters={setCharacters}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;