import './Nav.scss'
import React from "react";
import { SearchBar } from '../SearchBar/SearchBar'
import { Menu } from '../Menu/Menu'

function Nav() {
  
  return(
    <nav className="Nav">
      <div className='Nav__menu'>
        <Menu />
      </div>
      <div className='Nav__search'>
        <SearchBar/>
      </div>
    </nav>
  )
}



export { Nav }