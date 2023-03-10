import React from "react";
import { Nav } from '../../components/Nav/Nav';
import { Cards } from "../../components/Cards/Cards";
import '../UI.scss';

function HomeUI() {

  return(
    <div className="UI" >
        <Nav/>
        <div className='UI__characteres'>
          <Cards/>
        </div>
    </div>
  )
}


export { HomeUI };