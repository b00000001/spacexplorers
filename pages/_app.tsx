import React, { createContext, useState, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  const [resourcesState, setResourcesState] = useState({
    resources: 0
  });
  const handleClick = () => {
    setResourcesState({ resources: resourcesState.resources + 1 });
    console.log(resourcesState)
  };
  return (    
      <Component {...pageProps}  resources={resourcesState.resources} handleClick={handleClick}/>    
  );
}


export default MyApp;
