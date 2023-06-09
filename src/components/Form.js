

import React, { useState } from "react";
import "../styles/Form.css";

const Form = ({ history, handleSubmit }) => {
  const [searchEntry, setSearchEntry] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchEntry.trim();
    if (searchTerm) {
      handleSubmit(searchTerm);
      history.push(`/${searchTerm}`);
    }
  };

  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}
        className="input"
      />
      <button
        type="submit"
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
      >
        <img
          className="searchimg"
          alt="searchimg"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
          height="30px"
          width="32px"
        />
      </button>
    </form>
  );
};

export default Form;
