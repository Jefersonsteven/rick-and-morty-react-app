import React from "react";
import { Link } from "react-router-dom";
import { Rick } from "../Icons/Rick"
import "./Menu.scss"

function Menu() {

  return(
    <nav className="Menu">
      <ul>
        <li>
          <Link to={"/"} className="Link">
            <Rick />
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="Link">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export { Menu };