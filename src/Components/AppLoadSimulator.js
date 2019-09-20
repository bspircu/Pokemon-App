import React from "react";
import SelectedPokemonComponent from "./SelectedPokemonComponent";

class AppLoad extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1 className="loading-message"> Loading.... </h1>
        ) : (
          <SelectedPokemonComponent />
        )}
      </div>
    );
  }
}

export default AppLoad;
