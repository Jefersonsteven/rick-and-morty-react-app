import './Nav.scss'
import React from "react";
import { SearchBar } from '../SearchBar/SearchBar'

function Nav() {
  
  return(
    <nav className="Nav">
      <div className='Nav__search'>
        <SearchBar/>
      </div>
    </nav>
  )
}



export { Nav }