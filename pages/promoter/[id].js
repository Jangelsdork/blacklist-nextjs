import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import FormInd from "../../components/Formind";

export default function Page() {
  const router = useRouter();
  const { userId } = useAuth();
  const [onePromoter, setOnePromoter] = useState();
  const [submittedBy, setSubmittedBy] = useState(false);
  const [loadEditForm, setLoadEditForm] = useState(false);
  const [loadSearch, setLoadSearch] = useState(false);
  //value entered into the search box
  const [searchValue, setSearchValue] = useState();

  //value returned by the api endpoint
  const [returnSearchValue, setReturnSearchValue] = useState();

  // gets the data relating to the specific promoter whose ID matches the URL
  const id = router.query.id;
  const getOnePromoter = async () => {
    try {
      const res = await fetch("/api/promoter/" + id);
      const data = await res.json();
      setOnePromoter(data.response.rows[0]);
      setSubmittedBy(data.response.rows[0].user);
    } catch (error) {
      console.log(error);
    }
  };
  // gets the name and id of promoter entered in the search box to "link to an organisation"
  const getSearchSuggestions = async () => {
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

  const handleChange = (e) => {
    const searchInputBox = e.target.value;
    setSearchValue(searchInputBox);
    getSearchSuggestions();
    // console.log("changed");
  };

  useEffect(() => {
    if (!onePromoter) {
      getOnePromoter();
    }
  });

  //changes state which will trigger the form to appear
  function handleClickEdit() {
    setLoadEditForm(!loadEditForm);
  }

  //changes state which will trigger the search dialogue to appear
  function handleClickLink() {
    setLoadSearch(!loadSearch);
  }

  function EditForm() {
    return <FormInd parent={"Edit"} />;
  }

  function SearchBox() {
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    alert("this feature is not yet implemented");
  }

  //display user tools if user was author of entry
  function UserTools() {
    console.log(userId + submittedBy);
    return (
      <div className="user-tools">
        <button onClick={handleClickEdit}>Edit</button>
        <button onClick={handleSubmit}>Delete</button>
        <button onClick={handleClickLink}>Link to an organisation</button>
      </div>
    );
  }

  function DisplayPromoter() {
    return (
      <div className="results-container">
        <div className="promoterName">
          Name: {onePromoter.first} {onePromoter.last}
        </div>
        <div className="promoterCountry">Country: {onePromoter.country}</div>
        <div className="promoterIncident">
          Description of the incident: {onePromoter.description}
        </div>
        {userId === submittedBy && <UserTools />}
        {loadEditForm && <EditForm />}
        {loadSearch && <SearchBox />}
      </div>
    );
  }

  return (
    <>
      {onePromoter ? <DisplayPromoter /> : <div>///LOADING///</div>}

      <Link href="/">Back to home</Link>
    </>
  );
}
