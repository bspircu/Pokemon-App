import React from "react";
import CardBuilder from "./CardBuilder";
import PokemonIndex from "./PokemonIndex";

function PokemonApp() {
  return PokemonIndex.map(Pokemon => (
    <CardBuilder key={Pokemon.id} {...Pokemon} />
  ));
}

export default PokemonApp;
