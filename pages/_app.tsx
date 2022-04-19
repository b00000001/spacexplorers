import React, { createContext, useState, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  const [resourcesState, setResourcesState] = useState({
    resources: 0,
    mining: false
  });

  const handleClick = () => {
    // let resourcesInterval;
    // if (resourcesState.mining) {
    //   setResourcesState({
    //     ...resourcesState,
    //     mining: false
    //   });
    //   clearInterval(resourcesInterval);
    // } else {
    //   setResourcesState({
    //     ...resourcesState,
    //     mining: true
    //   });
    //   resourcesInterval = setInterval(updateResources, 1000);
    // }
    updateResources();   
  };

  const updateResources= () => {
    setResourcesState({
      ...resourcesState,
      resources: resourcesState.resources + 1
    });
    console.log('update resources', resourcesState)
  };
  return (    
      <Component {...pageProps}  resources={resourcesState.resources} handleClick={handleClick}/>    
  );
}


export default MyApp;
