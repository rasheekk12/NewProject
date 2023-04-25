import React, { useState } from "react";

const SearchBar = ({ search, onChange }) => {
  return (
    <div align="center">
      <input
        type="text"
        placeholder="Search Text Here"
        onChange={(e) => onChange(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
