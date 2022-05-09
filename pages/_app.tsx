import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Resources, userInfo } from '../components/userData';
function MyApp({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState(userInfo);
  let playerResources = new Resources(userData, setUserData);

  useEffect(() => {
    let resourcesInterval;
    if (userData.mining.aiMiningUnlocked) {
      resourcesInterval = setInterval(() => {
        setUserData({
          ...userData,
          resources: {
            ...userData.resources,
            minerals: {
              ...userData.resources.minerals,
              ...(userData.mining.aiMiners > 0 && { amount: userData.resources.minerals.amount + userData.resources.minerals.mineralsPerTick * userData.mining.aiMiners }),
              ...(userData.mining.aiMiners === 0 && { amount: userData.resources.minerals.amount + userData.resources.minerals.mineralsPerTick })          

            }
          }
        });
      }, 500);
    } else {
      clearInterval(resourcesInterval);
    }
    return () => clearInterval(resourcesInterval);
  }, [userData.mining.aiMiningUnlocked, userData.resources.minerals.amount]);

  const startResourceSystem = () => {
    if (userData.mining.aiMiningUnlocked) {
      setUserData({
        ...userData,
        resources: userData.resources,
        mining: {
          ...userData.mining,
          aiMiningUnlocked: false
        }
      });
    } else {
      setUserData({
        ...userData,
        resources: userData.resources,
        mining: {
          ...userData.mining,
          aiMiningUnlocked: true
        }
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
