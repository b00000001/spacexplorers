import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import ResourceContext from '../components/ResourceContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ResourceContext.Provider
        value={{
          count: 10,
          startCounter: false
        }}
      >
        <Component {...pageProps} />
      </ResourceContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
