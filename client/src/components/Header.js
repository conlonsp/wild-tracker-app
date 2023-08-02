import React, { useContext } from "react";
import NavBar from "./NavBar";
import { UserContext } from "../Context";


function Header() {

  const { user } = useContext(UserContext)

  console.log(user)
  
  return (
    <div className="head">
      {/* <img src={`${user.avatar_url}`}></img> */}
      <h1 style={{marginBottom: '0', marginTop: '40px', zIndex: '-1'}}>Wild Tracker</h1>
      <span>
        <NavBar />
      </span>
    </div>
  )
}

export default Header