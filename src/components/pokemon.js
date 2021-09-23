import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PokeCard = ({ name, onClickDetails, url }) => {
  return (
    <div className="card col-md-4">
      <img
        className="card-img-top"
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        height="200px"
        alt="pokemoncard"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"></p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => {
            onClickDetails(name, url);
          }}
        >
          {" "}
          Details
        </a>
      </div>
    </div>
  );
};

export default PokeCard;
