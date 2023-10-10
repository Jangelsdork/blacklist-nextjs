import { useState } from "react";

export default function SearchBox({ getSearchSuggestions, returnSearchValue }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const searchInputBox = e.target.value;
    setSearchValue(searchInputBox);
    getSearchSuggestions(searchInputBox);
    // console.log("changed");
  };
 
  function handleClick(){
    //get current promoter id, and search promoter id. Pass both values to a (still to be made) api endpoint to link promoter & company. Re-render page so that the connection is displayed.  
  }
 
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
    <div>
    <form className="searchBar" key="password">
      <input
        type="text"
        placeholder="not yet implemented..."
        name="search"
        value={searchValue}
        onChange={handleChange}
      />
      
    </form>
    <AutoSuggest onClick={handleClick}/>
    </div>
  );
}
