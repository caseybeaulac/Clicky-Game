import React from "react";
import pokemon from "../../pokemon.json"
import "./Style.css";

class Pokemon extends React.Component {

  state = {
    score: 0,
    record: 0,
    pokemon: pokemon
  };

  componentDidMount(){
    this.setState({pokemon : this.shuffle(this.state.pokemon)});
  }

  shuffle = pokemon => {
    let newPokemon = pokemon.sort(function(a, b){return 0.5 - Math.random()});
    return newPokemon;
  }

  reset = pokemon => {
    const resetPokemon = pokemon.map(data => ({...data, clickStatus: false}));
    return this.shuffle(resetPokemon)
  }
  
  goodGuess = newPokemon => {
    let currentScore = this.state.score;
    currentScore++;
    let newRecord = Math.max(currentScore, this.state.record);

    this.setState({
      pokemon : this.shuffle(newPokemon),
      score : currentScore,
      record: newRecord,
    })
  }

  badGuess = newPokemon => {
    this.setState({
      pokemon: this.reset(newPokemon),
      score: 0
    })
  }
  
  handleScore = (id) => {

    let correctGuess = false;

    const newPokemon = this.state.pokemon.map(data => {
      if(data.id===id){
        if (!data.clickStatus){
          data.clickStatus = true;
          correctGuess = true;
        }
      }
      return data;
    });
    correctGuess ? this.goodGuess(newPokemon) : this.badGuess(newPokemon);
   
    // console.log("Click");
    // this.setState({ score: this.state.score + 1 });
   
  }

  // removePokemon = id => {
  //   const pokemonArr = this.state.pokemon.filter(data => data.id !== id);
  //   this.setState({ pokemonArr });
  // }

  render() {
    return (
      <div className="">Score: {this.state.score} Top Score: {this.state.record}
      <div className="row">
        {this.state.pokemon.map(data =>
          <div className="col-lg-3 img-container" id={data.id} onClick={() => this.handleScore(data.id)}>
            <img alt={data.name} src={data.image} />
          </div>
        )}
      </div>
      </div>
    );
  }
}

export default Pokemon;