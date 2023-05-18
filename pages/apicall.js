import React from 'react'

const Apicall = () => {

    const fetchPromoters = async () => {
        const res = await fetch("/api/promoter/get")
        const data = await res.json()
        console.log(data)
    }

  return (
    <button onClick={fetchPromoters}>Fetch</button>
  )
}

export default Apicall