
import React  from 'react';
import { HomeUI } from './HomeUI';
import { AppProvider } from '../../context/AppContext';

function Home () {

  return (
    <AppProvider>
      <HomeUI />
    </AppProvider>
  );
}

export { Home };