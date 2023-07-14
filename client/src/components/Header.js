import React, { useContext } from "react";
import NavBar from "./NavBar";
import { UserContext } from "../Context";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  function handleLogout() {
    if(user) {
      fetch('/logout', { method: "DELETE" }).then(r => {
        if(r.ok) {
          setUser(null)
        }
      })
    } else {
      navigate('/loginsignup')
    }
  }
  
  return (
    <div>
      <h1>This is the Header</h1>
      <button onClick={handleLogout}>{user ? "Logout" : "Login"}</button>
      <NavBar />
    </div>
  )
}

export default Header