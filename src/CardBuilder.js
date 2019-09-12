import React from "react"


class Cardbuilder extends React.Component{
    constructor(){
        super()
        this.state = {
            hovered: false
        }
    }
    handleHover = (isHovered) => {
        this.setState({ hovered: isHovered})
    }

render () {
    return(
        <div className = "cardStyles">
            <h1 className = "PokemonName">{this.props.name}</h1>
            <img 
                onMouseEnter = {() => this.handleHover(true)}
                onMouseLeave = {() => this.handleHover(false)}
                style = {{border: this.state.hovered ? "ridge" : null}}
                src= {this.props.image} alt="error" />
            <p>Category = {this.props.category}</p>
            <p>Weight = {this.props.weight}</p>
            <p>Abilities = {this.props.abilities}</p>
        </div>
    )
}
}
export default Cardbuilder