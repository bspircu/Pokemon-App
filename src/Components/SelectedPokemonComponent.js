import React from "react";
import PokemonFormSelector from "./PokemonFormSelector";
import PokemonApp from "./PokemonApp";

class SelectedPokemonComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPokemon: 1
    };
  }
  SelectedPokemonHandler = event => {
    const PokemonId = parseInt(event.target.value);
    this.setState({ selectedPokemon: PokemonId });
  };

  render() {
    return (
      <React.Fragment>
        <PokemonFormSelector
          selectedPokemon={this.state.selectedPokemon}
          OnSelectedPokemon={this.SelectedPokemonHandler}
        />

        <PokemonApp selectedPokemon={this.state.selectedPokemon} />
      </React.Fragment>
    );
  }
}

export default SelectedPokemonComponent;
