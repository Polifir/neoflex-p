import React from "react";
import "./Search.sass";
import iconSearch from "../../../img/iconSearch.svg";

export const Search = () => {
  return (
    <div className="search">
      <input
        className="search__panel"
        type="search"
        id="site-search"
        name="q"
        placeholder="Search"
      ></input>
      <button className="btn search__btn">
        <img src={iconSearch} alt="search" />
      </button>
    </div>
  );
};
