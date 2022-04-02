import React, { createContext, useState, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { userData } from '../components/userData';
const UserContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [resources, setResources] = useState(userData);
  return (
    <UserContext.Provider value={[resources, setResources]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export function useAppContext() {
  return useContext(UserContext);
}

export default MyApp;
