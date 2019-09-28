import React, { useState } from "react";

function Cardbuilder(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="cardStyles">
      <h1 className="PokemonName">{props.name}</h1>
      <img
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={hovered ? "image-isHovered" : "image"}
        src={props.image}
        alt="error"
      />
      <p>Category = {props.category}</p>
      <p>Weight = {props.weight}</p>
      <p>Abilities = {props.abilities}</p>
    </div>
  );
}
export default Cardbuilder;
