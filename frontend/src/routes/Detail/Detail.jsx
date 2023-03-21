
import React, { Fragment } from 'react';
import { DetailUI } from './DetailUI';
import { Nav } from '../../components/Nav/Nav';

function Detail () {

  return (  
    <Fragment>
      <div className="UI" >
           <Nav/>
      </div>
      <DetailUI />
    </Fragment>
  );
}

export { Detail };