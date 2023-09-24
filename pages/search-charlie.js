import React, { useState } from "react";

const SearchCharlie = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <input
        placeholder="Type something..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <p>{searchInput}</p>
    </>
  );
};

export default SearchCharlie;
