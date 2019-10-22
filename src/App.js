import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Pokemon from "./components/Pokemon/Pokemon";
import pokemon from "./pokemon.json";
import './App.css';

class App extends React.Component {

 

  handleScore = () => {
    console.log("click")
    console.log(this.state.score)
    this.setState({ count: this.state.score + 1 });
    console.log(this.state.score)
  };

  


  render() {
    return (
      <Wrapper>
        <h1 className="title">Click These Pokemon</h1>
        <Pokemon
          name={pokemon[0].name}
          image={pokemon[0].image}
          onClick={this.handleScore}
        />
        <Pokemon
          name={pokemon[1].name}
          image={pokemon[1].image}
        />
        <Pokemon
          name={pokemon[2].name}
          image={pokemon[2].image}
        />
        <Pokemon
          name={pokemon[3].name}
          image={pokemon[3].image}
        />
        <Pokemon
          name={pokemon[4].name}
          image={pokemon[4].image}
        />
        <Pokemon
          name={pokemon[5].name}
          image={pokemon[5].image}
        />
        <Pokemon
          name={pokemon[6].name}
          image={pokemon[6].image}
        />
        <Pokemon
          name={pokemon[7].name}
          image={pokemon[7].image}
        />
        <Pokemon
          name={pokemon[8].name}
          image={pokemon[8].image}
        />
        <Pokemon
          name={pokemon[9].name}
          image={pokemon[9].image}
        />
        <Pokemon
          name={pokemon[10].name}
          image={pokemon[10].image}
        />
        <Pokemon
          name={pokemon[11].name}
          image={pokemon[11].image}
        />
      </Wrapper>
    );
  }
}

export default App;
