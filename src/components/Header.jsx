import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <button
          className="toggle-mode"
          onClick={() => handleDarkMode((preState) => !preState)}
        >
          Toggle Mode
        </button>
      </div>
    </>
  );
};

export default Header;
