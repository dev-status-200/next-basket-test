'use client'
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { store, persistor } from '../store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  
  return (
  <>
  <Provider store={store}>
    <PersistGate loading={'Loading...'} persistor={persistor}>
      <Header/>
        {children}
      <Footer/>
    </PersistGate>
  </Provider>
  </>
  );
}

export default MainLayout;