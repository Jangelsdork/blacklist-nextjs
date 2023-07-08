
export default function Navbar(){

function NewEntryButton(){
    return (
    <>
        <button>New Entry</button>
    </>
    )
}

    return
    (
     <div className='navbar'>
        <Link href="/">Home</Link>
        <Link href="/newSearch">Search</Link>
        <NewEntryButton />
        <Link href="/about">About</Link>
    </div>
    )
}   