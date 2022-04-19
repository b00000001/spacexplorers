import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [resourcesState, setResourcesState] = useState({
    resources: 0,
    mining: false
  });

  useEffect(() => {
    let resourcesInterval;
    if (resourcesState.mining) {
      resourcesInterval = setInterval(() => {
        setResourcesState({
          ...resourcesState,
          resources: resourcesState.resources + 1
        });
      }, 1000);
    } else {
      clearInterval(resourcesInterval);
    }
    return () => clearInterval(resourcesInterval);
  }, [resourcesState.mining, resourcesState.resources]);

  const startResourceSystem = () => {
    if (resourcesState.mining) {
      setResourcesState({
        resources: resourcesState.resources,
        mining: false
      });
    } else {
      setResourcesState({
        resources: resourcesState.resources,
        mining: true
      });
    }
  };
  return (
    <Component
      {...pageProps}
      resourcesState={resourcesState}
      startResourceSystem={startResourceSystem}
    />
  );
}

export default MyApp;
