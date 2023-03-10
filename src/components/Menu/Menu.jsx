import React from "react";
import { Link } from "react-router-dom";

function Menu() {

  return(
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export { Menu };