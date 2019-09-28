import React, { useState, useEffect } from "react";
import SelectedPokemonComponent from "./SelectedPokemonComponent";

function AppLoad() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1 className="loading-message"> Loading.... </h1>
      ) : (
        <SelectedPokemonComponent />
      )}
    </div>
  );
}

export default AppLoad;
