import './Nav.scss'
import React, { useEffect } from "react";
import { SearchBar } from '../SearchBar/SearchBar'
import { Menu } from '../Menu/Menu'
import { useLocation } from 'react-router-dom';

function Nav() {
  
  const location = useLocation();

  return(
    <nav className="Nav">
      <div className='Nav__menu'>
        <Menu />
      </div>
      <div className='Nav__search'>
        { location.pathname === '/home' && <SearchBar/> }
      </div>
    </nav>
  )
}



export { Nav }