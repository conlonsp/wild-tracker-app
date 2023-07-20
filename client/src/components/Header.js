import React, { useContext } from "react";
import NavBar from "./NavBar";


function Header() {
  
  return (
    <div>
      <h1>Wild Tracker</h1>
      <span>
        <NavBar />
      </span>
    </div>
  )
}

export default Header