import React from "react";
import PokemonFormSelector from "./PokemonFormSelector";
import PokemonApp from "./PokemonApp";
import PokemonIndex from "./PokemonIndex";

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

  clickNextHandler = () => {
    this.setState(prevState => {
      if (prevState.selectedPokemon === PokemonIndex.length)
        return { selectedPokemon: 1 };
      else return { selectedPokemon: prevState.selectedPokemon + 1 };
    });
  };

  clickPreviousHandler = () => {
    this.setState(prevState => {
      if (prevState.selectedPokemon === 1)
        return { selectedPokemon: PokemonIndex.length };
      else return { selectedPokemon: prevState.selectedPokemon - 1 };
    });
  };

  render() {
    return (
      <React.Fragment>
        <PokemonFormSelector
          selectedPokemon={this.state.selectedPokemon}
          OnSelectedPokemon={this.SelectedPokemonHandler}
        />
        <div className="button-container">
          <button className="buttons" onClick={this.clickPreviousHandler}>
            Previous
          </button>
          <button className="buttons" onClick={this.clickNextHandler}>
            Next
          </button>
        </div>

        <PokemonApp selectedPokemon={this.state.selectedPokemon} />
      </React.Fragment>
    );
  }
}

export default SelectedPokemonComponent;
