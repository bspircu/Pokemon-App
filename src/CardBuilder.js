import React from "react"


class Cardbuilder extends React.Component{
render () {
    return(
        <div className = "cardStyles">
            <h1 className = "pokemonName">{this.props.name}</h1>
            <img src= {this.props.image} alt="error" />
            <p>Categories = {this.props.category}</p>
            <p>Weight = {this.props.weight}</p>
            <p>Abilities = {this.props.abilities}</p>
        </div>
    )
}
}
export default Cardbuilder