import React from 'react'

const Promoter = () => {

    const fetchPromoters = async () => {
        const res = await fetch("/api/promoter/1")
        const data = await res.json()
        console.log(data)
    }

  return (
    <button onClick={fetchPromoters}>Fetch</button>
  )
}

export default Promoter