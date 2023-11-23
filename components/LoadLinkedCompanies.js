import { useEffect, useState } from 'react';


//props will need to be the current promoter id 
const LoadLinkedCompanies = ({ promoterId }) => {
    const [linkedCompanies, setLinkedCompanies] = useState()
    const [linkedCompanyNames, setLinkedCompanyNames] = useState([])
    
    
    useEffect (() => { 
        async function getLinkedCompanies() {
        const response = await fetch("/api/promoter/getLinkedCompany/81");
        const result = await response.json();
        console.log(result.response.rows);
        setLinkedCompanies(result.response.rows)
        renderCompanies()
      } 
    getLinkedCompanies()
    getCompanyNames()

    },[])

    function getCompanyNames(){
    linkedCompanies.map((line) => console.log(line.companyId))

    }

    // at the moment this just console logs the company ID, we want it to render in the dom (and ultimately get the company name)
    function renderCompanies()  {
        linkedCompanies.map((line) => (
        console.log(line.companyId)
    ))}
    


    // fetch from PromoterCompany all entries with the reference of promoter id. Can we get organisation name from that? Or do we need to then fetch all the returned ids?
  return (
    //render the names of the organisations 
    <div>nichts</div>
  )
}

export default LoadLinkedCompanies