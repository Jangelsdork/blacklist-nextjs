import Link from "next/link";

export default function Search() {
  const getPromoters = async () => {
    console.log();
    try {
      const res = await fetch("/api/promoter/get");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  function isData() {
    return <div>LOADED!</div>;
  }

  function isNoData() {
    return <div>Still Loading</div>;
  }

  function displayData(data) {
    if (true) {
      return <div>LOADED</div>;
    }
    return <isNoData />;
  }

  const handleClick = async (e) => {
    await getPromoters();
  };

  return (
    <>
      <h1>Look up a promoter</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <button onClick={handleClick}>query database</button>
        <displayData />
        <div>{displayData}</div>
      </h2>
    </>
  );
}
