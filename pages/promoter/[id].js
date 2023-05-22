import { useRouter } from 'next/router';
import { useState } from 'react';
 
export default function Page() {
  const router = useRouter();
  const [onePromoter, setOnePromoter] = useState()

  const id = router.query.id
  const getOnePromoter = async () => {
    try {
      const res = await fetch("/api/promoter/"+ id);
      console.log(res)
      const data = await res.json();
      console.log(data);
      setOnePromoter(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    await getOnePromoter()
    console.log("clicked")
  }

  return (
  <>
  <p>ID: {id}</p>
  {/* <p>Promoter: {onePromoter}</p> */}
  <button onClick={handleClick}>show promoter</button>

  </>
  )
}