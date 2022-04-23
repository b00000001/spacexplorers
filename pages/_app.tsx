import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { userInfo } from '../components/userData';

function MyApp({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState(userInfo);

  useEffect(() => {
    let resourcesInterval;
    if (userData.mining) {
      resourcesInterval = setInterval(() => {
        setUserData({
          ...userData,
          resources: userData.resources + userData.resourcesPerTick
        });
      }, 1000);
    } else {
      clearInterval(resourcesInterval);
    }
    return () => clearInterval(resourcesInterval);
  }, [userData.mining, userData.resources]);

  const startResourceSystem = () => {
    if (userData.mining) {
      setUserData({
        ...userData,
        resources: userData.resources,
        mining: false
      });
    } else {
      setUserData({
        ...userData,
        resources: userData.resources,
        mining: true
      });
    }
  };
  return (
    <Component
      {...pageProps}
      userData={userData}
      setUserData={setUserData}
      startResourceSystem={startResourceSystem}
    />
  );
}

export default MyApp;
