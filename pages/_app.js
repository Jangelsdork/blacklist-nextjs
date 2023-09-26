
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import '../styles/globals.css';
import { SignIn } from '@clerk/clerk-react';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  
  
  return (
<div className='clerkContainer'>
    <ClerkProvider>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>

    </div> 
  )
        


}