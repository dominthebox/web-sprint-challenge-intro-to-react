import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from "./components/SWData";
import styled from "styled-components";
import Character from "./components/Character";

const StyledHead = styled.h1`
  color:darkgray;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      setCharacters(res.data);
      console.log(res.data);
    })
    .catch(error => {
      console.log('Houston, we have a problem', error);
    })
  }, []);

  return (
    <div className="App">
      <StyledHead className="Header">Characters</StyledHead>
      {characters.map(character => {
        return <Character key={character.index} characters={character} />
      })}
    </div>
  );
}

export default App;
