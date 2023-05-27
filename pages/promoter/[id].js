import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Page() {
  const router = useRouter();
  const [onePromoter, setOnePromoter] = useState();

  const id = router.query.id;
  const getOnePromoter = async () => {
    try {
      const res = await fetch("/api/promoter/" + id);
      const data = await res.json();
      setOnePromoter(data.response.rows[0]);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    if (!onePromoter) {
      getOnePromoter();
    }
  });


  function DisplayPromoter() {
    if (onePromoter) {
      console.log(onePromoter)
      return (
      <>
        <div className="promoterName">{onePromoter.first} {onePromoter.last}</div>
        <div className="promoterCompany">{onePromoter.company}</div>
        <div className="promoterCountry">{onePromoter.country}</div>
        <div className="promoterIncident">{onePromoter.description}</div>
      </>
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
