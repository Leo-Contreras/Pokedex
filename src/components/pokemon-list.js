import React from "react";
import PokeCard from "./pokemon";

const PokemonList = ({ pokemons, onClickDetails }) => {
  return (
    <div className="col-md-12">
      <h3>Pokemon list</h3>
      <div className="container">
        <div className="row">
          {pokemons.map(({ name, url }) => {
            return (
              <PokeCard name={name} onClickDetails={onClickDetails} url={url} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
