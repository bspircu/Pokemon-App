import React from"react"
import PokemonApp from "./PokemonApp"

class AppLoad extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 4000)
    }
    render(){
        return(
            <div>
                {this.state.isLoading ?
                 <h1 style={{textAlign:"center"}}> Loading....  </h1> : <PokemonApp /> }
            </div>
        )
    }
}



export default AppLoad