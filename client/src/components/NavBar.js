import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <h1>This is the NavBar</h1>
      <NavLink
        to='/'
        exact='true'
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/about'
      >
        About
      </NavLink>
      <NavLink
        to='/organizations'
      >
        Organizations
      </NavLink>
    </div>
  )
}

export default NavBar