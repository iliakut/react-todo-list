import React from "react";
import "./SearchPanel.css"

const SearchPanel = ({searchText, onSearch}) => {
  return (
    <input type="text"
           name="search-input"
           value={searchText}
           className="form-control search-input"
           onChange={(e) => onSearch(e.target.value)}
           placeholder="type to search"/>
  );
};

export default SearchPanel;
