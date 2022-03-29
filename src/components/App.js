import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import CharacterContainer from "./CharacterContainer";
import FeatureCharacter from "./FeatureCharacter";

function App() {  
  const [characters, setCharacters] = useState([]);

  function fetchCharacters() {
    fetch ('http://localhost:6001/characters')
    .then(resp => resp.json())
    .then(characterData => setCharacters(characterData))
  }

  useEffect(fetchCharacters, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
        <FeatureCharacter characters={characters}/>
        <CharacterContainer characters={characters}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;