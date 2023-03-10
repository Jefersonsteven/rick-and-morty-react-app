
import React  from 'react';
import { AboutUI } from './AboutUI';
import { AppProvider } from '../../context/AppContext';

function About () {

  return (
    <AppProvider>
      <AboutUI />
    </AppProvider>
  );
}

export { About };