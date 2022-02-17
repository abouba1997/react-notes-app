import React from "react";
import { FaSearch } from "react-icons/fa";

function Search({ dSearchText }) {
  const onChange = (e) => {
    dSearchText(e.target.value);
  };

  return (
    <div className="search-btn">
      <FaSearch className="fa-search" />
      <input
        className="search-input"
        type="text"
        name="search"
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
