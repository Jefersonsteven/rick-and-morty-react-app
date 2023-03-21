
import React, { Fragment }  from 'react';
import { AboutUI } from './AboutUI';
import { AppProvider } from '../../context/AppContext';
import { Nav } from '../../components/Nav/Nav';

function About () {

  return (
    <Fragment>
      <div className="UI" >
           <Nav/>
       </div>
      <AboutUI />
    </Fragment>
  );
}

export { About };