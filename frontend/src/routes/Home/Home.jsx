
import React, { Fragment }  from 'react';
import { HomeUI } from './HomeUI';
import { AppProvider } from '../../context/AppContext';
import { Nav } from '../../components/Nav/Nav';

function Home () {

  return (
    <Fragment>
      <div className="UI" >
          <Nav/>
      </div>
      <HomeUI />
    </Fragment>

  );
}

export { Home };