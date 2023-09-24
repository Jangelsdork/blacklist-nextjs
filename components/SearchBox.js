import { useState } from "react";

export default function SearchBox({ getSearchSuggestions }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const searchInputBox = e.target.value;
    setSearchValue(searchInputBox);
    getSearchSuggestions(searchInputBox);
    // console.log("changed");
  };

  return (
    <form className="searchBar" key="password">
      <input
        type="text"
        placeholder="not yet implemented..."
        name="search"
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
}
