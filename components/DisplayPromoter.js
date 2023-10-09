import { useState, useEffect } from "react";
import UserTools from "./UserTools";
import EditForm from "./EditForm";
import SearchBox from "./SearchBox";

export default function DisplayPromoter({ onePromoter, userId, submittedBy, getOnePromoter, setOnePromoter}) {
  const [loadSearch, setLoadSearch] = useState(false);
  const [returnSearchValue, setReturnSearchValue] = useState([]);


  const  handleClickEdit = async ()  => {
    
    try {
      const res = await fetch("/api/promoter/status/" + onePromoter.id)
      console.log("/api/promoter/status/" + onePromoter.id)
      const data = await res.json()
      console.log(onePromoter)
      if(data){
        console.log(data)
        getOnePromoter(onePromoter.id)
        alert("Incident has been successfully updated");

    }

    } catch (error){
    alert("Something went wrong...")
    console.log(error)
    }

    
  }

  // this function allows user to delete an entry (if they are also the one who created it)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/promoter/delete/promoter/" + onePromoter.id)
      const data = await res.json()
      if(data){
        alert("Incident has been successfully deleted");
    }

    } catch (error){
    alert("Could not delete entry")
    }
  }

  function handleClickLink(loadSearch) {
    setLoadSearch(!loadSearch);
  }

  // if the status on the database is true, returns notification that the report is active 
  function StatusWidget(){
    console.log(onePromoter)
    if(onePromoter.status === 1)
    return(
      <div className="status-true">Report is active</div>
    )
    else if(onePromoter.status=== 0)
    return(
    <div className="status-false">Report has been marked as resolved as of {onePromoter.dateResolved}</div>
    )
    else
    return (
      <div className="status-error"> Status not available</div>

    )
  }

  const getSearchSuggestions = async (searchValue) => {
    console.log(searchValue);
    try {
      const res = await fetch("/api/promoter/link/" + searchValue);
      const data = await res.json();
      setReturnSearchValue(data.response.rows);
      console.log(returnSearchValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="results-container">
      <div className="results-inner">
        <h3>Incident Report - Ref: {onePromoter.id}</h3>
        <div>Report received: {onePromoter.submissionDate}</div>
        <div className="promoterName">
          Name: {onePromoter.first} {onePromoter.last}
        </div>
        <div className="promoterCountry">Country: {onePromoter.country}</div>
        <div className="promoterIncident">
          Description of the incident: {onePromoter.description}
        </div>
        <div>Related companies: </div>
        <div className="status-line">
          Status: <StatusWidget />
        </div>

      </div>
      {userId === submittedBy && (
        <UserTools
          handleClickEdit={handleClickEdit}
          handleSubmit={handleSubmit}
          handleClickLink={() => handleClickLink(loadSearch)}
          status={onePromoter.status}
        />
      )}
      {/* {loadEditForm && <EditForm />} */}
      {loadSearch && <SearchBox getSearchSuggestions={getSearchSuggestions} returnSearchValue={returnSearchValue} />}
    </div>
  );
}
