import React from "react"
import CardBuilder from "./CardBuilder"
import PokemonIndex from "./PokemonIndex"

function PokemonApp(){
    const BuildCards = PokemonIndex.map(Pokemon => 
    <CardBuilder 
    key = {Pokemon.id}
    {...Pokemon}/>)
    return (
        <div>
            {BuildCards}
        </div>
    )
}

export default PokemonApp