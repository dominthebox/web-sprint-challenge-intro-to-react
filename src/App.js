import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BASE_URL, API_KEY } from "./components/SWData";
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

  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);



  return (
    <div className="App">
      <StyledHead className="Header">Characters</StyledHead>
      {data.map(dat => {
      return <Character key={data.index} data={data} />})}
    </div>
  );
}

export default App;
