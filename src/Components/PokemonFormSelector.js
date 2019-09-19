import React from "react";
import PokemonIndex from "./PokemonIndex";
function PokemonFormSelector(props) {
  return (
    <form className="form">
      <p>Please Select a Pokemon</p>
      <select
        style={{ margin: "auto" }}
        value={props.SelectedPokemon}
        onChange={props.OnSelectedPokemon}
      >
        {PokemonIndex.map(Pokemon => (
          <option key={Pokemon.id} value={Pokemon.id}>
            {Pokemon.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default PokemonFormSelector;
