import { currentUser, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout";

export default function NewSearch() {

  const [searchResults, setSearchResults] = useState();
  const [orgSearchResults, setOrgSearchResults] = useState();
  const [currentUser,setCurrentUser] = useState(); 
  const { userId } = useAuth()

 
  let search = ""

  
  const searchPromoters = async () => {
    try {
      const res = await fetch("/api/promoter/search/" + search);
      console.log(res)
      const data = await res.json();
      setSearchResults(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  const searchOrganisations = async () => {
    try {
      const res = await fetch("/api/promoter/searchorg/" + search);
      console.log(res)
      const data = await res.json();
      setOrgSearchResults(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  //component that will load if current user = user that submitted the incident
  // function RenderEdit(){
  //   if(currentUser && (currentUser === userId)){
  //     return <div>Edit entry</div>
  //   }

  //           }
  

  //takes the data returned from the individuals database, creates a jsx line containing the first and the last name, with a hyperlink to the promoter page
  function IsData() {
    const eachPromoter = searchResults.response.rows.map((line) => (
      <li key={line.id}>
        <Link href={`/promoter/${line.id}`}>
          {line.first} {line.last}
        </Link>
      </li>
    ));
    if(searchResults.response.rows != 0){
    return <div><h1>Promoters</h1><div>{eachPromoter}</div></div>
    }
    return <div><h1>Promoters</h1><div>No individuals in our database matching your search query</div></div>
  }

  //takes the data returned from the organisations database, creates a jsx line containing the first and the last name, with a hyperlink to the promoter page
  function IsDataOrg() {
    const eachOrg = orgSearchResults.response.rows.map((line) => (
      <li key={line.id}>
        <Link href={`/organisation/${line.id}`}>
          {line.company_name}, {line.company_country}
        </Link>
      </li>
    ));
    if(orgSearchResults.response.rows != 0){
    return <div><h1>Organisations</h1><div>{eachOrg}</div></div>;
    }
    return <div><h1>Organisations</h1><div>No organisations in our database matching your search query</div></div>
  }

  // displays if data hasn't been returned
  function IsNoData() {
    return <div></div>
  }

  // Component that displays different content depending if database has loaded or not.
  function DisplayIndData() {
    if (searchResults) {
      return <div><IsData /> </div>
    }
    return <IsNoData />
  }
  // Component that displays different content depending if database has loaded or not.
  function DisplayOrgData() {
    if (orgSearchResults) {
      return <div><IsDataOrg /> </div>
    }
    return <IsNoData />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = e.target.search.value
    search = searchQuery
    searchPromoters()
    searchOrganisations()
    return search
    
  }


return (
    <Layout>
        <h4>You can search for individuals by name, email, or country.<br></br><br></br>
          Companies can be searched by company name, or email. You can do a partial email search by only entering the domain. <br></br><br></br>
          
          Click on the results to see more information about an individual entry. If you are the author of an entry, you can link the entry to a company/individual, edit, update, or delete the entry. </h4>
        <form class="searchBar" onSubmit={handleSubmit} >
         <input type="text" placeholder="Search..." name="search" />
            <button type="submit" value="Search Database">SEARCH</button>
        </form>

        <DisplayIndData /> 
        <DisplayOrgData />
        <Link href="/">Back home</Link>
    </Layout>
)

}
