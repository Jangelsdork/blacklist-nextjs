import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import DisplayPromoter from "../../components/DisplayPromoter";
import Layout from "../../components/layout";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;
  const { userId } = useAuth();
  const [onePromoter, setOnePromoter] = useState();
  const [submittedBy, setSubmittedBy] = useState(false);
  const [loadContent, setLoadContent] = useState(<div>Loading...</div>)

  const getOnePromoter = async (id) => {
    try {
      const res = await fetch("/api/promoter/" + id);
      const data = await res.json();
      setOnePromoter(data.response.rows[0]);
      setSubmittedBy(data.response.rows[0].user);
      console.log(submittedBy)
    } catch (error) {
      console.log(error);
      setLoadContent(<div>Sorry, that entry doesn't exist</div>)

      
    }
  };


  useEffect(() => {
    getOnePromoter(id);
  }, []);

  return (
    <Layout>
      {onePromoter ? (
        <DisplayPromoter
          onePromoter={onePromoter}
          setOnePromoter={setOnePromoter}
          userId={userId}
          submittedBy={submittedBy}
          getOnePromoter={getOnePromoter}
        />
      ) : (
        <div className="loadContent">{loadContent}</div>
      )}

      <Link href="/newSearch">Back to Search</Link>
    </Layout>
  );
}
