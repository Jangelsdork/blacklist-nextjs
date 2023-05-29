
export default function Navbar(){
    return(
     <div className='navbar'>
        <Link href="/">Home</Link>
        <Link href="/newSearch">Search</Link>
        <Link href="/add">New Entry</Link>
        <Link href="/about">About</Link>
    </div>
    )
}