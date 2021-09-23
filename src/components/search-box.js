import React, { Component } from "react";

const Searchbox = ({ saerch, searchChange }) => {
  return (
    <div className="Searchbox">
      <input
        className="search"
        type="search"
        placeholder="pokemon name"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
