import { useState } from "react";
import UserTools from "./UserTools";
import EditForm from "./EditForm";
import SearchBox from "./SearchBox";

export default function DisplayPromoter({ onePromoter, userId, submittedBy }) {
  const [loadEditForm, setLoadEditForm] = useState(false);
  const [loadSearch, setLoadSearch] = useState(false);
  const [returnSearchValue, setReturnSearchValue] = useState();

  function handleClickEdit() {
    setLoadEditForm(!loadEditForm);
  }

  // this function allows user to delete an entry (if they are also the one who created it)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/promoter/delete/promoter/" + onePromoter.id)
      const data = await res.json()
      if(data){alert("Incident has been successfully deleted")}
    } catch (error){
    alert("Could not delete entry")
    }
  }

  function handleClickLink(loadSearch) {
    setLoadSearch(!loadSearch);
  }

  const getSearchSuggestions = async (searchValue) => {
    console.log(searchValue);
    try {
      const res = await fetch("/api/promoter/link/" + searchValue);
      const data = await res.json();
      setReturnSearchValue(data.response);
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
        <div>
          Status:
        </div>

      </div>
      {userId === submittedBy && (
        <UserTools
          handleClickEdit={handleClickEdit}
          handleSubmit={handleSubmit}
          handleClickLink={() => handleClickLink(loadSearch)}
        />
      )}
      {loadEditForm && <EditForm />}
      {loadSearch && <SearchBox getSearchSuggestions={getSearchSuggestions} />}
    </div>
  );
}
