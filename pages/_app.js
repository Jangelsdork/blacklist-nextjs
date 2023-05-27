
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import '../styles/globals.css';
import { SignIn, UserButton } from '@clerk/clerk-react';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <UserButton />
        <Component {...pageProps} />;
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  )
        


}