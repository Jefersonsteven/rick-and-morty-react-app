import './Nav.scss'
import React, { useEffect } from "react";
import { SearchBar } from '../SearchBar/SearchBar'
import { Menu } from '../Menu/Menu'
import { useLocation } from 'react-router-dom';
import { Logout } from '../Icons/Logout'
import { Link } from 'react-router-dom';

function Nav() {
  
  const { pathname } = useLocation();

  return(
    <nav className="Nav">
      <div className='Nav__menu'>
        <Menu />
      </div>
      <div className='Nav__search'>
        { pathname === '/home' && <SearchBar/> }
      </div>
      <div className='Nav__logout'>
          <Link to={"/"} className="Link">
            <Logout />
          </Link>
      </div>
    </nav>
  )
}



export { Nav }