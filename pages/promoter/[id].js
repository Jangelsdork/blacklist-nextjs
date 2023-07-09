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
  const [loadEditForm, setLoadEditForm] = useState(false)
  const [loadSearch, setLoadSearch] = useState(false)

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

  useEffect(() => {
    if (!onePromoter) {
      getOnePromoter();
    }
  });

  //changes state which will trigger the form to appear
  function handleClickEdit(){
    setLoadEditForm(Boolean=!Boolean)
  }

  //changes state which will trigger the search dialogue to appear
  function handleClickLink(){
    setLoadSearch(Boolean=!Boolean)
  }

  function EditForm(){
    if(loadEditForm===true){
      return (<FormInd parent={"Edit"}/>)
    }
    return <div></div>
  }


  function SearchBox(){
    if(loadSearch===true){
      return (
        <form class="searchBar" onSubmit={handleSubmit} >
         <input type="text" placeholder="not yet implemented..." name="search" />
            <button type="submit" value="Search Database">SEARCH</button>
        </form>
      )
    }
    return <div></div>
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log("submitted")
    alert("this feature is not yet implemented")
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
    if (onePromoter) {
      console.log(onePromoter);
      return (
        <div className="results-container">
          <div className="promoterName">
            Name: {onePromoter.first} {onePromoter.last}
          </div>
          <div className="promoterCountry">Country: {onePromoter.country}</div>
          <div className="promoterIncident">
            Description of the incident: {onePromoter.description}
          </div>
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
