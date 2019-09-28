import React, { useState } from "react";
import PokemonFormSelector from "./PokemonFormSelector";
import PokemonApp from "./PokemonApp";
import PokemonIndex from "./PokemonIndex";

function SelectedPokemonComponent() {
  const [selectedPokemon, setSelectedPokemon] = useState(1);

  const selectedPokemonHandler = event => {
    const PokemonId = parseInt(event.target.value);
    setSelectedPokemon(PokemonId);
  };

  const clickNextHandler = () => {
    setSelectedPokemon(currentPokemon => {
      if (currentPokemon === PokemonIndex.length) return 1;
      else return currentPokemon + 1;
    });
  };

  const clickPreviousHandler = () => {
    setSelectedPokemon(currentPokemon => {
      if (currentPokemon === 1) return PokemonIndex.length;
      else return currentPokemon - 1;
    });
  };

  return (
    <React.Fragment>
      <PokemonFormSelector
        selectedPokemon={selectedPokemon}
        OnSelectedPokemon={selectedPokemonHandler}
      />
      <div className="button-container">
        <button className="buttons" onClick={clickPreviousHandler}>
          Previous
        </button>
        <button className="buttons" onClick={clickNextHandler}>
          Next
        </button>
      </div>

      <PokemonApp selectedPokemon={selectedPokemon} />
    </React.Fragment>
  );
}

export default SelectedPokemonComponent;
