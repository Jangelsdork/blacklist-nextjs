import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({ children }) {

    return (
    <div className={styles.container}>
       <div className='navbar'>
        <Link href="/">Home</Link>
        <Link href="/newSearch">Search</Link>
        <Link href="/add">Add new entry</Link>
        <Link href="/about">About</Link>

    </div>
      {children}</div>
    )
    
  }