import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export default function Page() {
  const router = useRouter();
  const { userId } = useAuth();
  const [onePromoter, setOnePromoter] = useState();
  const [submittedBy, setSubmittedBy] = useState(false);

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

  //display user tools if user was author of entry
  function UserTools() {
    console.log(userId + submittedBy);
    if (userId === submittedBy)
      return (
        <div className="user-tools">
          <div>Edit</div>
          <div>Delete</div>
          <div>Link to an organisation</div>
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
