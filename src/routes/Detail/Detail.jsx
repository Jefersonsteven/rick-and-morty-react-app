
import React  from 'react';
import { DetailUI } from './DetailUI';
import { AppProvider } from '../../context/AppContext';

function Detail () {

  return (
    <AppProvider>
      <DetailUI />
    </AppProvider>
  );
}

export { Detail };