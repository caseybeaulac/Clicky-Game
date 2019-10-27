import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Pokemon from "./components/Pokemon/Pokemon";
//import pokemon from "../pokemon.json";
import './App.css';

class App extends React.Component {


  render() {
    return (
      <Wrapper>
        <h1 className="title">Click These Pokemon</h1>
        <Pokemon />
      </Wrapper>
    );
  }
}

export default App;
