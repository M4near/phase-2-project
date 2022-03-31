import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import CharacterContainer from "./CharacterContainer";
import FeatureCharacter from "./FeatureCharacter";
import FavoritesList from "./FavoritesList";
import CharacterList from "./CharacterList";
import SelectedCharacterCard from "./SelectedCharacterCard";

function App() {  
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");

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
          <FeatureCharacter characters={characters} setCharacters={setCharacters}/>
          <CharacterContainer  characters={characters} setCharacters={setCharacters} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>
        </Route>
        <Route path="/selectedCharacter">
          <SelectedCharacterCard characters={characters} setCharacters={setCharacters} selectedCharacter={selectedCharacter}/>
        </Route>
        <Route  path="/favorites"> 
          <FavoritesList characters={characters} setCharacters={setCharacters} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;