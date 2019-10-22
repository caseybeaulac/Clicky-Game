import React from "react";
import "./Style.css";

class Pokemon extends React.Component {

  state = {
    score: 0,
    pokemon: [
      {
        "id": 1,
        "name": "Pikachu",
        "image": "https://secure.img1-fg.wfcdn.com/im/62945217/resize-h700-p1-w700%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg",
        "clickStatus": 0
      },
      {
        "id": 2,
        "name": "Charmander",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "clickStatus": 0
      },
      {
        "id": 3,
        "name": "Squirtle",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        "clickStatus": 0
      },
      {
        "id": 4,
        "name": "Bulbasaur",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "clickStatus": 0
      },
      {
        "id": 5,
        "name": "Eevee",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
        "clickStatus": 0
      },
      {
        "id": 6,
        "name": "Jigglypuff",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
        "clickStatus": 0
      },
      {
        "id": 7,
        "name": "Rattata",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        "clickStatus": 0
      },
      {
        "id": 8,
        "name": "Butterfree",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        "clickStatus": 0
      },
      {
        "id": 9,
        "name": "Clefairy",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
        "clickStatus": 0
      },
      {
        "id": 10,
        "name": "Magikarp",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
        "clickStatus": 0
      },
      {
        "id": 11,
        "name": "Geodude",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
        "clickStatus": 0

      },
      {
        "id": 12,
        "name": "Staryu",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
        "clickStatus": 0
      }

    ]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleScore = () => {
    console.log("Click");
    this.setState({ score: this.state.score + 1 });
   // this.setState({ pokemon: this.state.pokemon.clickStatus + 1 });
    console.log(this.state.score)
    console.log(this.state.pokemon.id)

  }
  render() {
    return (
      <div>
        {this.state.pokemon.map(pokemon =>
          <div className="img-container" onClick={this.handleScore}>
            <img alt={pokemon.name} src={pokemon.image} />
          </div>
        )}
      </div>
    );
  }
}

export default Pokemon;