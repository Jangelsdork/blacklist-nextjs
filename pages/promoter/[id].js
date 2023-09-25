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

  const getOnePromoter = async (id) => {
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
    getOnePromoter(id);
  }, []);

  return (
    <Layout>
      {onePromoter ? (
        <DisplayPromoter
          onePromoter={onePromoter}
          userId={userId}
          submittedBy={submittedBy}
        />
      ) : (
        <div>///LOADING///</div>
      )}

      <Link href="/">Back to home</Link>
    </Layout>
  );
}
