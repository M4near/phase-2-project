import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import CharacterContainer from "./CharacterContainer";
import FeatureCharacter from "./FeatureCharacter";
import FavoritesList from "./FavoritesCard";
import CharacterList from "./CharacterList";
import SelectedCharacterCard from "./SelectedCharacterCard";

function App() {  
  

  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
          <FeatureCharacter />
          <CharacterContainer  />
        </Route>
        <Route path="/selectedCharacter" element={<SelectedCharacterCard/>}/>
        <Route  path="/favorites" element={<FavoritesList />}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;