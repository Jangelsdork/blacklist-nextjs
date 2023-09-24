import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import FormInd from "../../components/Formind";

export default function Page() {
  const router = useRouter();
  const { userId } = useAuth();
  const [oneOrganisation, setOneOrganisation] = useState();
  const [submittedBy, setSubmittedBy] = useState(false);
  const [loadEditForm, setLoadEditForm] = useState(false);
  const [loadSearch, setLoadSearch] = useState(false);
  //value entered into the search box
  const [searchValue, setSearchValue] = useState();

  //value returned by the api endpoint
  const [returnSearchValue, setReturnSearchValue] = useState();

  // gets the data relating to the specific promoter whose ID matches the URL
  const id = router.query.id;
  const getOneOrganisation = async () => {
    try {
      const res = await fetch("/api/promoter/organisation/" + id);
      const data = await res.json();
      setOneOrganisation(data.response.rows[0]);
      console.log(data);
      // setSubmittedBy(data.response.rows[0].user);
    } catch (error) {
      console.log(error);
    }
  };
  //   // gets the name and id of promoter entered in the search box to "link to an organisation"
  //   const getSearchSuggestions = async () => {
  //     console.log(searchValue)
  //     try {
  //       const res = await fetch("/api/promoter/link/" + searchValue );
  //       const data = await res.json();
  //       setReturnSearchValue(data.response);
  //       console.log(returnSearchValue)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleChange = (e) => {
    const searchInputBox = e.target.value;
    setSearchValue(searchInputBox);
    // getSearchSuggestions()
    console.log("changed");
  };

  useEffect(() => {
    if (!oneOrganisation) {
      getOneOrganisation();
    }
  });

  //changes state which will trigger the form to appear
  function handleClickEdit() {
    setLoadEditForm((Boolean = !Boolean));
  }

  //changes state which will trigger the search dialogue to appear
  function handleClickLink() {
    setLoadSearch((Boolean = !Boolean));
  }

  function EditForm() {
    if (loadEditForm === true) {
      return <FormInd parent={"Edit"} />;
    }
    return <div></div>;
  }

  function SearchBox() {
    if (loadSearch === true) {
      return (
        <form className="searchBar" onChange={handleChange} key="password">
          <input
            type="text"
            placeholder="not yet implemented..."
            name="search"
          />
        </form>
      );
    }
    return <div></div>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    alert("this feature is not yet implemented");
  }

  //display user tools if user was author of entry
  function UserTools() {
    console.log(userId + submittedBy);
    if (userId === submittedBy)
      return (
        <div className="user-tools">
          <button onClick={handleClickEdit}>Edit</button>
          <button onClick={handleSubmit}>Delete</button>
          <button onClick={handleClickLink}>Link to an organisation</button>
        </div>
      );
  }

  function DisplayPromoter() {
    if (oneOrganisation) {
      return (
        <div className="results-container">
          <div className="Organisation name:">
            Name: {oneOrganisation.company_name}
          </div>
          {/* <div className="promoterCountry">Country: {onePromoter.country}</div>
          <div className="promoterIncident">
            Description of the incident: {onePromoter.description}
          </div> */}
          <UserTools />
          <EditForm />
          <SearchBox />
        </div>
      );
    }
    return <div>///LOADING///</div>;
  }

  return (
    <>
      <DisplayPromoter />

      <Link href="/">Back to home</Link>
    </>
  );
}
