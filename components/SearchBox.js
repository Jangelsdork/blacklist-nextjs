import { useState } from "react";

export default function SearchBox({ getSearchSuggestions, returnSearchValue }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const searchInputBox = e.target.value;
    setSearchValue(searchInputBox);
    getSearchSuggestions(searchInputBox);
    // console.log("changed");
  };
  // Map over the return search values, return a div with the company name & on click url of api endpoint to link selected company to current promoter id
  function AutoSuggest() {
  
  const valuesToRender = returnSearchValue.map((line) => (
  

      <li className="searchItem">{line.company_name}</li>

  ))

  if(valuesToRender){
    return(
      <ul className="searchContainer">{valuesToRender}</ul>

    )
  } else {
    return <div>error</div>
  }

  }
  
  return (
    <form className="searchBar" key="password">
      <input
        type="text"
        placeholder="not yet implemented..."
        name="search"
        value={searchValue}
        onChange={handleChange}
      />
      <AutoSuggest />
    </form>
  );
}
