import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [resourcesState, setResourcesState] = useState({
    resources: 0,
    resourcesPerTick: 1,
    mining: false
  });

  useEffect(() => {
    let resourcesInterval;
    if (resourcesState.mining) {
      resourcesInterval = setInterval(() => {
        setResourcesState({
          ...resourcesState,
          resources: resourcesState.resources + resourcesState.resourcesPerTick
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
        ...resourcesState,
        resources: resourcesState.resources,
        mining: false
      });
    } else {
      setResourcesState({
        ...resourcesState,
        resources: resourcesState.resources,
        mining: true
      });
    }
  };
  return (
    <Component
      {...pageProps}
      resourcesState={resourcesState}
      setResourcesState={setResourcesState}
      startResourceSystem={startResourceSystem}
    />
  );
}

export default MyApp;
