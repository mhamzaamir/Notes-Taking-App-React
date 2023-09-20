import React from "react";
import SearchIcon from "../assets/search.svg";

const SearchNote = ({ handleSearchNote }) => {
  return (
    <>
      <div className="search-bar">
        <img src={SearchIcon} alt="Search Icon" id="search-icon" />
        <input
          type="text"
          placeholder="Search notes"
          id="search"
          onChange={(event) => handleSearchNote(event.target.value)}
        />
      </div>
    </>
  );
};

export default SearchNote;
