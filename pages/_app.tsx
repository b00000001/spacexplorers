import React, { createContext, useState, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { userData } from '../components/userData';


function MyApp({ Component, pageProps }: AppProps) {
  let {resources} = userData;
  const [resourcesState, setResourcesState] = useState(resources);
  const handleClick = () => {
    console.log(resourcesState)
  }
  return (    
      <Component {...pageProps} userData={userData} handleClick={handleClick}/>    
  );
}


export default MyApp;
