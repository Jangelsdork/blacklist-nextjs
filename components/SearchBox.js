import { useState } from "react";

export default function SearchBox({ getSearchSuggestions, returnSearchValue, onePromoter }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const searchInputBox = e.target.value;
    setSearchValue(searchInputBox);
    getSearchSuggestions(searchInputBox);
    // console.log("changed");
  };
 
  const handleClick = (e)=> {
    const orgId = e.target.id 
    const proId = onePromoter.id

    console.log(orgId, proId)

    //get current promoter id, and search promoter id. Pass both values to a (still to be made) api endpoint to link promoter & company. Re-render page so that the connection is displayed.  
  }

  // api call to post org id and pro id to linking table 

  const postLink = async (promoterData) => { // function needs to be called 
    try {
        const res = await fetch("/api/promoter/postind", // uri needs to be changed (and file needs to be created on the server)
        {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(promoterData), //change promoterdata into an object that contains both ids 
            headers: {
                "Content-Type": "application/json",
              },
        })
        
        const data = await res.json();

        // after successful response, sets state so "success" message renders for the user, and resets the form 
        if(data.response === "success"){
            console.log("success") // let's make this a better message / trigger a re-render 
        }
    } catch (error) {
        console.log(error)
    }
  }
  // Map over the return search values, return a div with the company name & on click url of api endpoint to link selected company to current promoter id
  
  function AutoSuggest() {
  
  const valuesToRender = returnSearchValue.map((line) => (
  

      <li id={line.id} onClick={handleClick} className="searchItem">{line.company_name}</li>

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
    <AutoSuggest />
    </div>
  );
}
