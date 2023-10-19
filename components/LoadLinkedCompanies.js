import React from 'react'
import { useEffect } from 'react';


//props will need to be the current promoter id 
const LoadLinkedCompanies = ({ promoterId }) => {
    
    useEffect (() => { 
        async function getLinkedCompanies() {
        const response = await fetch("/api/promoter/getLinkedCompany/81");
        const result = await response.json();
        console.log(result);
      } 
    getLinkedCompanies()
    })
    


    // fetch from PromoterCompany all entries with the reference of promoter id. Can we get organisation name from that? Or do we need to then fetch all the returned ids?
  return (
    //render the names of the organisations 
    <div>LoadLinkedCompanies </div>
  )
}

export default LoadLinkedCompanies