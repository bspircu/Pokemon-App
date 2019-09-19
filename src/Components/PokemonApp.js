import React from "react";
import CardBuilder from "./CardBuilder";
import PokemonIndex from "./PokemonIndex";

function PokemonApp(props) {
  const foundPokemon = PokemonIndex.find(pokemon => {
    return pokemon.id === props.selectedPokemon;
  });
  return <CardBuilder {...foundPokemon} />;
}

export default PokemonApp;
