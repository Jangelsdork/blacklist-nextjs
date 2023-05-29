import { currentUser, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function NewSearch() {
  const [searchResults, setSearchResults] = useState();
  const [currentUser,setCurrentUser] = useState(); 
  const { userId } = useAuth()

 
  let search = ""

  const searchPromoters = async () => {
    try {
      const res = await fetch("/api/promoter/search/" + search);
      console.log(res)
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  //component that will load if current user = user that submitted the incident
  function RenderEdit(){
    if(currentUser && (currentUser === userId)){
      return <div>Edit User</div>
    }

            }
  

  //takes the data returned from the database, creates a jsx line containing the first and the last name, with a hyperlink to the promoter page
  function IsData() {
    const eachPromoter = searchResults.response.rows.map((line) => (
      <li key={line.id}>
        <Link href={`/promoter/${line.id}`}>
          {line.first} {line.last}{setCurrentUser(line.user)}
        </Link><RenderEdit />
      </li>
    ));
    return eachPromoter;
  }

  // displays if data hasn't been returned
  function IsNoData() {
    return <div></div>
  }

  // Component that displays different content depending if database has loaded or not.
  function DisplayData() {
    console.log(searchResults);
    if (searchResults) {
      return <IsData />
    }
    return <IsNoData />
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const searchQuery = e.target.search.value
    console.log(searchQuery)
    search = searchQuery
    searchPromoters()
    return search
    
  }

  
//   useEffect(() => {
//     if (!allPromoters) {
//       getPromoters();
//     }
//   });

return (
    <>
        <div>You can search for previous entries by name, email, country, or company.</div>
        <form class="searchBar" onSubmit={handleSubmit} >
         <input type="text" placeholder="Search..." name="search" />
            <button type="submit" value="Search Database">SEARCH</button>
        </form>

        <DisplayData /> 
        <Link href="/">Back to home</Link>
    </>
)

}
