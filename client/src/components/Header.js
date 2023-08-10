import React from "react";
import NavBar from "./NavBar";

function Header() {
  
  return (
    <div className="head">
      <h1 style={{marginBottom: '0', marginTop: '40px', zIndex: '-1'}}>Wild Tracker</h1>
      <span>
        <NavBar />
      </span>
    </div>
  )
}

export default Header