import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({ children }) {

    return (
    <div>
       <div className='navbar'>
        <Link href="/">Home</Link>
        <Link href="/newSearch">Search</Link>
        <Link href="/add">Add new entry</Link>
        <Link href="/about">About</Link>

      </div>
      <div className='container-main'>
      {children}
      </div>
      </div>
    )
    
  }