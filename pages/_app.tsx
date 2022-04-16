import React, { createContext, useState, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { userData } from '../components/userData';


function MyApp({ Component, pageProps }: AppProps) {
  return (    
      <Component {...pageProps} userData={{resources: 0}} />    
  );
}


export default MyApp;
